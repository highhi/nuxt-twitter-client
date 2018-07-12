<template>
  <div>
    <tw-tweet v-for="tweet in userTweets" :tweet="tweet" :key="tweet.id" />
  </div>
</template>

<script>
import TwTweet from '~/components/contexts/tw-tweet'
import userTweetsQuery from '~/queries/userTweets'

export default {
  components: { TwTweet },
  apollo: {
    userTweets: {
      query: userTweetsQuery,
      variables() {
        return { userId: this.$route.params.id }
      },
    }, 
  }
}
</script>
