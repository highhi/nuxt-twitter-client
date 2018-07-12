<template>
  <div>
    <tw-tweet v-for="tweet in tweets" :tweet="tweet" :key="tweet.id" />
  </div>
</template>

<script>
import TwTweet from '~/components/contexts/tw-tweet'
import timelineQuery from '~/queries/timeline'

export default {
  components: { TwTweet },
  apollo: {
    tweets: {
      query: timelineQuery,
    }, 
  }
}
</script>

