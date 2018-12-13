<template>
  <div class="films-list">
    <Banner></Banner>
    <!-- 城市定位 -->
    <div class="adress">
      <span>{{curCity}}</span>
      <i class="iconfont">&#xe633;</i>
    </div>
    <!-- 城市定位 -->
    <!-- tab栏 -->
    <div class="tabs">
      <div class="floatmain">
        <div><span>深圳</span><i class="iconfont">&#xe633;</i></div>
        <span class="maintitle">电影</span>
        <div></div>
      </div>
      <ul class="lx-nav">
        <li
          :class="{'z-act': $route.path === '/films/nowPlaying'}"
          @click="switchList('now')"
        >正在热映</li>
        <li
          :class="{'z-act': $route.path === '/films/comingSoon'}"
          @click="switchList('soon')"
        >即将上映</li>
      </ul>
    </div>
    <!-- tab栏 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Swiper from "swiper";
import banner from '../components/Banner/index'
export default {
  name: "films",
  data () {
    return {
      //当前城市
      curCity: ""
    }
  },
  components: {
    'Banner': banner
  },
  methods: {
    //根据百度地图开发平台Api，获取当前城市名称
    getCityName () {
      /* eslint-disable*/
      let myCity = new BMap.LocalCity();
      myCity.get((result) => {
        this.curCity = result.name;
      });
    },
    /**
     * 切换路由
     */
    switchList (type) {
      if (type === 'now') {
        // this.$router.push('/films/nowPlaying');
        this.$router.push({
          name: 'nowPlaying'
        })
      } else {
        this.$router.push('/films/comingSoon');
      }
    }
  },
  mounted () {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      delay: 1000,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },

  created () {
    this.getCityName();
  }
};
</script>
<style lang="scss">
@import "../styles/common/px2rem.scss";
@import "swiper/dist/css/swiper.min.css";
.films-list {
  flex: 1;
  position: relative;
  overflow-y: auto;
  .adress {
    z-index: 10;
    position: absolute;
    left: px2rem(10);
    top: px2rem(20);
    border-radius: px2rem(15);
    color: white;
    background: rgba($color: #000000, $alpha: 0.3);
    width: px2rem(51);
    height: px2rem(30);
    line-height: px2rem(30);
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: px2rem(12);
    }
    .iconfont {
      font-size: px2rem(12);
    }
  }
}
.tabs {
  position: sticky;
  top: 0;
  width: 100%;
  .floatmain {
    height: px2rem(44);
    line-height: px2rem(44);
    display: none;
    overflow: hidden;
    div {
      width: px2rem(56.25);
      display: inline-block;
      font-size: px2rem(13);
      text-align: center;
      float: left;
    }
    .maintitle {
      display: inline-block;
      text-align: center;
      font-size: px2rem(17);
      width: px2rem(232.4);
      float: left;
    }
  }
  .lx-nav {
    width: 100%;
    height: px2rem(49);
    display: flex;
    justify-content: space-between;
    background: white;
    li {
      width: 50%;
      height: px2rem(49);
      line-height: px2rem(49);
      text-align: center;
      font-size: px2rem(14);
      &.z-act {
        color: #ff5f16;
      }
    }
  }
}
</style>
