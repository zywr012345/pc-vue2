/*
* 2022年10月13日16:11:45 LXC
* 其它共用方法
* */
import Vue from 'vue';
import CryptoJS from 'crypto-js';
import { Request, Problem, getTokenHeader, getHeader } from './request';
import self from '../../main';
import * as AppConfig from './app-config';
import * as Constants from './constants';

// ---START-普通缓存处理-START---
/*
* 存储 LOCAL 信息
* 对数据进行 LOCAL 的存储
* title[string]：缓存名称字符串
* info[any]：待缓存数据
* */
export function setLocalStorage(title, info) {
  window.localStorage.setItem(title, JSON.stringify(info));
}

/*
* 存储 SESSION 信息
* 对数据进行 SESSION 的存储
* title[string]：缓存名称字符串
* info[any]：待缓存数据
* */
export function setSessionStorage(title, info) {
  window.sessionStorage.setItem(title, JSON.stringify(info));
}

/*
* 获取 LOCAL 信息
* 获取指定名称的 LOCAL 缓存
* title[string]：缓存名称字符串
* */
export function getLocalStorage(title) {
  if (!self.$sn.validate.empty(window.localStorage.getItem(title))) {
    return JSON.parse(window.localStorage.getItem(title));
  }
  return null;
}

/*
* 获取 SESSION 信息
* 获取指定名称的 SESSION 缓存
* title[string]：缓存名称字符串
* */
export function getSessionStorage(title) {
  if (!self.$sn.validate.empty(window.sessionStorage.getItem(title))) {
    return JSON.parse(window.sessionStorage.getItem(title));
  }
  return null;
}

/*
* 删除 LOCAL 信息
* 删除指定名称的 LOCAL 缓存
* title[string]：缓存名称字符串
* */
export function removeLocalStorage(title) {
  if (!self.$sn.validate.empty(window.localStorage.getItem(title))) {
    window.localStorage.removeItem(title);
  }
}

/*
* 删除 SESSION 信息
* 删除指定名称的 SESSION 缓存
* title[string]：缓存名称字符串
* */
export function removeSessionStorage(title) {
  if (!self.$sn.validate.empty(window.sessionStorage.getItem(title))) {
    window.sessionStorage.removeItem(title);
  }
}
// ---END-普通缓存处理-END---

// ---START-医院相关缓存处理-START---
/*
* 存储医院 LOCAL 信息
* 对数据进行 LOCAL 的存储
* title[string]：缓存名称字符串
* info[any]：待缓存数据
* */
export function setHospitalLocalStorage(title, info) {
  window.localStorage.setItem(getHospitalId() + '_' + title, JSON.stringify(info));
}

/*
* 存储医院 SESSION 信息
* 对数据进行 SESSION 的存储
* title[string]：缓存名称字符串
* info[any]：待缓存数据
* */
export function setHospitalSessionStorage(title, info) {
  window.sessionStorage.setItem(getHospitalId() + '_' + title, JSON.stringify(info));
}

/*
* 获取医院 LOCAL 信息
* 获取指定名称的 LOCAL 缓存
* title[string]：缓存名称字符串
* */
export function getHospitalLocalStorage(title) {
  if (!self.$sn.validate.empty(window.localStorage.getItem(getHospitalId() + '_' + title))) {
    return JSON.parse(window.localStorage.getItem(getHospitalId() + '_' + title));
  }
  return null;
}

/*
* 获取医院 SESSION 信息
* 获取指定名称的 SESSION 缓存
* title[string]：缓存名称字符串
* */
export function getHospitalSessionStorage(title) {
  if (!self.$sn.validate.empty(window.sessionStorage.getItem(getHospitalId() + '_' + title))) {
    return JSON.parse(window.sessionStorage.getItem(getHospitalId() + '_' + title));
  }
  return null;
}

/*
* 删除医院 LOCAL 信息
* 删除指定名称的 LOCAL 缓存
* title[string]：缓存名称字符串
* */
export function removeHospitalLocalStorage(title) {
  if (!self.$sn.validate.empty(window.localStorage.getItem(getHospitalId() + '_' + title))) {
    window.localStorage.removeItem(getHospitalId() + '_' + title);
  }
}

