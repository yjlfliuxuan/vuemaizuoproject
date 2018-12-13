<template>
  <div id="app">
    <!--这是一个坑，根据组件的不同，将内容渲染到页面上，因为router管理对象已经配置给new Vue了-->
    <transition
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
      mode="out-in"
      appear
    >
      <router-view></router-view>
    </transition>
    <FootNav></FootNav>
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
