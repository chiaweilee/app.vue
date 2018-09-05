<template>
  <app-page>
    <app-topbar :theme="theme || 'dark-blue'" transition>
      <app-button left history-back>
        <span>back</span>
      </app-button>
      <app-title>
        @{{ at }}
      </app-title>
    </app-topbar>
    <app-content>
      <component v-if="!!compo" :is="compo" @theme="setTheme"/>
    </app-content>
  </app-page>
</template>

<script>
export default {
  data () {
    return {
      theme: null,
      compo: null
    }
  },
  created () {
    this.mount()
  },
  computed: {
    at: function () {
      return this.$route.params.at
    }
  },
  methods: {
    setTheme (to) {
      this.theme = to
    },
    mount () {
      this.compo = () => import(`./extend/${this.at}`)
    }
  }
}
</script>
