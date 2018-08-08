export default [
  {
    path: '*',
    name: 'hot',
    meta: {},
    components: {
      default: r => require.ensure([], () => r(require('@/components/hot.vue')), 'hot')
    }
  }
]
