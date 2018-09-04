import Vue from 'vue'
import Vuex from 'vuex'
import use from 'vue-use'
import App from './App.vue'
import appVue from '../src/index'
import VueRouter from './config/vue-router'
import { modules } from './config/vuex'
import { filters, components } from './config/vue'
import '../src/scss/app.scss'
import './scss/app.scss'

Vue.config.productionTip = false

const {store, router} = use(Vue, {
  filters,
  components,
  VueRouter,
  Vuex: {
    Vuex,
    Store: {
      modules,
      strict: process.env.NODE_ENV !== 'production'
    }
  }
})

Vue.use(appVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  template: '<App/>',
  components: {App}
})
