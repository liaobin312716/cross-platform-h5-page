define('widget/index/index.es6', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _adapterWaimaiAppEs6 = require('adapter/waimai/app.es6');
  
  var _adapterWaimaiAppEs62 = _interopRequireDefault(_adapterWaimaiAppEs6);
  
  exports['default'] = {
    init: function init() {
      var me = this;
      _adapterWaimaiAppEs62['default'].ready(function (initData) {
        var dialogBtn = document.querySelector('.dialog-btn button');
        dialogBtn.addEventListener('click', function (e) {
          me.showDialog();
        }, false);
      });
    },
    showDialog: function showDialog() {
      _adapterWaimaiAppEs62['default'].ui.alert('I am a cross-platform dialog');
    }
  };
  module.exports = exports['default'];

});
