// before each routers
// Vue-router

export default function (to, from, next, store) {
  if (!store.getters.coldStart) {
    // @warmStart
    // go history
    const history = store.getters.history
    const target = history.length - 2
    if (to.name === history[target] && history[target].name) {
      // history back
      store.commit('_historyPop')
      // slide left
      store.commit('_slideLeft')
    } else {
      // progress start
      store._vm.$Progress.start()
      // history go new
      store.commit('_historyPush', { name: to.name, query: to.query, params: to.params })
      // slide right
      if (to.meta.transition === false) {
        store.commit('_noTransition')
      } else {
        store.commit('_slideRight')
      }
    }
  } else {
    // @coldStart
    // new history
    store.commit('_historyPush', { name: from.name, query: from.query, params: from.params })
    store.commit('_historyPush', { name: to.name, query: to.query, params: to.params })
  }
  // go next route
  next()
}
