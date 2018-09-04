module.exports = {
  state: {
    tickets: null
  },
  mutations: {
    _aa /* air-asia */ (state, tickers) {
      if (!tickers) return
      state.tickers = tickers
      if (sessionStorage) sessionStorage.setItem('aa', JSON.stringify(tickers))
    }
  },
  actions: {
    aa /* air-asia */: require('@/components/sociality/extend/airasia/request')
  },
  getters: {}
}
