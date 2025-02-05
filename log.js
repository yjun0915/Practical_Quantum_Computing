var _debug = false;

function LOGD(tag, txt) {
  if (_debug) {
    console.log("[DBG-QX] " + tag + " " + (txt ? txt : ""));
  }
}

function LOGE(tag, txt) {
  console.error("[DBG-QX] " + tag + " " + (txt ? txt : ""));
}

function init(debug) {
  _debug = debug;
}

exports.init = init;
exports.debug = LOGD;
exports.error = LOGE;
