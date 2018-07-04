import axios from 'axios';
// import env from '../config/env';

const env = window.env || 'production';

// 跳转地址
const quickAppUrl = env === 'debug' ?
    
    'http://dev.so-quick.cn' :

    // 在线联调地址
    env === 'development' ?
    'http://dev.so-quick.cn' :

    // 测试环境
    env === 'test' ?
    'http://test.so-quick.cn' :  

    //生产环境 
    env === 'production' ?
    'http://sandbox.so-quick.cn' :

    // 默认
    'http://sandbox.so-quick.cn'; 

let util = {};

util.quickAppUrl = quickAppUrl;

// meta信息
util.title = function(title) {
    title = title ? title + ' - 快应用统计' : '快应用统计';
    window.document.title = title;
};

const ajaxUrl = env === 'debug' ?
        // 显丽后台地址
        'http://quickapp.count.local' :
        
        // 在线联调地址
        env === 'development' ?
        'http://dev.api.tongji.so-quick.cn/' :
        
        // 测试环境
        env === 'test' ?
        'http://test.api.tongji.so-quick.cn/' :  
        
        //生产环境 
        env === 'production' ?
        'http://sandbox.api.tongji.so-quick.cn/' :
       
        // 默认
        'http://sandbox.api.tongji.so-quick.cn/';

util.baseURL = ajaxUrl;

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 5000,
    withCredentials: true
});

// 官网交互 API
util.ajaxToNet = axios.create({
    baseURL: quickAppUrl,
    timeout: 5000,
    withCredentials: true
});


/** 
 * 时间戳格式化
 * @param time:时间戳13位 ; Delimiter : 分隔符（ 例子： '-' , '/' ）
 * */ 

//  格式化时间
util.formatDate = function( time , Delimiter ) { 
    Delimiter = Delimiter || '-';
    var now = new Date(time); 

    var year = now.getFullYear() + ''; 
    var month = now.getMonth()+ 1 + ''; 
    var date = now.getDate() + ''; 
    var hour = now.getHours() + ''; 
    var minute = now.getMinutes() + ''; 
    var second = now.getSeconds() + ''; 

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
 * @param time:时间戳13位 ; 
 * @param Delimiter : 分隔符（ 例子： '-' , '/' ）
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

/** 
 * 导出文件
 * 
 * */ 
util.exportFile = function ( path ) {

    window.open( path , "_blank" );
};

/** 
 * 对象转为查询字符串
 * @type object
 * */ 
util.toQueryString = function(obj) {
	let str = "";
	for (let n in obj) {
		str += n + "=" + obj[n] + "&";
	}
	str = str.substring(0, str.length - 1);
	return str;
}

/**
 * 查询字符串转为对象
 * */ 
util.parseObject = function(url){
    var obj = {};
    if(url.indexOf('?')!==-1){
      var url = url.substring(url.indexOf('?')+1);
    }else{
      return {};
    }
    var arr = url.split('&');
    arr.forEach(function(val){
      var brr = val.split('=');
      obj[brr[0]] = brr[1];
    });
    return obj;

}


/** 
 * 文字溢出处理
 * @param text : string
 * @param len : number
 * 
 * */ 
util.textClip = function(text, len) {
    len = len || text.length;
    if (len && text.length <= len) {
        return text;
    }
    return text.substr(0, len) + '…';
}

/**
 * 返回首页
 **/ 
util.backHome = function(){
    window.location.href = quickAppUrl;
}

/** 
 * 设置缓存
 * 
 * */ 
util.setStorage = function( key , value ){
    let val = value;
    if( typeof value !== 'string' ){
        val = JSON.stringify(value);
    }    

    localStorage.setItem( key , val );
}

/** 
 * 
 * 读取缓存缓存
 * */ 
util.getStorage = function( key ){
  
    return localStorage.getItem( key );
}



export default util;