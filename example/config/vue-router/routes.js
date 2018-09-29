import reg from '@/config/reg'

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
    path: '/@:at(' + reg.at.string + ')',
    name: '@',
    meta: {
      transition: false
    },
    components: {
      default: r => require.ensure([], () => r(require('@/components/social/@.vue')), '@')
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
