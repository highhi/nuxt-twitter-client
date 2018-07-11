export const state = () => ({
  user: null,
  tweets: null,
  userTweets: null,
  favorites: null,
})

export const getters = {
  getUser(state) {
    return state.user
  },
  getTweets(state) {
    return state.tweets
  },
  getUserTweets(state) {
    return state.userTweets
  },
  getFavorites(state) {
    return state.favorites
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setTweets(state, tweets) {
    state.tweets = tweets
  },
  setUserTweets(state, tweets) {
    state.userTweets = tweets
  },
  setFavorites(state, tweets) {
    state.favorites = tweets
  },
}
