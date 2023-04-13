/*
* 2022年9月21日14:10:00 LXC
* 格式化共用方法
* */
import Vue from 'vue';
import self from '../../main';
import * as Constants from './constants';

/*
* 由生日格式化年龄
* 可以通过格式为 yyyy-MM-dd 的生日计算出年龄
* birthday[string]：格式为 yyyy-MM-dd 的生日
* */
export function ageByBirthday(birthday) {
  if (self.$sn.validate.empty(birthday)) {
    return -1;
  }
  let age;
  const date = birthday.split('-');
  const birthdayYear = parseInt(date[0]);
  const birthdayMonth = parseInt(date[1]);
  const birthdayDay = parseInt(date[2]);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDay();
  if (birthdayYear === currentYear) {
    age = 0;
  }
  else {
    const gapYear = currentYear - birthdayYear;
    if (gapYear > 0) {
      if (birthdayMonth === currentMonth) {
        const gapDay = currentDay - birthdayDay;
        if (gapDay < 0) {
          age = gapYear - 1;
        }
        else {
          age = gapYear;
        }
      }
      else {
        const gapMonth = currentMonth - birthdayMonth;
        if (gapMonth < 0) {
          age = gapYear - 1;
        }
        else {
          age = gapYear;
        }
      }
    }
    else {
      age = -1;
    }
  }
  return age;
}

/*
* 由身份证号格式化生日
* 将传入的身份证号处理为 yyyy-MM-dd 格式的生日返回
* idCardSerial[string]：身份证号字符串
* */
export function birthdayByIdCardSerial(idCardSerial) {
  if (self.$sn.validate.empty(idCardSerial) && !self.$sn.validate.idCardSerial(idCardSerial)) {
    return '';
  }
  return idCardSerial.substring(6, 10) + '-' + idCardSerial.substring(10, 12) + '-' + idCardSerial.substring(12, 14);
}

/*
* 格式化替换字符串信息
* 通过此方法可以对字符串中的值在不同使用场景中进行替换，可以应用于 swagger 地址中的入参、messages 提示信息替换、温馨提示文案的替换等
* title[string]：文案字符串，需要替换的项按照顺序，以数组的角标和大括号来进行编号
* info[array]：替换数据的数组，数组中每一项的顺序与 title 中顺序相对应
* */
export function caption(title, info) {
  if (self.$sn.validate.empty(title)) {
    return '';
  }
  let caption = title;
  if (info.length > 0) {
    for (let i = 0; i < info.length; i++) {
      if (!self.$sn.validate.empty(info[i])) {
        caption = caption.replace('{' + i.toString() + '}', info[i]);
      }
    }
  }
  return caption;
}

