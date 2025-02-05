const log = require("./log");
const request = require("request");
//...
module.exports = {
  init: function (cfg) {
    _config = cfg;
    var debug = _config.debug ? _config.debug : false;
    log.init(debug);
    return loginWithToken();
  },

  getCalibration: calibration,
  getBackends: backends,
  getParameters: parameters,
  runExperiment: experiment,
  // getJobs      : jobs는 연습문제로 남겨둠
  // getMyCredits : credits는 연습문제로 남겨둠
};
