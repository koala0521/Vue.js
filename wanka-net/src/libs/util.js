import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? '玩咖 - ' + title : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

    // 平滑滚动
const scrollToTar = function (scrollDuration , target ) {
    // ???有问题
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        target = target || 0,
        scrollInterval = setInterval(function(){
            console.log( window.scrollY , scrollStep );
            
        if ( Math.abs( window.scrollY - target ) <= 15 ) {
            window.scrollBy( target, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}
export {

    scrollToTar
}

export default util;