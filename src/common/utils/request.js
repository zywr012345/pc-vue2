import axios from 'axios';
import self from '../../main';

const Request = axios.create({
  baseURL: ''
});

Request.interceptors.request.use(
  config => {
    return {
      ...config,
      url: config.url,
      method: config.method || 'GET',
      headers: config.headers ? getTokenHeader() : getHeader(),
      data: config.data || '',
      emulateJSON: config.emulateJSON || true
    };
  }
);

Request.defaults.retry = 5;
Request.defaults.retryDelay = 1000;
Request.interceptors.response.use(
  result => {
    return result;
  },
  error => {
    const config = error.config;
    if (error.response) {
      console.error('error.response.status:' + error.response.status);
      if (error.response.status === 403) {
        // TODO 您的访问过于频繁,请稍后再试。
      }
    }
    if (error.request) {
      console.error('error.request.status:' + error.request.status);
      if (error.request.status === 0 || error.request.status === 401) {
        // TODO 重发处理
      }
    }
    if (!config || !config.retry) {
      return Promise.reject(error);
    }
    config.value = config.value || 0;
    if (config.value >= config.retry) {
      return Promise.reject(error);
    }
    config.value += 1;
    const repeat = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, config.retryDelay || 1000);
    });
    return repeat.then(() => {
      return axios(config);
    });
  }
);

const Problem = function(error, standard) {
  console.log('连接失败', error);
  const result = {};
  result.code = 400;
  result.msg = self.$sn.utils.getSessionStorage('HospitalMessages').C.C001;
  return standard || result;
};

const getHeader = function() {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
};

const getTokenHeader = function() {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': getToken()
  };
};

const getToken = function() {
  let token = '';
  // TODO 不同项目需根据服务字段进行下方修改
  if (self.$sn.vuex.get('vuex_login_user.' + self.$sn.utils.getHospitalId()) && self.$sn.vuex.get('vuex_login_user.' + self.$sn.utils.getHospitalId()).accessToken) {
    token = 'Bearer ' + self.$sn.vuex.get('vuex_login_user.' + self.$sn.utils.getHospitalId()).accessToken;
  }
  return token;
};

const getRefreshToken = function() {
  let token = '';
  // TODO 不同项目需根据服务字段进行下方修改
  if (self.$sn.vuex.get('vuex_login_user.' + self.$sn.utils.getHospitalId()) && self.$sn.vuex.get('vuex_login_user.' + self.$sn.utils.getHospitalId()).refreshToken) {
    token = 'Bearer ' + self.$sn.vuex.get('vuex_login_user.' + self.$sn.utils.getHospitalId()).refreshToken;
  }
  return token;
};

export {
  Request,
  Problem,
  getHeader,
  getTokenHeader,
  getToken,
  getRefreshToken
};
