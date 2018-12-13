<template>
  <!-- 轮播图 -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../images/lunbo.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../images/lunbo1.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../images/lunbo2.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../images/lunbo3.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../images/lunbo4.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../images/lunbo5.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../images/lunbo6.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../images/lunbo7.jpg">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
  <!-- 轮播图 -->
</template>

<script>
export default {
  name: 'Banner'
};
</script>

<style lang="scss">
@import "../../styles/common/px2rem.scss";
@import "swiper/dist/css/swiper.min.css";
@import "./index.scss";
</style>
