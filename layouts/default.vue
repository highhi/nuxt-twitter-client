<template>
  <div class="wrapper">
    <tw-header />
    <nuxt class="main"/>
  </div>
</template>

<script>
import TwHeader from '~/components/contexts/tw-header'

export default {
  // middleware: 'auth',
  components: {
    TwHeader
  },
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 50px 1fr;
}

.main {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch
}
</style>
