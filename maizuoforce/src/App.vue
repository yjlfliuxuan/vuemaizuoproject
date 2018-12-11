<template>
  <div id="app">
    <!--首页-->
    <Films></Films>
    <FootNav></FootNav>
  </div>
</template>

<script>
// 引入FootNav组件
import FootNav from "./components/FootNav/index";
// 引入电影页面组件
import Films from "./views/films";
export default {
  name: "App",
  components: {
    FootNav,
    Films
  }
};
</script>

<style lang="scss">
@import "./styles/base.scss";
</style>
