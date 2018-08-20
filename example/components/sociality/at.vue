<template>
  <router-link :to="{name: '@', params: {at}}">@{{ at }}</router-link>
</template>

<script>
export default {
  computed: {
    at () {
      return this['@']
    }
  },
  props: {
    '@': {
      type: String,
      required: true
    }
  }
}
</script>
