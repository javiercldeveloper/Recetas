import { stitchClient } from '../../stitch-client'
import { UserPasswordCredential } from 'mongodb-stitch-browser-sdk'

const AUTH_KEY = process.env.VUE_APP_STITCH_AUTH_KEY
const ADMIN_USER_ID = process.env.VUE_APP_ADMIN_USER_ID

export default {
  namespaced: true,
  state: () => ({
    userId: null
  }),
  mutations: {
    SET_USER (state, userId) {
      state.userId = userId
    }
  },
  actions: {
    init ({ commit }) {
      const raw = localStorage.getItem(AUTH_KEY)
      if (raw) {
        try {
          const parsed = JSON.parse(raw)
          commit('SET_USER', parsed.user_id || null)
        } catch (e) {
          commit('SET_USER', null)
        }
      }
    },
    async login ({ commit }, { email, password }) {
      const credential = new UserPasswordCredential(email, password)
      const user = await stitchClient.auth.loginWithCredential(credential)
      commit('SET_USER', user.id)
    },
    async logout ({ commit }) {
      await stitchClient.auth.logout()
      commit('SET_USER', null)
    }
  },
  getters: {
    userId: state => state.userId,
    isLoggedIn: state => !!state.userId,
    isAdmin: state => state.userId === ADMIN_USER_ID
  }
}
