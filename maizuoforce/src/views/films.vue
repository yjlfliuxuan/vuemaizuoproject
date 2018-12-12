<template>
  <div class="films-list">
    <!-- 轮播图 -->
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
    <!-- 轮播图 -->
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
        <li class="active">正在热映</li>
        <li>即将上映</li>
      </ul>
      <div class="line-bar">
        <div class="line"></div>
      </div>
    </div>
    <!-- tab栏 -->
    <!-- 列表 -->
    <div class="lx-main">
      <div class="movies">
        <ul>
          <li class="movieleft"><img
              class="movielogo"
              src="../images/movie.jpg"
            ></li>
          <li class="moviemiddle">
            <p class="midea"><span class="moviename">海王</span><span class="item">3D</span></p>
            <p class="see">观众评分<span class="grade">7.2</span></p>
            <p class="actor">主演：帕特里克·威尔森 妮可·基德曼 杜夫·龙格尔 温子仁 杰森·莫玛 安柏·赫德</p>
            <p class="times">美国 澳大利亚 | 143分钟</p>
          </li>
          <li class="movieright">
            <p class="buy">购票</p>
          </li>
        </ul>
        <ul>
          <li class="movieleft"><img
              class="movielogo"
              src="../images/movie.jpg"
            ></li>
          <li class="moviemiddle">
            <p class="midea"><span class="moviename">海王</span><span class="item">3D</span></p>
            <p class="see">观众评分<span class="grade">7.2</span></p>
            <p class="actor">主演：帕特里克·威尔森 妮可·基德曼 杜夫·龙格尔 温子仁 杰森·莫玛 安柏·赫德</p>
            <p class="times">美国 澳大利亚 | 143分钟</p>
          </li>
          <li class="movieright">
            <p class="buy">购票</p>
          </li>
        </ul>
        <ul>
          <li class="movieleft"><img
              class="movielogo"
              src="../images/movie.jpg"
            ></li>
          <li class="moviemiddle">
            <p class="midea"><span class="moviename">海王</span><span class="item">3D</span></p>
            <p class="see">观众评分<span class="grade">7.2</span></p>
            <p class="actor">主演：帕特里克·威尔森 妮可·基德曼 杜夫·龙格尔 温子仁 杰森·莫玛 安柏·赫德</p>
            <p class="times">美国 澳大利亚 | 143分钟</p>
          </li>
          <li class="movieright">
            <p class="buy">购票</p>
          </li>
        </ul>
        <ul>
          <li class="movieleft"><img
              class="movielogo"
              src="../images/movie.jpg"
            ></li>
          <li class="moviemiddle">
            <p class="midea"><span class="moviename">海王</span><span class="item">3D</span></p>
            <p class="see">观众评分<span class="grade">7.2</span></p>
            <p class="actor">主演：帕特里克·威尔森 妮可·基德曼 杜夫·龙格尔 温子仁 杰森·莫玛 安柏·赫德</p>
            <p class="times">美国 澳大利亚 | 143分钟</p>
          </li>
          <li class="movieright">
            <p class="buy">购票</p>
          </li>
        </ul>
        <ul>
          <li class="movieleft"><img
              class="movielogo"
              src="../images/movie.jpg"
            ></li>
          <li class="moviemiddle">
            <p class="midea"><span class="moviename">海王</span><span class="item">3D</span></p>
            <p class="see">观众评分<span class="grade">7.2</span></p>
            <p class="actor">主演：帕特里克·威尔森 妮可·基德曼 杜夫·龙格尔 温子仁 杰森·莫玛 安柏·赫德</p>
            <p class="times">美国 澳大利亚 | 143分钟</p>
          </li>
          <li class="movieright">
            <p class="buy">购票</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 列表 -->
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "films",
  data () {
    return {
      //当前城市
      curCity: ""
    }
  },
  created () {
    //获取当前城市名称
    /* eslint-disable*/
    let myCity = new BMap.LocalCity();
    myCity.get((result) => {
      this.curCity = result.name;
    });
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
  img {
    width: 100%;
    height: 100%;
  }
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
.swiper-container {
  height: px2rem(210);
}
.swiper-pagination-bullet {
  width: px2rem(10);
  height: px2rem(10);
}
.swiper-pagination.swiper-pagination-bullets {
  bottom: px2rem(10);
  left: 0;
  width: 96%;
}
.swiper-pagination {
  position: absolute;
  text-align: right;
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
    li {
      width: 50%;
      height: px2rem(49);
      line-height: px2rem(49);
      text-align: center;
      font-size: px2rem(14);
    }
    .active {
      color: #ff5f16;
    }
  }
  .line-bar {
    width: 50%;
    .line {
      width: px2rem(56);
      height: px2rem(2);
      background: #ff5f16;
      margin: 0 auto;
    }
  }
}
.lx-main {
  width: 100%;
  .movies {
    width: 96%;
    margin-left: px2rem(15);
    ul {
      width: 95.83%;
      margin-right: px2rem(15);
      display: flex;
      li {
        color: #797d82;
        height: px2rem(124);
      }
      .movieleft {
        width: px2rem(66);
        height: px2rem(124);
        display: flex;
        img {
          align-self: center;
          width: px2rem(66);
          height: px2rem(91);
        }
      }
      .movieright {
        font-size: px2rem(14);
        display: flex;
        .buy {
          align-self: center;
          width: px2rem(48);
          height: px2rem(23);
          line-height: px2rem(23);
          text-align: center;
          color: #ff5f16;
          border: px2rem(1) solid #ff5f16;
        }
      }
      .moviemiddle {
        width: 64.1%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 0 px2rem(8);
        p {
          height: px2rem(21);
          line-height: px2rem(21);
          align-items: center;
        }
        .midea {
          display: flex;
          justify-content: flex-start;
          .moviename {
            font-size: px2rem(16);
            color: black;
          }
          .item {
            font-size: px2rem(12);
            color: #fff;
            background-color: #d2d6dc;
            margin-left: px2rem(5);
            line-height: px2rem(14);
            height: px2rem(14);
          }
        }
        .see {
          font-size: px2rem(14);
          .grade {
            font-size: px2rem(14);
            color: #ffb232;
          }
        }

        .actor {
          font-size: px2rem(14);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .times {
          font-size: px2rem(14);
        }
      }
    }
  }
}
</style>
