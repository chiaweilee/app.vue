import components from './components'

const install = function (Vue) {
  for (let component in components) {
    Vue.component('app-' + component, components[component])
  }
}

export default {
  install
}
