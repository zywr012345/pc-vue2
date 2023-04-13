/*
* 2022年9月21日13:53:43 LXC
* 规则校验共用方法
* */

/*
* 是否为字母
* variable[string]
* */
export function alphabet(variable) {
  if (!variable) {
    return false;
  }
  const alphabetRegExp = /^[a-zA-Z]*$/;
  return alphabetRegExp.test(variable);
}

/*
* 是否为金额
* variable[string]
* */
export function amount(variable) {
  if (!variable) {
    return false;
  }
  const amountRegExp = /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/;
  return amountRegExp.test(variable);
}

/*
* 是否为数组
* variable[any]
* */
export function array(variable) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(variable);
  }
  return Object.prototype.toString.call(variable) === '[object Array]';
}

/*
* 是否为车牌号
* variable[string]
* */
export function carSerial(variable) {
  if (!variable) {
    return false;
  }
  // 旧车牌
  if (variable.length === 7) {
    const carSerialRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    return carSerialRegExp.test(variable);
  }
  else if (variable.length === 8) {
    const carSerialRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    return carSerialRegExp.test(variable);
  }
  return false;
}

/*
* 是否为汉字
* variable[string]
* */
export function chinese(variable) {
  if (!variable) {
    return false;
  }
  const chineseRegExp = /^[\u4e00-\u9fa5]+$/gi;
  return chineseRegExp.test(variable);
}

/*
* 是否为验证码
* variable[string]：验证码字符串
* size[integer]：验证码长度，默认为6
* */
export function code(variable, size = 6) {
  if (!variable) {
    return false;
  }
  const codeRegExp = new RegExp(`^\\d{${size}}$`);
  return codeRegExp.test(variable);
}

/*
* 是否为日期时间格式
* 日期时间均不可超出范围
* 年月日之间可使用“-”、“/”进行分隔，不可使用中文分隔
* 时分秒之间可使用“:”进行分隔，不可使用中文分隔
* variable[string]
* */
export function date(variable) {
  if (!variable) {
    return false;
  }
  // 处理是否为数值或字符串数值，则转换为数值；否则 new Date 函数无法处理字符串时间戳
  if (number(variable)) {
    variable = +variable;
  }
  const dateRegExp = /Invalid|NaN/;
  return !dateRegExp.test(new Date(variable).toString());
}

/*
* 是否为字母或数字
* variable[string]
* */
export function eitherAlphabetNumber(variable) {
  if (!variable) {
    return false;
  }
  const eitherAlphabetNumberRegExp = /^[0-9a-zA-Z]*$/g;
  return eitherAlphabetNumberRegExp.test(variable);
}

/*
* 是否为邮箱
* variable[string]
* */
export function email(variable) {
  if (!variable) {
    return false;
  }
  /* eslint-disable */
  const emailRegExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  /* eslint-enable */
  return emailRegExp.test(variable);
}

/*
* 是否包含某个值
* A 中是否包含 B，区分大小写
* standard[string]：A
* sub[string]：B
* */
export function embody(standard, sub) {
  if (!standard || !sub) {
    return false;
  }
  return standard.indexOf(sub) > -1;
}

/*
* 是否为空
* 如值为 undefined 类型，则返回 true
* 如值为字符串类型，且为空字符串、'undefined' 字符串、'null' 字符串，则返回 true
* 如值为布尔类型，且为 false，则返回 true
* 如值为数值类型，且为0、NaN，则返回 true
* 如值为对象类型，且为 null、空对象、长度为0的数组，则返回 true
* variable[any]
* */
export function empty(variable) {
  if (typeof variable === 'undefined') {
    return true;
  }
  if (typeof variable === 'string') {
    let verify = false;
    if (variable === 'undefined' || variable === 'null') {
      verify = true;
    }
    else {
      verify = variable.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0;
    }
    return verify;
  }
  if (typeof variable === 'boolean') {
    return !variable;
  }
  if (typeof variable === 'number') {
    return variable === 0 || isNaN(variable);
  }
  if (typeof variable === 'object') {
    if (variable === null || variable.length === 0) {
      return true;
    }
    for (const i in variable) {
      return false;
    }
    return true;
  }
  return false;
}

