import Vue from 'vue';
import { LoadingBar } from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import name from './assets/css/global.css';

import 'vue-happy-scroll/docs/happy-scroll.css'


Vue.use(VueRouter);
Vue.use(Vuex);

// Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {

    LoadingBar.start();
    Util.title(to.meta.title);
    // if( !store.getters.login && to.name !== 'login' ){

    //     next({
    //         name:'login'
    //     });        
    //     LoadingBar.finish();
    //     return
    // }    
    next();
});

router.afterEach(() => {

    LoadingBar.finish();
    window.scrollTo(0, 0);
});

const store = new Vuex.Store({
    state: {
        login:true
    },
    getters: {
        login:( state )=>{
            return state.login
        }
    },
    mutations: {

        loginOut:(state)=>{
            state.login = false
        },
        login:(state)=>{
            state.login = true
        }
    },
    actions: {

        loginOut({ commit }){
            commit('loginOut');
        },
        login({ commit }){
            commit('login');
        }
    }
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});