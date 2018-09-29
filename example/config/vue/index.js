import Vue from 'vue'
import components from './components'
import filters from './filters'
import appVue from '../../../src/index'
import VueProgressBar from 'vue-progressbar-v'

Vue.config.productionTip = false

Vue.use(appVue)
Vue.use(VueProgressBar)

export default Vue

export {
  components,
  filters
}
