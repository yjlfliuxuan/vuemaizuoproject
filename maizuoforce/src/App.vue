<template>
  <div id="app">
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
