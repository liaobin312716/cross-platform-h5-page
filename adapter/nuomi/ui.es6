/**
 * Created by liaobin on 16/4/10.
 */

export default (() => {

  return {
    /**
     * @desc toast 全局提示
     * @param text 提示内容
     * @param duration 时间间隔  short | long
     * **/
    toast:(text= '',duration= 0) => {
      BNJS.ui.toast.show(text,duration);
    },
    /**
     *  @desc 弹窗
     * **/
    dialog:(opt) => {
      let params = {
        title: opt.title || '提示',
        message: opt.content || '',
        cancel: opt.cancelBtnText || '取消',
        ok: opt.confirmBtnText || '确认',
        onConfirm: opt.onOk || function(){},
        onCancel:opt.onCancel || function(){}
      };

      BNJS.ui.dialog.show(params);
    },
    /**
     *  @desc  alert 提示弹窗
     *  @param text 提示文案
     *  @param onOk 确定回调
     *  @param okText 确定文案
     * **/

    alert:(text,onOk,okText) => {
      let params = {
        message: text || '',
        cancel: okText || '确认',
        onCancel: onOk || function(){},
      }

      BNJS.ui.dialog.show(params);
    },

    loading:{  // loading
      show: () => {
        BNJS.ui.dialog.showLoading(2);
      },
      hide: () => {
        BNJS.ui.dialog.hideLoaing()
      }
    }
  }
})()
