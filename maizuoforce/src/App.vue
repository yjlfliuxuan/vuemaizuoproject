<template>
  <div id="app">
    <transition
      mode="out-in"
      appear
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// 引入FootNav组件
import FootNav from "./components/FootNav/index";
export default {
  name: "App",
  components: {
    FootNav
  }
};
</script>

<style lang="scss">
@import "./styles/base.scss";
</style>