/*
* 是否为函数
* variable[any]
* */
export function func(variable) {
  if (!variable) {
    return false;
  }
  return typeof variable === 'function';
}

/*
* 是否包含 html 标签
* variable[string]
* */
export function html(variable) {
  if (!variable) {
    return false;
  }
  const htmlRegExp = new RegExp(/<[^>]+>/g);
  return htmlRegExp.test(variable);
}

/*
* 是否为身份证号
* variable[string]
* */
export function idCardSerial(variable) {
  if (!variable) {
    return false;
  }
  const idCardSerialRegExp = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  return idCardSerialRegExp.test(variable);
}

/*
* 是否为图片格式
* variable[string]
* */
export function image(variable) {
  if (!variable || !variable.split('?')[0]) {
    return false;
  }
  const imageRegExp = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return imageRegExp.test(variable.split('?')[0]);
}

/*
* 是否为整数
* variable[string]
* */
export function integer(variable) {
  if (!variable) {
    return false;
  }
  const integerRegExp = /^\d+$/;
  return integerRegExp.test(variable);
}

/*
* 是否为 JSON
* variable[string]
* */
export function json(variable) {
  if (!variable) {
    return false;
  }
  if (typeof variable === 'string') {
    try {
      const transit = JSON.parse(variable);
      return transit && (typeof transit === 'string' || typeof transit === 'object');
    }
    catch (e) {
      return false;
    }
  }
  return false;
}

/*
* 是否为固定电话
* variable[string]
* */
export function landline(variable) {
  if (!variable) {
    return false;
  }
  const landlineRegExp = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return landlineRegExp.test(variable);
}

/*
* 是否为十进制数值
* 整数、小数、负数、带千分位数（2,359.08）均可通过
* variable[string]
* */
export function number(variable) {
  if (!variable) {
    return false;
  }
  /* eslint-disable */
  const numberRegExp = /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/;
  /* eslint-enable */
  return numberRegExp.test(variable);
}

/*
* 是否为对象
* variable[any]
* */
export function object(variable) {
  return Object.prototype.toString.call(variable) === '[Object Object]';
}

/*
* 是否为手机号
* variable[string]
* */
export function phone(variable) {
  if (!variable) {
    return false;
  }
  const phoneRegExp = /^1[23456789]\d{9}$/;
  return phoneRegExp.test(variable);
}

/*
* 是否为 promise
* variable[any]
* */
export function promise(variable) {
  if (!variable) {
    return false;
  }
  return object(variable) && func(variable.then) && func(variable.catch);
}

/*
* 是否在某个范围内
* A 是否在 B 范围内
* variable[number]：A
* range[array]：B，每项为 number
* */
export function range(variable, range) {
  if (!variable || !range || range.length !== 2) {
    return false;
  }
  return variable >= range[0] && variable <= range[1];
}

/*
* 长度是否在某个范围内
* A 长度是否在 B 范围内
* variable[string]：A
* range[array]：B，每项为 number
* */
export function rangeSize(variable, range) {
  if (!variable || !range || range.length !== 2) {
    return false;
  }
  return variable.length >= range[0] && variable.length <= range[1];
}

/*
* 是否为正则
* variable[object]
* */
export function regExp(variable) {
  if (!variable) {
    return false;
  }
  return Object.prototype.toString.call(variable) === '[object RegExp]';
}

/*
* 是否为字符串
* variable[any]
* */
export function string(variable) {
  if (!variable) {
    return false;
  }
  return typeof variable === 'string';
}

/*
* 是否为 URL
* variable[string]
* */
export function url(variable) {
  if (!variable) {
    return false;
  }
  const urlRegExp = /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/;
  return urlRegExp.test(variable);
}

/*
* 是否为视频格式
* variable[string]
* */
export function video(variable) {
  if (!variable) {
    return false;
  }
  const videoRegExp = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return videoRegExp.test(variable);
}
