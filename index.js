const AdmZip = require("adm-zip");
const fetch = require("node-fetch");
const vm = require("vm");
const path = require("path");

// 🔗 Tumhara JSON link (isme se megaUrl niklega)
const githubJsonUrl = "https://raw.githubusercontent.com/londybaz420/MEGA/main/mega.json";

// In-memory files
let files = {};

// Virtual require system
function virtualRequire(filePath) {
  if (filePath.startsWith(".")) {
    filePath = path.join("EDITH-MD", filePath);
  }
  if (!files[filePath]) {
    throw new Error("Module not found in RAM: " + filePath);
  }

  const moduleCode = files[filePath];
  const module = { exports: {} };
  const sandbox = {
    require: virtualRequire,
    module,
    exports: module.exports,
    console,
    process,
    Buffer,
    __dirname: path.dirname(filePath),
    __filename: filePath,
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
  };

  vm.runInNewContext(moduleCode, sandbox, { filename: filePath });
  return module.exports;
}

// 🔽 Get Mega link from JSON
async function getMegaUrl() {
  const res = await fetch(githubJsonUrl);
  const data = await res.json();
  return data.megaUrl;
}

// 🔽 Download & Load Bot into RAM
async function loadBot() {
  console.log("🔄 Downloading EDITH-MD from MEGA (RAM only)...");

  const megaUrl = await getMegaUrl();

  const res = await fetch(megaUrl);
  const buffer = Buffer.from(await res.arrayBuffer());

  const zip = new AdmZip(buffer);
  const zipEntries = zip.getEntries();

  files = {};
  zipEntries.forEach((entry) => {
    if (!entry.isDirectory) {
      files[entry.entryName] = entry.getData().toString("utf-8");
    }
  });

  console.log("📦 EDITH-MD loaded in RAM (no storage used)");
  console.log("🚀 Starting EDITH-MD Bot...");

  // Start main bot
  virtualRequire("EDITH-MD/index.js");
}

loadBot().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
