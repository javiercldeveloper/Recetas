import Vue from 'vue'
import './plugins/fontawesome'
import VueRouter from 'vue-router'
import { routes } from './router/routes'
import App from './App.vue'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

store.dispatch('auth/init')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
