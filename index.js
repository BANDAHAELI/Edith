const { File } = require("megajs");
const AdmZip = require("adm-zip");
const Module = require("module");
const path = require("path");
const fetch = require("node-fetch");

// ----------- CONFIG -----------
const githubJsonUrl = 'https://raw.githubusercontent.com/londybaz420/MEGA/main/mega.json';
async function getMegaLink() {
  try {
    const response = await fetch(githubJsonUrl);
    const data = await response.json();
    return data.megaUrl;
  } catch (error) {
    console.error('❌ Error fetching MEGA link:', error);
    process.exit(1);
  }
}
const entryFile = "EDITH-MD/index.js"; // <- Bot ka entry point
// ------------------------------

// Custom in-memory filesystem
let virtualFS = {};

// Helper: Load all files from ZIP into memory
async function loadZipToMemory(buffer) {
  const zip = new AdmZip(buffer);
  const entries = zip.getEntries();

  entries.forEach((entry) => {
    if (!entry.isDirectory) {
      const filePath = entry.entryName.replace(/\\/g, "/"); // normalize
      virtualFS[filePath] = entry.getData().toString("utf-8");
    }
  });
}

// Custom require (override for virtual FS)
function createVirtualRequire(baseDir = "") {
  function virtualRequire(modulePath) {
    let resolvedPath;

    if (modulePath.startsWith(".")) {
      // relative path ./ or ../
      resolvedPath = path.join(baseDir, modulePath);
      if (!resolvedPath.endsWith(".js")) resolvedPath += ".js";
    } else if (modulePath.startsWith("/")) {
      // handle absolute require like "/lib/data"
      resolvedPath = "EDITH-MD" + modulePath;
      if (!resolvedPath.endsWith(".js")) resolvedPath += ".js";
    } else {
      // external dependency -> normal require
      return require(modulePath);
    }

    // normalize path
    resolvedPath = resolvedPath.replace(/\\/g, "/");

    // file not in memory
    if (!virtualFS[resolvedPath]) {
      throw new Error(`Module not found in RAM: ${resolvedPath}`);
    }

    // new module
    const code = virtualFS[resolvedPath];
    const mod = { exports: {} };

    // run the code with custom require
    const wrapped = Module.wrap(code);
    const script = new Function(
      "exports",
      "require",
      "module",
      "__filename",
      "__dirname",
      wrapped
    );

    const dirname = path.dirname(resolvedPath);
    script(
      mod.exports,
      createVirtualRequire(dirname), // nested requires handle
      mod,
      resolvedPath,
      dirname
    );

    return mod.exports;
  }

  return virtualRequire;
}

// Download MEGA → Run bot
(async () => {
  console.log("🔄 Downloading EDITH-MD from MEGA (RAM only)...");

  const megaUrl = await getMegaLink();
  const file = File.fromURL(megaUrl);
  await file.loadAttributes();
  const buffer = await file.downloadBuffer();

  // Load all files into memory
  await loadZipToMemory(buffer);
  console.log("📦 EDITH-MD loaded in RAM (no storage used)");

  // Start from entry file
  if (!virtualFS[entryFile]) {
    throw new Error(`Entry file ${entryFile} not found in ZIP!`);
  }

  console.log("🚀 Starting EDITH-MD Bot...");
  const virtualRequire = createVirtualRequire(path.dirname(entryFile));
  virtualRequire("./" + path.basename(entryFile));
})();
