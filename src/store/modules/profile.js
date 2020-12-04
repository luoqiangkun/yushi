
import { userInfo } from '@/api'
const state = {
  userId:0,
  userName:'',
  userAvatar: ''
}
const mutations = {
  SET_PROFILE: (state, profile) => {
    state.userId = profile.userId
    state.userName = profile.userName
    state.userAvatar = profile.userAvatar
  }
}
const actions = {
  // get user info
  userInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      userInfo().then(response => {
        const data = response.data
        if( response.status === 200 ){
          const memberInfo = data.member_info
          let profile = {
            userId:memberInfo.user_id,
            userName:memberInfo.user_nickname,
            userAvatar:memberInfo.user_avatar
          }
          commit('SET_PROFILE', profile)
        } else {
          reject('账号信息有误，请重新登录')
        }
        resolve(data);
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
