import Vue from 'vue'
import Router from 'vue-router'

import TodoList from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'all',
      component: TodoList
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
    }        
  ]
})
