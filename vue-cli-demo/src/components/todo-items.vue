<template>
  <div>
        <div class="tasks">
            <span class="no-task-tip"  v-show="!list.length" >还没有添加任何任务</span>
            <ul class="todo-list" >

                <li class="todo" 
                    v-bind:class="{completed:item.isChecked , editing:edittingId === item.id }" 
                    v-bind:key="item.id"
                    v-for="item in filterTodo" 
                >
                        <div class="view">
                            <input v-model="item.isChecked"  class="toggle" type="checkbox" />
                            <label 
                                v-on:dblclick = "editTodo( item )"
                            > {{ item.title }} </label>
                            <button 
                                class="destroy" 
                                v-on:click="removeTodo( item )"
                            ></button>
                        </div>
                        <input 
                            class="edit" 
                            type="text"
                            v-model="item.title"
                            v-focus="edittingId === item.id"
                            v-on:blur = "edited( item , true )"
                            @keyup.13 = "edited( item , true )"
                            @keyup.27 = "edited( item , false )"
                        />
                    </li>                    
            </ul>
        </div>

        <ul class="task-count" v-show="list.length" >
            <li>{{ unCompleted }}个任务未完成</li>
            <li class="action" >
                <router-link to="/all" >所有任务</router-link>
                <router-link to="/unfinished" >未完成的任务</router-link>
                <router-link to="/finished" >完成的任务</router-link>
            </li>
        </ul>
  </div>
</template>

<script>

export default {

    data() {
        return {     
            // 当前编辑的todo的 id
            edittingId:null,
            // 保存编辑之前的title
            oldTitle:""
        }
    },

    props:["list"],

    methods:{

        removeTodo:function(item){

            this.$store.commit("REMOVE_TODO",item.id);
            
        }, 
        // 进入编辑状态
        editTodo:function(item){
            this.edittingId = item.id;
            this.oldTitle = item.title;			
        },
        // 编辑完成
        edited:function( item , isSave ){

            if( item.title.trim() === ""){
                isSave = false;
            }
            // 取消保存
            if(!isSave || item.title === this.oldTitle ){
                item.title = this.oldTitle;               
            }else{
                // 发送 编辑todo "mutations"
                this.$store.commit( "EDIT_TODO" , item );
            }

            // 退出编辑状态
            this.edittingId = "";
        }
    },
    computed:{
        unCompleted:function(){

            let unCompletedList = this.list.filter((item)=>{
                return item.isChecked ===  false
            });

            return unCompletedList.length
        },
        filterTodo(){

            let { name } = this.$route;

            switch (name) {
                case "unfinished":
                    
                    return this.list.filter((item)=>{
                            return item.isChecked === false
                        });
                case "finished":
                    
                    return this.list.filter((item)=>{
                            return item.isChecked === true
                        });

                default:
                    return this.list;
            }

        }
    },
    // 自定义指令
    directives:{

        "focus":{
            update:function( el , binding ){ 
                if( binding.value ){
                    el.focus();	
                }		
            }

        }
    }
}
</script>

