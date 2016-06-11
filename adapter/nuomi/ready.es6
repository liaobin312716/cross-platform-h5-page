/**
 * Created by liaobin on 16/4/10.
 */

'use strict';

var BNJSReady = function (readyCallback) {
  if(readyCallback && typeof readyCallback == 'function'){
    if(window.BNJS && typeof window.BNJS == 'object' && BNJS._isAllReady){
      readyCallback();
    }else{
      alert('haha')
      document.addEventListener('BNJSReady', function() {
        alert('hhhh')
        readyCallback();
      }, false)
    }
  }
};

window.BNJSReady = BNJSReady;

export default BNJSReady;
//export default (readyCallback) => {
//  if(readyCallback && typeof readyCallback == 'function'){
//
//    if(window.BNJS && typeof window.BNJS == 'object' && BNJS._isAllReady){
//      readyCallback();
//    }else{
//      alert('hhh')
//      document.addEventListener('BNJSReady', function() {
//        alert('nuomi ready')
//        readyCallback();
//      }, false);
//    }
//  }
//}
