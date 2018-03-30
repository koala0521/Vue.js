<template>
          <div class="main">

            <h3 class="big-title">添加任务：</h3>
            <input 
                placeholder="例如：吃饭睡觉打豆豆；    提示：回车即可添加任务" 
                class="task-input" 
                type="text"
                v-on:keyup.enter = "addTodo"
                v-model="todo"
            />
      
            <h3 class="big-title">任务列表：</h3>
            <TodoItems v-bind:show="show" v-bind:list="list" ></TodoItems>
            <div>
                <h2>Todo: {{ $route.params.id }} </h2>
                <router-view />
            </div>
        </div>
</template>

<script>
    
    import TodoItems from './todo-items';

    export default {

        data(){
            return {
                // list:store.fatch("todos") || [],
                list:[],
                // 当前展示的分类
                show:"all",
                // 创建todo时，输入的todo名称
                todo:""
            }
        },
        components:{
            TodoItems
        },
        computed:{
            unCompleted:function(){
                
                let unCompletedList = this.list.filter((item)=>{
                    return item.isChecked ===  false
                });

                return unCompletedList.length
            },
            filterTodos:function(){
                let list = this.list;

                let todos ={
                    "all":function(){
                        return list;
                    },
                    "finished":function(){

                        return list.filter(item=>{
                            return item.isChecked === true
                        });
                    },
                    "unfinished":function(){
                        return list.filter(item=>{
                            return item.isChecked === false
                        });
                    }
                };
                let filterFn = todos[ this.show ] || todos.all;

                return filterFn();
            }

        },
        watch:{

            // 浅监控 ： list 数组每一项的内部属性改变无法监控
            // list:function(){
            // 	store.save( "todos" , this.list );
            // }
            // list:{
            //     handler:function(){
            //         store.save( "todos" , this.list );
            //     },
            //     deep:true
            // }
        },	

        methods:{

            addTodo:function(ev) {
                this.list.push({
                    title:this.todo,
                    isChecked:false,
                    id:Math.random()
                });
                this.todo = "";
            },
            removeTodo:function(item){

                var index = this.list.indexOf( item );
                this.list.splice( index , 1 );
                
            }
                

        }
    }

</script>
