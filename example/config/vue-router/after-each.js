const title = require('@/config/html/title')

export default function (to, from, store) {
  // warm start
  if (store.getters.coldStart) store.commit('_warmStart')
  // progress finish
  store._vm.$Progress.finish()
  // set title
  document.title = (!!to.meta && to.meta.title && (typeof to.meta.title === 'function' ? (to.meta.title.call(to, store) || title || '') : to.meta.title)) || title || ''
}
