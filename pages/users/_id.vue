<template>
  <tw-user :tweets="userTweets" />
</template>

<script>
import userTweetsQuery from '~/queries/userTweets'

export default {
  components: {
    TwUser: () => import('~/components/pages/tw-user')
  },
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
