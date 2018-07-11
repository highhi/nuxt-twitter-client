<template>
  <tw-home :tweets="tweets" />
</template>

<script>
import timelineQuery from '~/queries/timeline'

export default {
  components: {
    TwHome: () => import('~/components/pages/tw-home')
  },
  apollo: {
    tweets: {
      query: timelineQuery,
    }, 
  }
}
</script>

