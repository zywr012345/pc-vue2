import Color from '../style/color.scss';
import Constants from './constants';
import * as Assembly from './assembly';
import * as Encrypted from './encrypted';
import * as Format from './format';
import * as Utils from './utils';
import * as Validate from './validate';

const $sn = {
  color: Color,
  constants: Constants,
  assembly: Assembly,
  encrypted: Encrypted,
  format: Format,
  utils: Utils,
  validate: Validate
};

export default {
  install(Vue) {
    Vue.prototype.$sn = $sn;
  }
};
