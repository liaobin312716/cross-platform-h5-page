/**
 * Created by liaobin on 16/4/10.
 */

'use strict';

export default (callback) => {
  if (callback && typeof callback === 'function') {
    document.addEventListener('WMAppReady', function (data) {
        callback(data);
    }, false);
  }
}