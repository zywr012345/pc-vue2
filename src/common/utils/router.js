import Vue from 'vue';
import VueRouter from 'vue-router';

// 通过重写 push 方法，处理相同路由跳转时，报错问题
const original = VueRouter.prototype.push;
VueRouter.prototype.push = function navigate(target, resolve, reject) {
  if (resolve || reject) {
    return original.call(this, target, resolve, reject);
  }
  return original.call(this, target).catch(error => error);
};

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { // 公司介绍-首页
      path: '/',
      component: () => import('../../pages/home/homepage')
    },
    { // 公司介绍-轮播
      path: '/introduce',
      component: () => import('../../pages/home/introduce')
    },
    { // 合作伙伴&案例-首页
      path: '/partner',
      component: () => import('../../pages/partner/index')
    },
    { // 合作伙伴&案例-轮播
      path: '/partner/introduce',
      component: () => import('../../pages/partner/introduce')
    }
  ]
});

export default router;
