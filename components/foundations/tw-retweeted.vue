<template>
  <p class="tweet-retweeted">
    <icon-retweet />{{name}}さんがリツート
  </p>
</template>

<script>
import IconRetweet from '~/components/icons/icon-retweet'

export default {
  props: ['name'],
  components: {
    IconRetweet
  }
}
</script>

<style scoped>
.tweet-retweeted {
  color: #657786;
  font-size: 1.2rem
}
</style>
