// 兼容IE9~IE11
import 'babel-polyfill';

import Vue from 'vue';
// import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './assets/css/global.css';

import VueI18n from 'vue-i18n';
import Locales from './locale';
import zhLocale from 'iview/src/locale/lang/zh-CN';
import twLocale from 'iview/src/locale/lang/zh-TW';
import enLocale from 'iview/src/locale/lang/en-US';

import { LoadingBar } from 'iview';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
// Vue.use(iView);

// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

Vue.config.lang = lang;

// 多语言配置
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
const mergeTW = Object.assign(twLocale, locales['zh-TW']);
const mergeEN = Object.assign(enLocale, locales['en-US']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('zh-TW', mergeTW);
Vue.locale('en-US', mergeEN);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    LoadingBar.finish();
    window.scrollTo(0, 0);
});

// 状态管理
const store = new Vuex.Store({
    state: {
        'lan':lang
    },
    getters: {
        'lan' : state =>{
            return state.lan;
        }
    },
    mutations: {

    },
    actions: {

    }
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});