/*
* 格式化日期
* 可以对日期进行文案的格式化处理，例如“yyyy年MM月dd日”转换为“yyyy-MM-dd”
* 对于需要在目标日期上进行年、月、周、日、时、分、秒增减处理，例如想获取“2022-06-15”昨天的日期“2022-06-14”
* 由于在引入三方插件后，date.js 函数文件使用会失效，则提供此方法对日期进行格式化处理
* time[date]：中国标准时间
* type[string]：格式化后的样例，eg：yyyy-MM-dd
* extra[integer]：在目标日期的基础上递增或递减的基准值，此字段必须为整数；正数则为递增，负数则为递减
* standard[string]：递增或递减的单位；year：年，month：月，week：周，day：日，hour：时，minute：分，second：秒
* */
export function date(time, type, extra, standard) {
  if (!(time instanceof Date) || self.$sn.validate.empty(type)) {
    return '';
  }
  // 周、日、时、分、秒格式化方式：处理ms
  if (extra && (standard === 'week' || standard === 'day' || standard === 'hour' || standard === 'minute' || standard === 'second')) {
    if (standard === 'week') {
      extra = extra * 7 * 24 * 60 * 60 * 1000;
    }
    else if (standard === 'day') {
      extra = extra * 24 * 60 * 60 * 1000;
    }
    else if (standard === 'hour') {
      extra = extra * 60 * 60 * 1000;
    }
    else if (standard === 'minute') {
      extra = extra * 60 * 1000;
    }
    else if (standard === 'second') {
      extra = extra * 1000;
    }
    time = new Date(new Date(time).getTime() + extra);
  }
  let date = type;
  let year = time.getFullYear().toString();
  let month = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1).toString() : (time.getMonth() + 1).toString();
  let day = time.getDate() < 10 ? '0' + time.getDate().toString() : time.getDate().toString();
  const hour = time.getHours() < 10 ? '0' + time.getHours().toString() : time.getHours().toString();
  const minute = time.getMinutes() < 10 ? '0' + time.getMinutes().toString() : time.getMinutes().toString();
  const second = time.getSeconds() < 10 ? '0' + time.getSeconds().toString() : time.getSeconds().toString();
  if (extra) {
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    // 年格式化方式：直接处理年份，再处理日期（eg：2020-02-29加一年为2021-02-28）
    if (standard === 'year') {
      year = year + extra;
      if (new Date(year, month, 0).getDate() < day) {
        day = new Date(year, month, 0).getDate();
      }
    }
    // 月格式化方式
    else if (standard === 'month') {
      // 月份在当年内
      if (month + extra >= 1 && month + extra <= 12) {
        month = month + extra;
        if (new Date(year, month, 0).getDate() < day) {
          day = new Date(year, month, 0).getDate();
        }
      }
      // 前摇到去年12月
      else if (month + extra === 0) {
        year = year - 1;
        month = 12;
        if (new Date(year, month, 0).getDate() < day) {
          day = new Date(year, month, 0).getDate();
        }
      }
      // 前摇到前几年某月
      else if (month + extra < 0) {
        extra = Math.abs(extra);
        const first = Math.floor(extra / 12);
        const secondary = extra % 12;
        if (first > 0) {
          year = year - first;
          if (month - secondary >= 1) {
            month = month - secondary;
            if (new Date(year, month, 0).getDate() < day) {
              day = new Date(year, month, 0).getDate();
            }
          }
          else if (month - secondary === 0) {
            year = year - 1;
            month = 12;
            if (new Date(year, month, 0).getDate() < day) {
              day = new Date(year, month, 0).getDate();
            }
          }
          else if (month - secondary < 0) {
            year = year - 1;
            const third = secondary - month;
            month = 12 - third;
            if (new Date(year, month, 0).getDate() < day) {
              day = new Date(year, month, 0).getDate();
            }
          }
        }
        else {
          year = year - 1;
          const third = secondary - month;
          month = 12 - third;
          if (new Date(year, month, 0).getDate() < day) {
            day = new Date(year, month, 0).getDate();
          }
        }
      }
      // 后摇到后几年某月
      else if (month + extra > 12) {
        extra = Math.abs(extra);
        const first = Math.floor(extra / 12);
        const secondary = extra % 12;
        if (first > 0) {
          year = year + first;
          if (month + secondary <= 12) {
            month = month + secondary;
            if (new Date(year, month, 0).getDate() < day) {
              day = new Date(year, month, 0).getDate();
            }
          }
          else if (month + secondary > 12) {
            year = year + 1;
            month = secondary - (12 - month);
            if (new Date(year, month, 0).getDate() < day) {
              day = new Date(year, month, 0).getDate();
            }
          }
        }
        else {
          year = year + 1;
          month = secondary - (12 - month);
          if (new Date(year, month, 0).getDate() < day) {
            day = new Date(year, month, 0).getDate();
          }
        }
      }
    }
    year = year.toString();
    month = month < 10 ? '0' + month.toString() : month.toString();
    day = day < 10 ? '0' + day.toString() : day.toString();
  }
  date = date.replace('yyyy', year);
  date = date.replace('MM', month);
  date = date.replace('dd', day);
  date = date.replace('HH', hour);
  date = date.replace('mm', minute);
  date = date.replace('ss', second);
  return date;
}

/*
* 日期转换为周几
* 将传入的日期转换为周几，方便各页面使用直接进行展示
* value[string]：待转换的日期字符串
* */
export function day(value) {
  if (!value && !self.$sn.validate.date(value)) {
    return '';
  }
  const figure = new Date(value).getDay();
  if (figure === 0) {
    return '日';
  }
  else if (figure === 1) {
    return '一';
  }
  else if (figure === 2) {
    return '二';
  }
  else if (figure === 3) {
    return '三';
  }
  else if (figure === 4) {
    return '四';
  }
  else if (figure === 5) {
    return '五';
  }
  else if (figure === 6) {
    return '六';
  }
}

/*
* 数组排序
* 可以通过此方法对目标数组根据需求来进行排序
* digital[array]：待排序数组
* type[string]：排序方式，默认为升序；1：升序，2：降序
* sort[string]：排序字段名称，默认为“sort”
* */
export function digitalSort(digital, type = '1', sort = 'sort') {
  if (self.$sn.validate.empty(digital) || digital.length === 0) {
    return [];
  }
  // 升序
  if (type === '1') {
    return digital.sort(function(val1, val2) {
      const first = self.$sn.validate.integer(val1[sort]) ? parseInt(val1[sort]) : val1[sort];
      const secondary = self.$sn.validate.integer(val2[sort]) ? parseInt(val2[sort]) : val2[sort];
      if (first < secondary) {
        return -1;
      }
      if (first > secondary) {
        return 1;
      }
      return 0;
    });
  }
  // 降序
  else if (type === '2') {
    return digital.sort(function(val1, val2) {
      const first = self.$sn.validate.integer(val1[sort]) ? parseInt(val1[sort]) : val1[sort];
      const secondary = self.$sn.validate.integer(val2[sort]) ? parseInt(val2[sort]) : val2[sort];
      if (first < secondary) {
        return 1;
      }
      if (first > secondary) {
        return -1;
      }
      return 0;
    });
  }
}

/*
* 格式化包含 HTML 标签字符串
* 部分业务场景中，返回的信息都会带有 HTML 标签，在详情页需要进行富文本展示；
* 而在前置页面中会出现展示部分信息的情况，例如医生擅长在医生主页只展示两行信息，而在医生介绍展示全部信息。则在展示部分信息时，需要使用此方法将 HTML 标签删除
* html[string]
* */
export function html(html) {
  if (self.$sn.validate.empty(html)) {
    return '';
  }
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').trim();
}

