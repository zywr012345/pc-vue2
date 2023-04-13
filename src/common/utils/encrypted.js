/*
* 2022年9月21日14:10:00 LXC
* 脱敏共用方法
* */
import self from '../../main';

/*
* 银行卡卡号脱敏
* 只展示后四位，其余用“*”补齐
* bankCard[string]：银行卡卡号字符串
* */
export function bankCard(bankCard) {
  if (self.$sn.validate.empty(bankCard)) {
    return '';
  }
  const digital = bankCard.length;
  let single = '';
  for (let i = 0; i < (digital - 4); i++) {
    single += '*';
  }
  return single + bankCard.substring(digital - 4, digital);
}

/*
* 身份证号脱敏
* 前三后四，其余用“*”补齐
* idCardSerial[string]：身份证号字符串
* */
export function idCardSerial(idCardSerial) {
  if (self.$sn.validate.empty(idCardSerial) || !self.$sn.validate.idCardSerial(idCardSerial)) {
    return '';
  }
  const digital = idCardSerial.length;
  let single = '';
  for (let i = 0; i < (digital - 7); i++) {
    single += '*';
  }
  return idCardSerial.substring(0, 3) + single + idCardSerial.substring(digital - 4, digital);
}

/*
* 姓名脱敏
* 如为两个字姓名，则只明文展示姓氏，其余用“*”补齐
* 如为三个字或更多，则只明文展示姓氏及名字最后一个字，其余用“*”补齐
* name[string]：姓名字符串
* */
export function name(name) {
  if (self.$sn.validate.empty(name)) {
    return '';
  }
  let value = '';
  if (name.length === 2) {
    value = name.substr(0, 1) + '*';
  }
  else if (name.length > 2) {
    let single = '';
    for (let i = 0; i < name.length - 2; i++) {
      single += '*';
    }
    value = name.substr(0, 1) + single + name.substr(-1, 1);
  }
  else {
    value = name;
  }
  return value;
}

/*
* 手机号脱敏
* 前三后四，其余用“*”补齐
* phone[string]：手机号字符串
* */
export function phone(phone) {
  if (self.$sn.validate.empty(phone) || !self.$sn.validate.phone(phone)) {
    return '';
  }
  return phone.substring(0, 3) + '****' + phone.substring(7, 12);
}
