"use strict";
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var performanceCookieCategory = 'C0002,';
function waitForOneTrust() {
  hasOneTrustLoaded();
  var attempts = 0;
  var interval = setInterval(function () {
    if (hasOneTrustLoaded() || attempts > 100) {
      clearInterval(interval);
    }
    attempts++;
  }, 100);
}
function hasOneTrustLoaded() {
  if (typeof window.OnetrustActiveGroups === 'string' && _typeof(window.OneTrust) === 'object') {
    optanonWrapper();
    return true;
  }
  return false;
}
function optanonWrapper() {
  window.OneTrust.OnConsentChanged(function () {
    var _hsp = window._hsp = window._hsp || [];
    var _hsq = window._hsq = window._hsq || [];
    if (!window.OnetrustActiveGroups.includes(performanceCookieCategory)) {
      _hsp.push(['revokeCookieConsent']);
      _hsq.push(['doNotTrack']);
    } else {
      _hsq.push(["doNotTrack", {
        track: true
      }]);
    }
  });
}
(function () {
  waitForOneTrust();
})();
