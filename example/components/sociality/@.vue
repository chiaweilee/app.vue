<template>
  <app-page>
    <app-topbar theme="dark-blue">
      <app-title>
        @{{ at }}
      </app-title>
    </app-topbar>
    <div ref="target"></div>
  </app-page>
</template>

<script>
import Vue from 'vue'
export default {
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
      import(`./extend/${this.at}.vue`)
        .then(c => {
          const Component = Vue.extend(c.default)
          new Component().$mount(this.$refs.target)
        })
    }
  }
}
</script>
