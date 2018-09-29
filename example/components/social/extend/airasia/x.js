const name = require('./name')

module.exports = {
  state: {
    [name]: null
  },
  mutations: {
    [`_${name}`] (state, t) {
      if (!t) return
      state[name] = t
      if (sessionStorage) sessionStorage.setItem(name, JSON.stringify(t))
    }
  },
  actions: {
    [`$${name}`]: require('./request')
  },
  getters: {}
}
