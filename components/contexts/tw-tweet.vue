<template>
  <div class="tweet">
    <tw-retweeted :name="tweet.user.name" v-if="tweet.retweeted_status" />
    <tw-avatar :image="tw.user.profile_image_url" />
    <p class="tweet-name-wrapper">
      <nuxt-link :to="`/users/${tw.user.id}`"><b>{{tw.user.name}}</b></nuxt-link>
      <tw-screen-name :name="tw.user.screen_name" />
    </p>
    <p class="tweet-text">{{tw.text}}</p>
    <tw-time :time="tw.created_at" />
    <ul class="tweet-actions">
      <li><tw-action :count="tw.retweet_count">
        <icon-base :width="16" :height="16"><icon-retweet /></icon-base>
      </tw-action></li>
      <li><tw-action :count="tw.favorite_count" @click="onFavorite(tw.id_str)">
        <icon-base :width="14" :height="14"><icon-heart /></icon-base>
      </tw-action></li>
    </ul>
  </div>
</template>

<script>
import TwTime from '~/components/foundations/tw-time'
import TwAvatar from '~/components/foundations/tw-avatar'
import TwScreenName from '~/components/foundations/tw-screen-name'
import TwAction from '~/components/foundations/tw-action'
import TwRetweeted from '~/components/foundations/tw-retweeted'
import IconBase from '~/components/icons/icon-base'
import IconHeart from '~/components/icons/icon-heart'
import IconRetweet from '~/components/icons/icon-retweet'
import IconBalloon from '~/components/icons/icon-balloon'
import addFavoriteQuery from '~/queries/addFavorite'

export default {
  props: ['tweet', 'retweet'],
  components: {
    TwTime,
    TwAvatar,
    TwScreenName,
    TwRetweeted,
    TwAction,
    IconBase,
    IconHeart,
    IconRetweet,
    IconBalloon,
  },
  computed: {
    tw() {
      return this.tweet.retweeted_status || this.tweet
    }
  },
  methods: {
    async onFavorite(tweetId) {
      try {
        const res = await this.$apollo.mutate({
          mutation: addFavoriteQuery,
          variables: { tweetId }
        })
      } catch(err) {
        throw err
      }
    }
  }
}
</script>

<style scoped>
.tweet {
  padding: 16px;
  display: grid;
  grid-template-areas: "rw rw rw"
                       "img name time"
                       "img text text"
                       "img action action";
  grid-template-rows: auto;
  grid-template-columns: 36px auto;
  grid-column-gap: 8px;
  border-bottom: 1px solid #e6ecf0;
}

.tweet:last-child {
  border: none;
}

.tweet-avatar {
  grid-area: img;
}

.tweet-name-wrapper {
  grid-area: name;
  align-self: start;
}

.tweet-text {
  grid-area: text;
  align-self: start;
}

.tweet-time {
  grid-area: time;
  justify-self: end;
}

.tweet-screen-name {
  font-size: 1.2rem;
  margin-left: 8px;
}

.tweet-actions {
  grid-area: action
}

.tweet-actions li {
  display: inline-block;
  vertical-align: top;
  margin-right: 16px;
}

.tweet-retweeted {
  grid-area: rw;
  padding-bottom: 8px;
}
</style>
