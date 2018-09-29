import Vue, { filters, components } from './config/vue'
import use from 'vue-use'
import VueRouter from './config/vue-router'
import Vuex from './config/vuex'
import '../src/scss/app.scss'
import './scss/app.scss'

const { store, router } = use(Vue, {
  filters,
  components,
  VueRouter,
  Vuex
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>'
})
