import tweet from 'twitter-text'

export default (_, inject) => {
  inject('tweet', tweet)
}