/*
* 删除医院 SESSION 信息
* 删除指定名称的 SESSION 缓存
* title[string]：缓存名称字符串
* */
export function removeHospitalSessionStorage(title) {
  if (!self.$sn.validate.empty(window.sessionStorage.getItem(getHospitalId() + '_' + title))) {
    window.sessionStorage.removeItem(getHospitalId() + '_' + title);
  }
}
// ---END-医院相关缓存处理-END---

// ---START-加解密相关处理-START---
/*
* 加密方法
* variable[json]：待加密字符串
* secret[string]：公钥
* */
export function variableEncryption(variable, secret = 'shunnengcnsecret') {
  if (self.$sn.validate.empty(variable)) {
    return '';
  }
  const key = CryptoJS.enc.Utf8.parse(secret);
  const iv = CryptoJS.enc.Utf8.parse(secret);
  const transit = CryptoJS.enc.Utf8.parse(variable);
  const encryption = CryptoJS.AES.encrypt(transit, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encryption.ciphertext.toString();
}

/*
* 解密方法
* variable[string]：待解密字符串
* secret[string]：公钥
* */
export function variableDecryption(variable, secret = 'shunnengcnsecret') {
  if (self.$sn.validate.empty(variable)) {
    return '';
  }
  const key = CryptoJS.enc.Utf8.parse(secret);
  const iv = CryptoJS.enc.Utf8.parse(secret);
  const first = CryptoJS.enc.Hex.parse(variable);
  const secondary = CryptoJS.enc.Base64.stringify(first);
  const decryption = CryptoJS.AES.decrypt(secondary, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decryption.toString(CryptoJS.enc.Utf8);
}
// ---END-加解密相关处理-END---

// ---START-登录信息相关处理-START---
// 主账号
export function getAccountId() {
  let id = '';
  // TODO 不同项目需根据服务字段进行下方修改
  if (self.$sn.vuex.get('vuex_login_user.' + getHospitalId()) && self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).accountId) {
    id = self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).accountId;
  }
  return id;
}

// 登录状态
export function getLoginCondition() {
  let login = false;
  // TODO 不同项目需根据服务字段进行下方修改
  if (self.$sn.vuex.get('vuex_login_user.' + getHospitalId()) && self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).isLogin) {
    login = self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).isLogin;
  }
  return login;
}

// 登录手机号
export function getLoginPhone() {
  let phone = '';
  // TODO 不同项目需根据服务字段进行下方修改
  if (self.$sn.vuex.get('vuex_login_user.' + getHospitalId()) && self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).mobile) {
    phone = self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).mobile;
  }
  return phone;
}

// OpenId
export function getOpenId() {
  let id = '';
  // TODO 不同项目需根据服务字段进行下方修改
  if (self.$sn.vuex.get('vuex_login_user.' + getHospitalId()) && self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).platformDetail && self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).platformDetail.userId) {
    id = self.$sn.vuex.get('vuex_login_user.' + getHospitalId()).platformDetail.userId;
  }
  return id;
}
// ---END-登录信息相关处理-END---

// ---START-功能相关处理-START---
/*
* 是否展示当前功能
* 如果功能 ID 是 other 为前缀，则此功能默认为三方功能，同时判断当前功能 ID 内是否有医院 ID，来确认是否为当前医院的三方功能，直接返回 true
* id[string]：当前功能 ID
* */
export function isShowFunction(id) {
  if (self.$sn.validate.empty(id)) {
    return false;
  }
  if (id.indexOf('other') !== -1 && id.indexOf(getHospitalId()) !== -1) {
    return true;
  }
  const info = getHospitalSessionStorage('HospitalFunctionInformation');
  if (info && info.length > 0) {
    return info.filter(result => result.moduleId === id).length > 0;
  }
  else {
    return false;
  }
}

