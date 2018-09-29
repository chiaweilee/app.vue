import Vue from 'vue'
import components from './components'
import filters from './filters'
import appVue from '../../../src/index'
import VueProgressBar from 'vue-progressbar-v'
import use from 'vue-use'
import VueRouter from '../vue-router'
import Vuex from '../vuex'

Vue.config.productionTip = false

Vue.use(appVue)
Vue.use(VueProgressBar)

const { store, router } = use(Vue, {
  filters,
  components,
  VueRouter,
  Vuex
})

export default Vue

export {
  store,
  router
}
