// promise 兼容
require('es6-promise').polyfill();

import Vue from 'vue';
import { LoadingBar } from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import store from './store';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import name from './assets/css/global.css';

import 'vue-happy-scroll/docs/happy-scroll.css'

import 'v-charts/lib/style.css';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {

    LoadingBar.start();
    Util.title(to.meta.title);

    // 判断是否登陆
    if( !store.getters.login ){
        // 没有登陆则跳转到登陆页
        if( to.name !== 'login' ){
            router.push({
                name:'login'
            });  
        }
    }else{
        if( to.name === 'login' ){
            router.push({
                name:'list'
            }); 
        }
    }
    next();
});

router.afterEach(() => {

    LoadingBar.finish();
    window.scrollTo(0, 0);
});

// localstorage 的 key值
// const APP_INFO = 'APP_INFO_kEY';

// let urlInfo = Util.parseObject( window.location.search ).info;

// urlInfo && Util.setStorage( APP_INFO , urlInfo );

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});