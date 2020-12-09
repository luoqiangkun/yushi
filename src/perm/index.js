import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import { getCookie } from '@/utils/cookie'
const whiteList = ['/login'] // no redirect whitelist
router.beforeEach(async(to, from, next) => {
  // determine whether the user has logged in
  const ukey = getCookie('ukey'); 
 
  if (ukey) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      store.commit('auth/SET_AUTH',ukey)
      let uid = store.getters.profile.userId 
      if (uid) {
        next()
      } else {
        try {
          // get user info
         await store.dispatch('profile/userInfo')

          next()
        } catch (error) {
          
          await store.dispatch('auth/logout')
          
          //next(`/login?redirect=${to.path}`)
        }
      }

    }
  } else {
    /* has no ukey*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      //next(`/login?redirect=${to.path}`)
      try{
        // await store.dispatch('auth/login',{
        //   user_account:'timor',
        //   user_password:111111
        // })
        // next()
      } catch (error) {
        console.log(error)
      }
     
    }
  }
})

router.afterEach(() => {
  
})
