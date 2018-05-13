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

    // 窗口平滑滚动到目标位置
const scrollToTar = function ( scrollDuration , target ){
    console.log( window.scrollY , target );
    // console.log( 'window.scrollY' , window.scrollY );
    let intervalTime = 15; //触发间隔时间
    let n = scrollDuration / intervalTime; // 执行次数
    let scrollStep =  target / n;  // 每次运动的长度

    if( Math.abs( scrollStep ) <= 2 ){
        window.scrollBy( 0 , target );
        return
    }

    let timer = setInterval(()=>{
        console.log( n , scrollStep );
        
        if( n <= 0 ){
            clearInterval( timer ); 
            return
        }
        window.scrollBy( 0 , scrollStep );
        --n;
    },intervalTime);
    
}

export {

    scrollToTar
}

export default util;