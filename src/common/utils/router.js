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
    {
      path: '/',
      component: () => import('../../pages/home/homepage')
    }
  ]
});

export default router;
