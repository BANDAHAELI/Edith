const AdmZip = require("adm-zip");
const fetch = require("node-fetch");
const vm = require("vm");
const path = require("path");

// MEGA ya direct link se bot.zip fetch karna
async function loadBot() {
  console.log("🔄 Downloading EDITH-MD from MEGA (RAM only)...");

  const res = await fetch(process.env.BOT_ZIP_URL);
  const buffer = Buffer.from(await res.arrayBuffer());

  const zip = new AdmZip(buffer);
  const zipEntries = zip.getEntries();

  const files = {};
  zipEntries.forEach((entry) => {
    if (!entry.isDirectory) {
      files[entry.entryName] = entry.getData().toString("utf-8");
    }
  });

  console.log("📦 EDITH-MD loaded in RAM (no storage used)");

  // Virtual require
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
      __dirname: path.dirname(filePath),
    };
    vm.runInNewContext(moduleCode, sandbox, { filename: filePath });
    return module.exports;
  }

  console.log("🚀 Starting EDITH-MD Bot...");

  // Ab main bot run karna
  virtualRequire("EDITH-MD/index.js");
}

loadBot().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
