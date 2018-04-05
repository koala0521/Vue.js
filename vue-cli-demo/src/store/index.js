import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    // 应用的全局数据
    state:{
        list:[]
    },
    // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    mutations:{
        ADD_TODO( state , todo ){

            state.list.push({
                title:todo,
                isChecked:false,
                id:Math.random()
            });
            this.todo = "";

        },
        REMOVE_TODO( state , id ){
            let index = state.list.findIndex(element=>{
                return element.id == id;
            });
            state.list.splice( index , 1 );  
        },
        EDIT_TODO( state , item ){
            let index = state.list.findIndex(element=>{
                return element.id === item.id;
            });

            state.list[ index ] ? state.list[ index ].title = item.title : null;
        }
    } 
});

export default store;
