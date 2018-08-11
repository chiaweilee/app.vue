import { default as variables, reg2string } from '@/config/_variables'

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
    path: '/++:key(' + reg2string(variables.key) + ')',
    name: '#',
    meta: {},
    components: {
      default: r => require.ensure([], () => r(require('@/components/#.vue')), '#')
    }
  },
  {
    path: '/@:at(' + reg2string(variables.at) + ')',
    name: '@',
    meta: {},
    components: {
      default: r => require.ensure([], () => r(require('@/components/@.vue')), '@')
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
