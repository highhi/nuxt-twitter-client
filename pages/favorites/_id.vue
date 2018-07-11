<template>
  <tw-favorites :tweets="getFavorites" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch({ app, store, params, error }){
    try {
      const tweets = await app.$axios.$get(`/api/favorites/${params.id}`)
      store.commit('setFavorites', tweets)
    } catch(err) {
      error({ statusCode: err.status, message: err.message })
    }
  },
  components: {
    TwFavorites: () => import('~/components/pages/tw-favorites')
  },
  computed: {
    ...mapGetters(['getFavorites'])
  }
}
</script>
