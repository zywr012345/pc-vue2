import Vue from 'vue';

import App from './App';
import router from './common/utils/router';

// 通用组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DataView from '@jiaminghi/data-view';

// 全局注册（共用方法、常量值、颜色值 etc）
import GlobalConfig from './common/utils/global-config';

// vuex
import store from './common/store';

// 阿里巴巴字体图标库
import '../static/iconfont/iconfont.css';

// 轮播
import wcSwiper from './components/wc-swiper/index.js';
import './components/wc-swiper/style.css';
Vue.use(wcSwiper.default);

Vue.use(ElementUI);

Vue.use(DataView);

Vue.use(GlobalConfig);

const sn = require('./common/store/$sn.mixin');
Vue.mixin(sn);

/*
* 批量注册全局共用组件
* 1）仅在此处注册以“sn-”开头，以“.vue”结尾的组件
* 2）要在组件内使用 name 属性命名
* */
const assembly = require.context('./components', true, /sn-.+\.vue$/);
assembly.keys().forEach(el => {
  const single = assembly(el).default;
  Vue.component(single.name, single);
});

window.eventBus = new Vue();

Vue.config.productionTip = false;

const vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

export default vue;
