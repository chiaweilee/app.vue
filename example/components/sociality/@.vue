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
    <app-content ref="target"/>
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
          const content = new Component().$mount()
          this.$refs.target.appendChild(content.$el)
        })
    }
  }
}
</script>
