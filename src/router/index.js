import Vue from 'vue'
import Router from 'vue-router'

//商家入驻
import Settled from '@/views/settled'
import SettledPrompt from '@/views/settled/prompt'
import SettledStore from '@/views/settled/store'
import SettledQualification from '@/views/settled/qualification'
import SettledOwner from '@/views/settled/owner'

//帮助中心
import Help from '@/views/help'
import HelpLists from '@/views/help/lists'
import HelpDetail from '@/views/help/detail'
import HelpCategory from '@/views/help/cate'

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
      //redirect: '/settled/prompt',
      children:[
        {
          path:'prompt',
          component:SettledPrompt
        },
        {
          path:'store',
          component:SettledStore
        },
        {
          path:'qualification',
          component:SettledQualification
        },
        {
          path:'owner',
          component:SettledOwner
        }
      ]
    },
    {
      path:'/help',
      name:'Help',
      component: Help,
      redirect: '/help/lists',
      children:[
        {
          path:'lists/:category_id?/:keyword?',
          component:HelpLists
        },
        {
          path:'detail/:id',
          component:HelpDetail
        },
        {
          path:'category',
          component:HelpCategory
        }
      ]
    }
  ]
})
