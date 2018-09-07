<template>
  <div v-if="loading < 1">
    loading {{ loading | percent }}
  </div>
  <div v-else>
    {{ tickers }}
  </div>
</template>

<script>
const name = require('./name')
export default {
  data () {
    return {
      loading: 0
    }
  },
  computed: {
    tickers () {
      return this.$store.state.cache[name]
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
      this.$store.dispatch(`$${name}`, {
        progress: (finish, all) => {
          this.loading = finish / all
        }
      })
    }
  }
}
</script>
