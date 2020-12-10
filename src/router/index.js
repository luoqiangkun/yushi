import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// router文件夹-->index.js文件
//cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//商家入驻
import Settled from '@/views/settled'
import SettledPrompt from '@/views/settled/prompt'
import SettledStore from '@/views/settled/store'
import SettledCompany from '@/views/settled/company'
import SettledLegal from '@/views/settled/legal'
import SettledResult from '@/views/settled/result'

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
          path:'company',
          component:SettledCompany
        },
        {
          path:'legal',
          component:SettledLegal
        },
        {
          path:'result',
          component:SettledResult
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
          path:'detail/:id/:rand?',
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
