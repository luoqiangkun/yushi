import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Settled from '@/views/settled'
import Prompt from '@/views/settled/prompt'
import Store from '@/views/settled/store'
import Qualification from '@/views/settled/qualification'
import Owner from '@/views/settled/owner'

import 'normalize.css/normalize.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Settled
    },
    {
      path:'/settled',
      name:'Settled',
      component: Settled,
      redirect: '/settled/prompt',
      children:[
        {
          path:'prompt',
          component:Prompt
        },
        {
          path:'store',
          component:Store
        },
        {
          path:'qualification',
          component:Qualification
        },
        {
          path:'owner',
          component:Owner
        }
      ]
    },
  ]
})
