import Vue from 'vue';
import Vuex from 'vuex';
// import Util from './libs/util';

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        login: true,
        // 选择厂商
        activeVendor: '0',

        // app_info: Util.parseObject( window.location.search ).info || Util.getStorage( APP_INFO ) || '',

        pageSizeOpts: [20,40,60,80],

        showNotice: true,
        // 用户信息
        userInfo: null
    },
    getters: {
        login:( state )=>{
            return state.login
        },
        activeVendor:( state )=>{
            return state.activeVendor
        },
        pageSizeOpts( state ){
            return state.pageSizeOpts
        },
        getInfo( state ){
            return state.app_info
        },
        showNotice( state ){
            return state.showNotice
        },
        userInfo( state ){
            return state.userInfo
        }
    },
    mutations: {

        loginOut:(state)=>{
            state.login = false
        },
        login:(state)=>{
            state.login = true
        },
        selectVendor:( state , payload )=>{
            state.activeVendor = payload.activeVendor
        },
        saveAppInfo( state , payload ){
            state.app_info = payload.app_info;
        },
        closeNotice(state){
            state.showNotice = false;
        },
        updateUserInfo( state , payload ){
            state.userInfo = payload.data;
        }
    },
    actions: {

        loginOut({ commit }){
            commit('loginOut');
        },
        login({ commit }){
            commit('login');
        },
        selectVendor({ commit } , payload ){
            commit('selectVendor' , payload);
        },
        saveAppInfo( { commit }  , payload ){
            commit('saveAppInfo' , payload );
        },
        closeNotice({ commit }){
            commit('closeNotice');
        },
        updateUserInfo( { commit } , payload ){
            commit('updateUserInfo', payload );
        }
    }
});
export default store;

