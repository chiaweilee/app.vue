<template>
  <app-page>
    <app-topbar theme="dark-blue">
      <app-button left history-back>
        <span>back</span>
      </app-button>
      <app-title>
        @{{ at }}
      </app-title>
    </app-topbar>
    <app-content>
      <component v-if="!!compo" :is="compo"/>
    </app-content>
  </app-page>
</template>

<script>
export default {
  data () {
    return {
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
    mount () {
      this.compo = () => import(`./extend/${this.at}`)
    }
  }
}
</script>
