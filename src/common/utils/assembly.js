import self from '../../main';

/*
* 是否展示 loading 组件
* type[boolean]：开启或关闭 loading 组件
* */
export function loading(type) {
  self.$sn.vuex.set('vuex_loading', type);
}

/*
* 展示提示框组件
* caption[string]：内容文案
* duration[integer]：展示时长，单位为 ms，默认为2s
* success[function]：关闭时的回调函数
* */
export function toast(options) {
  self.$sn.vuex.set('vuex_toast', {
    type: true,
    caption: options.caption
  });
  setTimeout(() => {
    self.$sn.vuex.set('vuex_toast', {});
    if (self.$sn.validate.func(options.success)) {
      options.success();
    }
  }, options.duration || self.$sn.constants.ALERT_TIME);
}

/*
* 展示确认框组件
* title[string]：组件标题
* caption[string]：内容文案
* captionConfirm[string]：确认按钮文案
* isConfirm[boolean]：是否展示确认按钮
* colorConfirm[string]：确认按钮允许点击时的背景颜色
* durationConfirm[integer]：确认按钮倒计时；无-0，有-单位 s
* captionCancel[string]：取消按钮文案
* isCancel[boolean]：是否展示取消按钮
* colorCancel[string]：取消按钮允许点击时的字体颜色、边框颜色
* durationCancel[integer]：取消按钮倒计时；无-0，有-单位 s
* transferInteraction[boolean]：调转“取消”、“确认”按钮顺序为“确认”、“取消”
* slotInteraction[boolean]：确认按钮是否使用插槽替换
* */
export function modal(options) {
  self.$sn.vuex.set('vuex_modal', {
    type: true,
    title: options.title || '温馨提示',
    caption: options.caption,
    captionConfirm: options.captionConfirm || '确认',
    isConfirm: typeof options.isConfirm === 'boolean' ? options.isConfirm : true,
    colorConfirm: options.colorConfirm || self.$sn.color.main,
    durationConfirm: options.durationConfirm || 0,
    captionCancel: options.captionCancel || '取消',
    isCancel: typeof options.isCancel === 'boolean' ? options.isCancel : true,
    colorCancel: options.colorCancel || self.$sn.color.main,
    durationCancel: options.durationCancel || 0,
    transferInteraction: typeof options.transferInteraction === 'boolean' ? options.transferInteraction : false,
    slotInteraction: typeof options.slotInteraction === 'boolean' ? options.slotInteraction : false,
    success: options.success
  });
}
