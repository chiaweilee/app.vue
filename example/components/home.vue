<template>
  <app-page>
    <app-topbar theme="dark-blue">
      <app-button left>
        <span>.</span>
      </app-button>
      <app-button right disabled>
        <span>.</span>
      </app-button>
      <app-title>
        Dear Red
      </app-title>
    </app-topbar>
    <app-content>
      <opening v-if="opening" @end="close"/>
      <dl>
        <dd>
          <at :@="'airasia'"/>
        </dd>
      </dl>
    </app-content>
  </app-page>
</template>

<script>
export default {
  data () {
    return {
      opening: true
    }
  },
  methods: {
    close () {
      this.opening = false
    }
  }
}
</script>
