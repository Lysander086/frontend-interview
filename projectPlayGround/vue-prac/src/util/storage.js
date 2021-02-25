/* 本文件用于指定全局存储key, 方便直接查看含义 */

import localForage from 'localforage';

/**
 * @description 从localStorage获取
 * @param k
 * @param jsonConvert: 是否使用JSON.parse解析对象，当缓存中的内容是一个可识别的js变量是时需要设置为true
 * @param cb: 回调函数
 * */
export function get_localStorage(k, jsonConvert = true, cb) {

  if (typeof jsonConvert !== 'boolean') {
    console.error('传值错误 ');
    return;
  }


  let res = localStorage.getItem(k);
  if (jsonConvert) {
    try {
      res = JSON.parse(res) || {};

    } catch (e) {
      res = null;
    }
  } else { //  原样返回

  }
  cb && cb();
  return res;

}

/**
 * @description 存储内容到localStorage
 * @param k
 * @param val:  true => 把val作为一个js可解析的变量存储 ,false => 将val作为字符串存储
 * @param jsonConvert: 是否使用JSON.stringify压缩对象，当缓存中的内容是一个可识别的js变量是时需要设置为true
 * @param cb
 * */
export function set_localStorage(k, val, jsonConvert = true, cb) {

  if (typeof jsonConvert !== 'boolean') {
    console.error('传值错误 ');
    return;
  }

  if (jsonConvert) {
    try {
      val = JSON.stringify(val);
    } catch (e) {
      console.error('存储失败, 默认存空: ' + e);
      val = '';
    }
  }
  localStorage.setItem(k, val);
  cb && cb();
}

// 一次性存取
export async function oneTime_localForage_get(k) {
  let res = await localForage.getItem(k);
  await localForage.setItem(k, undefined);
  return res;
}

// 可进行回调的获取缓存, 则在cb里面进行
export async function localForage_get(keyName, cb) {
  await localForage.setItem(keyName);
  cb && cb();
}


export async function localForage_set(keyName, cb) {

}


export function sessionStorage_get(keyName, isVal) {

  let res = null;
  try {
    if (sessionStorage[keyName])
      res = sessionStorage[keyName];
    try {
      if (isVal)
        res = JSON.parse(res) || null;
    } catch (parseError) {
      console.warn('sessionStorage_get', parseError);
    }
  } catch (e) {
    console.error(e);
    res = null;
  }
  return res;
}
