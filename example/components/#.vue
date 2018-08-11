<template>
  <div>#{{ key }}</div>
</template>

<script>
export default {
  computed: {
    key: function () {
      return this.$route.params.key
    }
  }
}
</script>
