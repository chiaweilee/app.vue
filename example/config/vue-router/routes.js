import variables, { reg2string } from '@/config/variables'

export default [
  {
    path: '/',
    name: 'home',
    meta: {},
    components: {
      default: r => require.ensure([], () => r(require('@/components/home.vue')), 'home')
    }
  },
  {
    path: '/@:at(' + reg2string(variables.at) + ')',
    name: '@',
    meta: {},
    components: {
      default: r => require.ensure([], () => r(require('@/components/sociality/@.vue')), '@')
    }
  },
  {
    path: '*',
    name: '404',
    meta: {},
    components: {
      default: r => require.ensure([], () => r(require('@/components/error/404.vue')), 'error')
    }
  }
]
