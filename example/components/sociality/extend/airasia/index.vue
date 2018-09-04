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

<style scoped>
  dl,
  dt,
  dd {
    padding: 0;
    margin: 0;
  }

  dl {
    display: inline;
  }
</style>
