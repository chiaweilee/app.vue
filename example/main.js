import Vue from 'vue'
import use from 'vue-use'
import App from './App.vue'
import appVue from '../src/index'
import '../src/scss/grid.scss'

Vue.config.productionTip = false

use(Vue, {
  use: [appVue]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
