import Vue from 'vue'
import Router from 'vue-router'

import TodoList from '@/components/Todo'

/*测试路由*/ 
const df = { template: '<div>默认组件</div>' };
const ch = { template: '<h4>嵌套组件</h4>' };

Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:{name:"all"}
    },    
    {
      path: '/all',
      name: 'all',
      component: TodoList,
      // children:[
      //   {
      //     path:"/aaa",
      //     component:ch
      //   }
      // ]
    },
    {
      path: '/unfinished',
      name: 'unfinished',
      component: TodoList
    },
    {
      path: '/finished',
      name: 'finished',
      component: TodoList
    },{
      path:"*",
      redirect:{name:"all"}
    }    
    
    
  ]
})
