;define('adapter/waimai/ui.es6', function(require, exports, module) {

  /**
   * Created by liaobin on 16/4/10.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  exports['default'] = (function () {
  
    return {
      /**
       * @desc toast 全局提示
       * @param text 提示内容
       * @param duration 时间间隔  short | long
       * **/
      toast: function toast() {
        var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var duration = arguments.length <= 1 || arguments[1] === undefined ? 'short' : arguments[1];
  
        WMApp.nui.toast({
          text: text,
          duration: duration
        });
      },
      /**
       *  @desc 弹窗
       * **/
      dialog: function dialog(opt) {
        var params = Object.assign({
          title: '提示',
          content: '',
          cancelBtnText: '取消',
          confirmBtnText: '确认',
          onOk: function onOk() {},
          onCancel: function onCancel() {}
        }, opt);
  
        WMApp.nui.dialog(params, function (data) {
          if (data.status) {
            params.onOk();
          } else {
            params.onCancel();
          }
        });
      },
      /**
       *  @desc  alert 提示弹窗
       *  @param text 提示文案
       *  @param onOk 确定回调
       *  @param okText 确定文案
       * **/
  
      alert: function alert(text, onOk, okText) {
        var params = {
          content: text || '',
          cancelBtnText: okText || '确认',
          onCancel: onOk || function () {}
        };
  
        WMApp.nui.dialog(params, function (data) {
          if (!data.status) {
            params.onCancel();
          }
        });
      },
  
      loading: { // loading
        show: function show() {
          WMApp.nui.loading({ show: 1 });
        },
        hide: function hide() {
          WMApp.nui.loading({ show: 0 });
        }
      }
    };
  })();
  
  module.exports = exports['default'];

});

;define('adapter/waimai/ready.es6', function(require, exports, module) {

  /**
   * Created by liaobin on 16/4/10.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  exports['default'] = function (callback) {
    if (callback && typeof callback === 'function') {
      document.addEventListener('WMAppReady', function (data) {
        callback(data);
      }, false);
    }
  };
  
  module.exports = exports['default'];

});

;define('adapter/waimai/app.es6', function(require, exports, module) {

  /**
   * Created by liaobin on 16/4/10.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _ui = require('adapter/waimai/ui.es6');
  
  var _ui2 = _interopRequireDefault(_ui);
  
  var _ready = require('adapter/waimai/ready.es6');
  
  var _ready2 = _interopRequireDefault(_ready);
  
  exports['default'] = (function () {
  
    return {
      ui: _ui2['default'],
      ready: _ready2['default']
    };
  })();
  
  module.exports = exports['default'];

});

;define('adapter/waimai/ajax.es6', function(require, exports, module) {

  "use strict";

});
