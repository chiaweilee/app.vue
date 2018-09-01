import Vue from 'vue'
import use from 'vue-use'
import App from './App.vue'
import appVue from '../src/index'
import VueRouter from './config/vue-router'
import components from './config/vue/components'
import '../src/scss/app.scss'
import './scss/app.scss'

Vue.config.productionTip = false

const { router } = use(Vue, {
  components,
  VueRouter
})

Vue.use(appVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
