<template>
  <div class="films-list">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../images/lunbo.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../images/lunbo1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../images/lunbo2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../images/lunbo3.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../images/lunbo4.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../images/lunbo5.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../images/lunbo6.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../images/lunbo7.jpg">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "films",
  mounted () {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      delay: 1000,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style lang="scss">
@import "../styles/common/px2rem.scss";
@import "swiper/dist/css/swiper.min.css";
.films-list {
  flex: 1;
}
.swiper-container {
  height: px2rem(210);
}
.swiper-pagination-bullet {
  width: px2rem(10);
  height: px2rem(10);
}
.swiper-pagination.swiper-pagination-bullets{
    bottom: px2rem(10);
    left: 0;
    width: 96%;
}
.swiper-pagination{
  position: absolute;
  text-align: right;
}
</style>
