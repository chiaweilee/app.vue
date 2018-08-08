import VueRouter from 'vue-router'
import routes from './routes'
import base from './base'
import mode from './mode'
import beforeEach from './before-each'
import afterEach from './after-each'

export default {
  VueRouter,
  routes,
  base,
  mode,
  beforeEach,
  afterEach
}
