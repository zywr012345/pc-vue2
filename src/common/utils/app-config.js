// 医院配置信息
import self from '../../main';

export function getConfig() {
  return getHospitalConfig(self.$sn.utils.getHospitalId());
}

export function getHospitalConfig(hosId) {
  let config = new Config();
  config.hosId = hosId;
  if (hosId === '') {}
  config = {
    ...config
  };
  return config;
}

export class Config {
  constructor() {
    // 医院信息
    this.hosId = ''; // 医院 ID
    this.hosTitle = ''; // 医院名称
    this.isHosArea = false; // 是否有院区
    this.digitalTitle = [];
    this.regType = '';
    this.homepageImageContent = 'images';
  }
}
