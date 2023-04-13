/*
* 2022年10月14日11:45:57 LXC
* 地址：https://www.uviewui.com/guide/globalVariable.html
* */
import Vue from 'vue';
import Vuex from 'vuex';
import self from '../../main';

Vue.use(Vuex);

let RestartDigital = {};

// 尝试是否可以得到 RestartDigital ，1ST启动APP时不存在
try {
  RestartDigital = self.$sn.utils.getLocalStorage('RestartDigital');
}
catch (error) {}

// 在一定情况或时间内需进行存储的信息，在 state 中的 key 值
const title = ['vuex_loading', 'vuex_toast', 'vuex_modal', 'vuex_login_user'];

// 对上述声明的信息进行存储
const saveRestartDigital = function(key, value) {
  // 所需存储 key 值是否已在上方 title 中声明
  if (title.indexOf(key) !== -1) {
    // 对所需存储的信息进行存储
    let transit = self.$sn.utils.getLocalStorage('RestartDigital');
    transit = !self.$sn.validate.empty(transit) ? transit : {};
    transit[key] = value;
    self.$sn.utils.setLocalStorage('RestartDigital', transit);
  }
  else {
    console.log('title 中未声明当前 key 值');
  }
};

const store = new Vuex.Store({
  state: {
    // 在 title 声明过得信息，需在此处进行初始化赋值
    vuex_loading: RestartDigital.vuex_loading || false,
    vuex_toast: RestartDigital.vuex_toast || {},
    vuex_modal: RestartDigital.vuex_modal || {},
    vuex_login_user: RestartDigital.vuex_login_user || {}
  },
  mutations: {
    $set(state, payload) {
      // 区分是否 state 为多层级调用的情况，即 state 为 Object
      const digital = payload.title.split('.');
      let target = '';
      const size = digital.length;
      if (digital.length >= 2) {
        let transit = state[digital[0]];
        for (let i = 1; i < size - 1; i++) {
          transit = transit[digital[i]];
        }
        transit[digital[size - 1]] = payload.value;
        target = digital[0];
      }
      else {
        state[payload.title] = payload.value;
        target = payload.title;
      }
      saveRestartDigital(target, state[target]);
    }
  }
});

export default store;
