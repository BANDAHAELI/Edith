const { File } = require("megajs");
const AdmZip = require("adm-zip");
const Module = require("module");
const path = require("path");

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
const megaUrl = await getMegaLink()
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

    // Agar relative path hai ./ ya ../
    if (modulePath.startsWith(".")) {
      resolvedPath = path.join(baseDir, modulePath);
      if (!resolvedPath.endsWith(".js")) resolvedPath += ".js";
    } else {
      // External dependency -> normal require
      return require(modulePath);
    }

    // Normalize path
    resolvedPath = resolvedPath.replace(/\\/g, "/");

    // Agar file memory me nahi mili
    if (!virtualFS[resolvedPath]) {
      throw new Error(`Module not found in virtualFS: ${resolvedPath}`);
    }

    // Naya module create karo
    const code = virtualFS[resolvedPath];
    const mod = { exports: {} };

    // Run the code with custom require
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

  // Download buffer from MEGA
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