/*
* 格式化平台名称
* 通过各平台主键，来格式化各平台名称
* type[string]：待格式化名称的平台主键，默认为当前平台
* */
export function platformTitle(type = self.$sn.utils.getPlatformType()) {
  if (type === Constants.PLATFORM_TYPE_WECHAT_MINI) {
    return '微信小程序';
  }
  else if (type === Constants.PLATFORM_TYPE_ALIPAY_MINI) {
    return '支付宝小程序';
  }
  else if (type === Constants.PLATFORM_TYPE_BAIDU_MINI) {
    return '百度小程序';
  }
  else if (type === Constants.PLATFORM_TYPE_WECHAT_H5) {
    return '微信公众号';
  }
  else if (type === Constants.PLATFORM_TYPE_ALIPAY_H5) {
    return '支付宝生活号';
  }
  else if (type === Constants.PLATFORM_TYPE_WECHAT_CITY) {
    return '微信城市服务';
  }
  else if (type === Constants.PLATFORM_TYPE_ALIPAY_CITY) {
    return '支付宝城市服务';
  }
}

/*
* 前置使用“0”补全
* 应用于需使用“0”来进行信息补全的场景
* digital[string]：待补全信息
* n[integer]：补全后信息长度
* */
export function prefixCompleteZero(digital, n) {
  const value = Array(n).join(0) + digital;
  return value.slice(-n);
}

/*
* 对象转 URL 参数
* digital[object]：所需处理的信息
* prefix[boolean]：前缀是否为 ?
* format[string]：当数据某一项的值为数据时的处理方式：repeat，comma，brackets，indices；样例参照下方批注
* */
export function reverseObjectParameter(digital, prefix = true, format = 'repeat') {
  if (typeof digital === 'object') {
    let url = '';
    Object.keys(digital).forEach(el => {
      if (!self.$sn.validate.empty(digital[el])) {
        if (typeof digital[el] === 'string') {
          url += '&' + el + '=' + digital[el];
        }
        /*
        * 如所需处理的信息为数组，则提供4种处理方式，由 format 来决定，以下批注样例为
        * {
        *   title: ['first', 'secondary']
        * }
        * */
        else if (typeof digital[el] === 'object') {
          // 格式化后为 &title=first&title=secondary
          if (format === 'repeat') {
            digital[el].forEach(element => {
              url += '&' + el + '=' + element;
            });
          }
          // 格式化后为 &title=first,secondary
          else if (format === 'comma') {
            url += '&' + el + '=' + digital[el].join(',');
          }
          // 格式化后为 &title[]=first&title[]=secondary
          else if (format === 'brackets') {
            digital[el].forEach(element => {
              url += '&' + el + '[]=' + element;
            });
          }
          // 格式化后为 &title[0]=first&title[1]=secondary
          else if (format === 'indices') {
            digital[el].forEach((element, index) => {
              url += '&' + el + '[' + index.toString() + ']=' + element;
            });
          }
        }
      }
    });
    if (prefix) {
      url = url.replace('&', '?');
    }
    return url;
  }
  else {
    return '';
  }
}

/*
* URL 参数转对象
* 可以通过此方法将 URL 参数转换为对象，方面各业务页面接收后可以直接进行数据处理
* url[string]：待转换的 URL 参数字符串
* */
export function reverseUrlParameter(url) {
  const info = {};
  if (!self.$sn.validate.empty(url)) {
    url = url.replace('?', '').split('&');
    url.forEach(el => {
      Vue.set(info, el.split('=')[0], el.split('=')[1]);
    });
  }
  return info;
}

/*
* 富文本样式处理
* 主要应用于支付宝小程序，处理只用u-parse组件时，给 DOM 定义类选择器时样式不生效的情况
* text[string]：富文本字符串
* style[string]：外层 DOM 待定义的类选择器类名
* tag[string]：外层 DOM 使用的标签名称；uni-app 框架默认为 view，H5 框架默认为 div
* */
export function richText(text, style, tag = 'div') {
  if (self.$sn.validate.empty(text)) {
    return '';
  }
  if (self.$sn.validate.empty(style)) {
    return text;
  }
  return '<' + tag + ' class="' + style + '">' + text + '</' + tag + '>';
}

/*
* 对象格式信息转换为 XML 格式
* 将对象格式的信息转换为 XML 格式
* info[object]：待格式化的信息
* empty[boolean]：当 info 中某项信息为空时，是否仍进行 XML 拼接
* */
export function xml(info, empty = false) {
  if (self.$sn.validate.empty(info) || !self.$sn.validate.object(info)) {
    return '';
  }
  let xml = '<Request>';
  const k = Object.keys(info);
  const v = Object.values(info);
  for (let i = 0; i < k.length; i++) {
    if (v[i] || empty) {
      xml += '<' + k[i] + '>';
      xml += v[i] ? v[i] : '';
      xml += '</' + k[i] + '>';
    }
  }
  xml += '</Request>';
  return xml;
}
