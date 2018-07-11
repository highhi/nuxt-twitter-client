<template>
  <time class="tweet-time" :datetime="time"><b>{{formatTime(time)}}</b></time>
</template>

<script>
export default {
  props: ['time'],
  methods: {
    formatTime(time) {
      return this.$dayjs(time).locale('en-short').fromNow()
    }
  }
}
</script>

<style soped>
.tweet-time {
  font-size: 1.1rem;
  color: #8899a6;
}
</style>

