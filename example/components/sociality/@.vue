<template>
  <app-page>
    <app-topbar theme="dark-blue">
      <app-title>
        @{{ at }}
      </app-title>
    </app-topbar>
  </app-page>
</template>

<script>
export default {
  computed: {
    at: function () {
      return this.$route.params.at
    }
  }
}
</script>
