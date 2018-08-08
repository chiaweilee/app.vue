import Vue from 'vue'
import VueRouter from './config/vue-router'
import use from 'vue-use'
import App from './App.vue'
import appVue from '../src/index'
import '../src/scss/app.scss'
import './App.scss'

Vue.config.productionTip = false

const { router } = use(Vue, {
  VueRouter
})

Vue.use(appVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
