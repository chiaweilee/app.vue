// before each routers
// Vue-router

export default function (to, from, next, store) {
  const history = store.getters.history
  console.log(history)
  if (!store.getters.coldStart) {
    // @warmStart
    // go history
    if (to.name === history[history.length - 2] && history[history.length - 2].name) {
      // history back
      store.commit('_historyPop')
      // slide left
      store.commit('_slideLeft')
    } else {
      // progress start
      store._vm.$Progress.start()
      // history go new
      store.commit('_historyPush', {
        name: to.name,
        query: to.query,
        params: to.params
      })
      // slide right
      store.commit('_slideRight')
    }{
      if (to.name === 'signin' || to.name === 'register') {
        store._vm.$Progress.finish()
        return
      }
    }
  } else {
    // @coldStart
    // new history
    store.commit('_historyPush', {
      name: from.name,
      query: from.query,
      params: from.params
    })
    store.commit('_historyPush', {
      name: to.name,
      query: to.query,
      params: to.params
    })
  }
  // go next route
  next()
}
