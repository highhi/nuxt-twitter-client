<template>
  <div>
    <tw-tweet v-for="tweet in favorites" :tweet="tweet" :key="tweet.id" />
  </div>
</template>

<script>
import TwTweet from '~/components/contexts/tw-tweet'
import favoritesQuery from '~/queries/favorites'

export default {
  components: {
    TwTweet
  },
  apollo: {
    favorites: {
      query: favoritesQuery,
    }, 
  }
}
</script>
