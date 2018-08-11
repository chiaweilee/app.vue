<template>
  <div>@{{ at }}</div>
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