/*
* 是否开通当前功能
* 如果功能 ID 是 other 为前缀，则此功能默认为三方功能，同时判断当前功能 ID 内是否有医院 ID，来确认是否为当前医院的三方功能，直接返回 true
* id[string]：当前功能 ID
* */
export function isOpenFunction(id) {
  if (self.$sn.validate.empty(id)) {
    return false;
  }
  if (id.indexOf('other') !== -1 && id.indexOf(getHospitalId()) !== -1) {
    return true;
  }
  const first = getHospitalSessionStorage('HospitalFunctionInformation');
  if (first && first.length > 0) {
    const secondary = first.filter(result => result.moduleId === id);
    if (secondary.length > 0) {
      return secondary[0].isUse === '0';
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}
// ---END-功能相关处理-END---

// ---START-医院相关处理-START---
// 医院 ID
export function getHospitalId() {
  let id = '';
  if (getLocalStorage('HospitalId')) {
    id = getLocalStorage('HospitalId');
  }
  return id;
}

// 医院名称
export function getHospitalTitle() {
  let title = '';
  // TODO 不同项目需根据服务字段进行下方修改
  if (getHospitalLocalStorage('HospitalInformation') && getHospitalLocalStorage('HospitalInformation').hosName) {
    title = getHospitalLocalStorage('HospitalInformation').hosName;
  }
  return title;
}

// 院区 ID
export function getHospitalAreaId() {
  let id = '';
  // TODO 不同项目需根据服务字段进行下方修改
  if (getHospitalLocalStorage('HospitalAreaInformation') && getHospitalLocalStorage('HospitalAreaInformation').length > 0 && getHospitalLocalStorage('HospitalAreaInformation')[0].areaId) {
    id = getHospitalLocalStorage('HospitalAreaInformation')[0].areaId;
  }
  return id;
}

/*
* 院区信息
* areaId[string]：目标院区的院区 ID；如不传，则返回所有院区信息
* */
export function getHospitalAreaInformation(areaId) {
  if (areaId) {
    if (getHospitalLocalStorage('HospitalAreaInformation') && getHospitalLocalStorage('HospitalAreaInformation').length > 0) {
      const area = getHospitalLocalStorage('HospitalAreaInformation').filter(result => result.areaId === areaId);
      if (area.length > 0) {
        return area[0];
      }
      else {
        return {};
      }
    }
    else {
      return {};
    }
  }
  else {
    if (getHospitalLocalStorage('HospitalAreaInformation') && getHospitalLocalStorage('HospitalAreaInformation').length > 0) {
      return getHospitalLocalStorage('HospitalAreaInformation');
    }
    else {
      return [];
    }
  }
}
// ---END-医院相关处理-END---

// ---START-项目相关处理-START---
// 平台类型
export function getPlatformType() {
  let type = '';
  if (getLocalStorage('PlatformType')) {
    type = getLocalStorage('PlatformType');
  }
  return type;
}

/*
* 平台 ID
* type[string]：平台类型
* */
export function getPlatformId(type = getPlatformType()) {
  let id = '';
  if (type === Constants.PLATFORM_TYPE_WECHAT_MINI) {
    id = Constants.PLATFORM_ID_WECHAT_MINI;
  }
  else if (type === Constants.PLATFORM_TYPE_ALIPAY_MINI) {
    id = Constants.PLATFORM_ID_ALIPAY_MINI;
  }
  else if (type === Constants.PLATFORM_TYPE_BAIDU_MINI) {
    id = Constants.PLATFORM_ID_BAIDU_MINI;
  }
  else if (type === Constants.PLATFORM_TYPE_WECHAT_H5) {
    id = Constants.PLATFORM_ID_WECHAT_H5;
  }
  else if (type === Constants.PLATFORM_TYPE_ALIPAY_H5) {
    id = Constants.PLATFORM_ID_ALIPAY_H5;
  }
  else if (type === Constants.PLATFORM_TYPE_WECHAT_CITY) {
    id = Constants.PLATFORM_ID_WECHAT_CITY;
  }
  else if (type === Constants.PLATFORM_TYPE_ALIPAY_CITY) {
    id = Constants.PLATFORM_ID_ALIPAY_CITY;
  }
  return id;
}

/*
* 支付类型
* type[string]：平台类型
* */
export function getRegType(type = getPlatformType()) {
  if (AppConfig.getConfig().regType) {
    return AppConfig.getConfig().regType;
  }
  if (isWeChat(type)) {
    return Constants.REG_TYPE_WECHAT;
  }
  else if (isAliPay(type)) {
    return Constants.REG_TYPE_ALIPAY;
  }
  else {
    return Constants.REG_TYPE_OTHER;
  }
}

// 项目类型
export function getProjectType() {
  let type = '';
  if (getLocalStorage('ProjectType')) {
    type = getLocalStorage('ProjectType');
  }
  return type;
}

/*
* 是否为微信中的平台
* H5 项目可用
* type[string]：平台类型
* */
export function isWeChat(type = getPlatformType()) {
  return type === Constants.PLATFORM_TYPE_WECHAT_MINI || type === Constants.PLATFORM_TYPE_WECHAT_H5 || type === Constants.PLATFORM_TYPE_WECHAT_CITY;
}

/*
* 是否为支付宝中的平台
* H5 项目可用
* type[string]：平台类型
* */
export function isAliPay(type = getPlatformType()) {
  return type === Constants.PLATFORM_TYPE_ALIPAY_MINI || type === Constants.PLATFORM_TYPE_ALIPAY_H5 || type === Constants.PLATFORM_TYPE_ALIPAY_CITY;
}
// ---END-项目相关处理-END---

/*
* 当前时间
* 获取当前时间，优先返回服务器时间；如无服务器时间，则返回本地时间
* */
export function getCurrentTime() {
  if (getSessionStorage('TimeDisparity')) {
    return new Date(new Date().getTime() - parseInt(getSessionStorage('TimeDisparity')));
  }
  else {
    return new Date();
  }
}

/*
* URL 上相关信息
* title[string]：字段名称
* */
export function getUrlVariable(title) {
  if (self.$sn.validate.empty(title)) {
    return '';
  }
  const titleRegExp = new RegExp('(^|&)' + title + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(titleRegExp);
  if (r) {
    return unescape(r[2]);
  }
  else {
    return '';
  }
}

/*
* 通用调用服务方法
* domain[string]：域名
* url[string]：服务地址，在 swagger.js 中进行配置，不允许在页面中直接写；如果遇到参数为 path 类型，则使用 $sn.format.caption 全局方法来进行格式化处理后再传入
* query[object]：参数为 query 类型，格式参照 https://www.uviewui.com/js/queryParams.html，可在对象中传入 prefix 和 format，指定格式化方式
* method[string]：GET，POST，PUT，DELETE
* header[boolean]：是否需要 token
* data[json]：body 入参
* emulateJSON[boolean]
* reload[boolean]: 是否需要重发，默认值为 true
* success[function]：访问成功（then）后需调用的方法
* fail[function]：访问失败（catch）后需调用的方法
* first[any]：调用服务时在成功回调业务处理中要用到的信息
* secondary[any]：调用服务时在失败回调业务处理中要用到的信息
* */
export function ordinaryRequest(params, success, fail, first, secondary) {
  if (!params.domain) {
    params.domain = process.env.VUE_APP_LOCALHOST;
  }
  if (params.query) {
    const prefix = typeof params.query.prefix !== 'boolean' ? true : params.query.prefix;
    const format = params.query.format ? params.query.format : 'repeat';
    if (params.query.prefix) {
      delete params.query.prefix;
    }
    if (params.query.format) {
      delete params.query.format;
    }
    params.url += self.$sn.format.reverseObjectParameter(params.query, prefix, format);
  }
  if (typeof params.reload === 'boolean' && !params.reload) {
    return Vue.http({
      url: params.domain + params.url,
      method: params.method || 'GET',
      headers: params.header ? getTokenHeader() : getHeader(),
      body: params.data || '',
      emulateJSON: params.emulateJSON || true
    }).then(result => {
      if (typeof success === 'function') {
        return success(result, first) || result.data;
      }
      else {
        return result.data;
      }
    }).catch(error => {
      if (typeof fail === 'function') {
        return fail(error, secondary) || Problem(error, secondary);
      }
      else {
        return Problem(error, secondary);
      }
    });
  }
  else {
    return Request({
      url: params.domain + params.url,
      method: params.method,
      header: params.header,
      data: params.data,
      emulateJSON: params.emulateJSON
    }).then(result => {
      if (typeof success === 'function') {
        return success(result, first) || result.data;
      }
      else {
        return result.data;
      }
    }).catch(error => {
      if (typeof fail === 'function') {
        return fail(error, secondary) || Problem(error, secondary);
      }
      else {
        return Problem(error, secondary);
      }
    });
  }
}
