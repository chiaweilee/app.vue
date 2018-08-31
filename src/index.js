/**
 * app-vue v0.1.2
 * (c) 2018 +v
 * @license MIT
 */
import components from './components'

const install = function (Vue) {
  for (let component in components) {
    Vue.component('app-' + component, components[component])
  }
}

export default {
  install
}
