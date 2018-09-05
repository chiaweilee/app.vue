<template>
  <div v-if="loading < 1">
    loading {{ loading | percent }}
  </div>
  <div v-else>
    {{ tickers }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: 0
    }
  },
  computed: {
    tickers () {
      return this.$store.state.cache.tickers
    }
  },
  beforeCreate () {
    this.$nextTick(function () {
      this.$emit('theme', 'red')
    })
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$store.dispatch('aa', {
        progress: (finish, all) => {
          this.loading = finish / all
        }
      })
    }
  }
}
</script>
