<template>
  <div>
    <tw-tweet
      v-for="tweet in tweets" :tweet="tweet" :key="tweet.id" />
  </div>
</template>

<script>
import TwTweet from '~/components/contexts/tw-tweet'

export default {
  props:['tweets'],
  components: { TwTweet }
}
</script>
