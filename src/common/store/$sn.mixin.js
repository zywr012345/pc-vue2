/*
* 2022年10月14日11:45:57 LXC
* 地址：https://www.uviewui.com/guide/globalVariable.html
* */
const vuex = require('vuex');
const store = require('../store');

let $designation = [];

// 尝试将用户在目录为 store/index.js 中的 vuex 的 state 信息进行加载至全局
try {
  $designation = store.state ? Object.keys(store.state) : [];
}
catch (error) {}

module.exports = {
  created: function() {
    this.$sn.vuex = {};
    this.$sn.vuex.set = (title, value) => {
      this.$store.commit('$set', {
        title, value
      });
    };
    this.$sn.vuex.get = (title) => {
      const digital = title.split('.');
      const size = digital.length;
      if (digital.length >= 2) {
        let transit = this.$store.state[digital[0]];
        for (let i = 1; i < size; i++) {
          transit = transit[digital[i]];
        }
        return transit;
      }
      else {
        return this.$store.state[title];
      }
    };
  },
  computed: {
    ...vuex.mapState($designation)
  }
};
