const { File } = require('megajs');
const AdmZip = require('adm-zip');
const fetch = require('node-fetch');
const path = require('path');
const Module = require('module');

// GitHub JSON containing MEGA.nz link
const githubJsonUrl = 'https://raw.githubusercontent.com/londybaz420/MEGA/main/mega.json';

// Virtual in-memory filesystem
const virtualFS = {};
let entryFile = null;

/**
 * Custom require function to load from virtualFS
 */
function createVirtualRequire(baseDir) {
  function virtualRequire(modulePath) {
    let resolvedPath;

    if (modulePath.startsWith('.')) {
      resolvedPath = path.join(baseDir, modulePath);
      if (!resolvedPath.endsWith('.js')) resolvedPath += '.js';
    } else {
      return require(modulePath); // Node modules normally
    }

    if (!virtualFS[resolvedPath]) {
      throw new Error(`Module not found in RAM: ${modulePath}`);
    }

    const moduleContent = virtualFS[resolvedPath];
    const moduleExports = {};
    const module = { exports: moduleExports };

    const wrapper = new Function(
      'require', 'module', 'exports', '__dirname', '__filename',
      moduleContent
    );

    wrapper(
      createVirtualRequire(path.dirname(resolvedPath)),
      module,
      moduleExports,
      path.dirname(resolvedPath),
      resolvedPath
    );

    return module.exports;
  }
  return virtualRequire;
}

/**
 * Fetch MEGA link from GitHub JSON
 */
async function getMegaLink() {
  const response = await fetch(githubJsonUrl);
  const data = await response.json();
  return data.megaUrl;
}

/**
 * Load ZIP into memory (no extraction to disk)
 */
async function loadZipToMemory(zipBuffer) {
  const zip = new AdmZip(zipBuffer);
  const entries = zip.getEntries();

  for (const entry of entries) {
    if (entry.isDirectory) continue;

    const fullPath = path.join('/', entry.entryName);
    virtualFS[fullPath] = entry.getData().toString('utf-8');

    if (entry.entryName.toLowerCase().endsWith('index.js')) {
      entryFile = fullPath;
    }
  }
}

/**
 * Main execution
 */
(async () => {
  try {
    const megaUrl = await getMegaLink();

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

  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
})();
