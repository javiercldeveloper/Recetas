import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router/routes'
import App from './App.vue'
import services from './api/services'

Vue.use(VueRouter)

const router = new VueRouter({
  // Mode to erase the # from the url and use scroll behaviour
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  services,
  render: h => h(App)
}).$mount('#app')
