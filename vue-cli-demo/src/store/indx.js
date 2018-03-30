import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.store({
    state:{
        list:[]
    },
    mutations:{
        ADD_TODO( state , todo ){
            state.list.push(todo);
        },
        REMOVE_TODO( id ){
            let index = state.list.findIndex(element=>{
                return element.id == id;
            });
            state.list.splice( index , 1 );  
        }
    } 
});

export default store;
