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
    toast:(text= '',duration='short') => {
      WMApp.nui.toast({
        text,
        duration
      })
    },
    /**
     *  @desc 弹窗
     * **/
    dialog:(opt) => {
      let params = Object.assign({
        title: '提示',
        content: '',
        cancelBtnText: '取消',
        confirmBtnText: '确认',
        onOk:function(){},
        onCancel:function(){}
      },opt)

      WMApp.nui.dialog(params, function(data) {
        if (data.status) {
          params.onOk();
        }else {
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

    alert:(text,onOk,okText) => {
      let params = {
        content: text || '',
        cancelBtnText: okText || '确认',
        onCancel: onOk || function(){},
      }

      WMApp.nui.dialog(params, function(data) {
        if (!data.status) {
          params.onCancel();
        }
      });
    },

    loading:{  // loading
      show: () => {
        WMApp.nui.loading({show:1});
      },
      hide: () => {
        WMApp.nui.loading({show:0});
      }
    }
  }
})()
