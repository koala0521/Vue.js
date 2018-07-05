import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 5000,
    headers: {
        'X-SID': '',
        'X-TOKEN':''
    }
});

// sessin id 存储
util.setStorage = ( key ,value )=>{
    sessionStorage.setItem( key , value );
}
// sessin id 读取
util.getStorage = ( key )=>{
    return sessionStorage.getItem( key );
}

export default util;