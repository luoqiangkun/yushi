
import { footerData,helpCategoryTree } from '@/api'
const state = {
    footer:{
      loaded:false
    },
    helpCategory:{
      loaded:false,
      treeData:[],
      categoryId:0,
      activeName:0
    }
}
const mutations = {
  SET_FOOTER: (state, footer) => {
      footer.loaded = true
      state.footer = footer
  },
  SET_CATEGORY: (state, treeData) => {
    state.helpCategory.loaded = true
    state.helpCategory.treeData = treeData 
  },
  SET_CATEGORY_ID: (state, categoryId) => {
    state.helpCategory.categoryId = categoryId 
  },
}
const actions = {
  // get user info
  footerData({ commit, state }) {
    return new Promise((resolve, reject) => {
        footerData().then(response => {
        const data = response.data
        commit('SET_FOOTER', data)
        resolve(data);
      }).catch(error => {
        reject(error)
      })
    })
  },
  helpCategoryData({ commit, state }){
    return new Promise((resolve, reject) => {
      helpCategoryTree().then(response => {
        const data = response.data
        commit('SET_CATEGORY', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  setHelpCategoryId({ commit, state },id){
    commit('SET_CATEGORY_ID', id)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
