import Vue from 'vue'
import App from './App.vue'
import appVue from '../src/index'
import '../src/scss/grid.scss'

Vue.config.productionTip = false

Vue.use(appVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
