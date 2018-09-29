import 'promise-polyfill/src/polyfill'
import 'core-js/modules/es6.object.assign'
import 'core-js/modules/es6.typed.float32-array'
import Vue, { store, router } from './config/vue'
import '../src/scss/app.scss'
import './scss/app.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>'
})
