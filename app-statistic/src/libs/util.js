import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - 快应用统计' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://dev.api.tongji.so-quick.cn/' :
    env === 'production' ?
    'https://www.url.com' :
    'http://dev.api.tongji.so-quick.cn/';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});


/** 
 * 时间戳格式化
 * @param time:时间戳13位 ; Delimiter : 分隔符（ 例子： '-' , '/' ）
 * */ 
util.formatDate = function( time , Delimiter ) { 
    Delimiter = Delimiter || '-';
    var now = new Date(time); 

    var year=now.getFullYear() + ''; 
    var month=now.getMonth()+1 + ''; 
    var date=now.getDate() + ''; 
    var hour=now.getHours() + ''; 
    var minute=now.getMinutes() + ''; 
    var second=now.getSeconds() + ''; 

    // 补0
    month = month.length < 2 ? '0' + month : month;
    date = date.length < 2 ? '0' + date : date;
    hour = hour.length < 2 ? '0' + hour : hour;
    minute = minute.length < 2 ? '0' + minute : minute;
    second = second.length < 2 ? '0' + second : second;

    return year+ Delimiter + month + Delimiter + date + " " + hour+":"+minute+":"+second; 
}

/** 
 * 时间戳格式化 不带时分秒
 * @param time:时间戳13位 ; Delimiter : 分隔符（ 例子： '-' , '/' ）
 * */ 
util.dateDndOfDay = function( time , Delimiter ){
    let date = util.formatDate(time , Delimiter );
    return date.split(' ')[0];
}
/**
 * 
 * 获取 n 天后的日期 n 。n为负数时 ，获取以前的日期
 * @param n number 
 * @return {} 指定天的日起对象
 * */ 
util.getSomeDay = function( n ){
    let today = new Date();
    today.setDate( today.getDate() + n );
    return today
}
/**
 * 获取 n 天后的日期 && 格式化 不带时分秒
 * @param n  number ; 
 * @param Delimiter : 分隔符（ 例子： '-' , '/' ）
 * */ 
util.getSomeDayFormat = function( n , Delimiter ){
    let time =  util.getSomeDay(n).getTime();
    return util.dateDndOfDay( time , Delimiter );
}

export default util;