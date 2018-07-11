<template>
  <header class="header"><div v-if="getUser">
    <div class="header-image">
      <tw-avatar :image="getUser.photoURL" />
    </div>
    <nav class="nav"><ul>
      <li>
        <nuxt-link to="/">
          <icon-base :width="32" :height="32" :iconColor="'#fff'">
            <icon-home />
          </icon-base>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/favorites/${getUser.uid}`">
          <icon-base :width="26" :height="26" :iconColor="'#fff'">
            <icon-heart :fillin="true" />
          </icon-base>
        </nuxt-link>
      </li>
    </ul></nav>
  </div></header>
</template>

<script>
import { mapGetters } from 'vuex'
import TwAvatar from '~/components/foundations/tw-avatar'
import IconBase from '~/components/icons/icon-base'
import IconHome from '~/components/icons/icon-home'
import IconHeart from '~/components/icons/icon-heart'

export default {
  components: { IconBase, IconHome, IconHeart, TwAvatar },
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>

<style scoped>
.header {
  background-color: #2d333b;
}

.header-image {
  line-height: 1;
  padding: 10px 0;
  text-align: center;
}

.nav li {
  text-align: center;
}

.nav li a {
  padding: 10px 0;
  display: block;
}
</style>
