<template>  
  <a href="#" @click.prevent="$emit('click', $event)">
    <slot /><b class="count">{{count}}</b>
  </a>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.count {
  display: inline-block;
  font-size: 1.2rem;
  margin-left: 4px;
  line-height: 1;
}
</style>


