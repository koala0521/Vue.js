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
            <TodoItems v-bind:list="list" ></TodoItems>
            <div>
                <!-- <h2>Todo: {{ $route.params.id }} </h2>
                <router-view /> -->
            </div>
        </div>
</template>

<script>
    
    import TodoItems from './todo-items';

    export default {

        data(){
            return {

                list:this.$store.state.list,
                // 创建todo时，输入的todo名称
                todo:""
            }
        },
        components:{
            TodoItems
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
                // 调用 store.commit方法， 触发 mutation，改变数据
                this.$store.commit("ADD_TODO" , this.todo );
                this.todo = "";
            }               
        }
    }

</script>
