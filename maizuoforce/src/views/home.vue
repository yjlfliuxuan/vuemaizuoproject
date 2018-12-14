<template>
  <div class="home">

   <!-- 是指切换 子路由， films/  center/ cinemasS -->
    <transition
      mode="out-in"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
      >
      <router-view></router-view>
    </transition>

    <FootNav></FootNav>
  </div>
</template>

<script>
import FootNav from '../components/FootNav';

export default {
  name: 'home',

  components: {
    FootNav
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
