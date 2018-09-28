import Vuex from 'vuex'
import modules from './modules'

export default {
  Vuex,
  Store: {
    modules,
    strict: process.env.NODE_ENV !== 'production'
  }
}
