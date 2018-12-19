<template>
  <div class="box">
    <div class="boxup">
      <div class="film-detail">
        <div class="film-poster">
          <img
            :src="filmitem.poster"
            alt=""
          >
        </div>

        <div class="film-details">
          <div class="col">
            <div class="film-name">
              <span class="name">{{ filmitem.name }}</span>
              <span class="item">{{filmitem.filmType.name}}</span>
            </div>
            <div class="film-grade">
              <span class="grade">{{filmitem.grade}}</span>
              <span class="grade-text">分</span>
            </div>
          </div>

          <div class="film-category grey-text">{{filmitem.category}}</div>
          <div class="film-premiere-time grey-text">
            {{datariqi}}上映
          </div>
          <div class="film-nation-runtime grey-text">
            {{filmitem.nation}} | {{filmitem.runtime}}分钟
          </div>
          <div class="film-synopsis grey-text">
            {{filmitem.synopsis}}
          </div>
          <div class="toggle">
            <i class="iconfont icon-xiala"></i>
          </div>
        </div>
        <div class="shopping">
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger">加入购物车</mt-button>
          <div class="mui-numbox">
            <!-- "-"按钮，点击可减小当前数值 -->
            <button
              class="mui-btn mui-numbox-btn-minus"
              type="button"
            >-</button>
            <input
              class="mui-numbox-input"
              type="number"
            />
            <!-- "+"按钮，点击可增大当前数值 -->
            <button
              class="mui-btn mui-numbox-btn-plus"
              type="button"
            >+</button>
          </div>
        </div>
        <div class="actor">
          <h2>演职人员</h2>
          <div>
            <ul>
              <li
                v-for="(item,index) in filmitem.actors"
                :key="index"
              ><img
                  :src="item.avatarAddress"
                  class="pic"
                >
                <p>{{item.name}}</p>
                <p>{{item.role}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="boxdown">选座购票</div>
  </div>
</template>
<script>
import { Button } from 'mint-ui';
export default {
  name: 'FilmDetail',

  data () {
    return {
      filmitem: {},
      datariqi: ""
    }
  },
  components: {
    "mt-button": Button
  },
  watch: {
    // $route (newVal, oldVal) {
    //   // $route 发生变化，我就请求后台数据
    //   this.getFilmDetail();
    // }
  },

  methods: {
    getFilmDetail () {
      console.log(this.$route.params.filmitem);
      this.filmitem = this.$route.params.filmitem;
    },
    GetDates () {
      var riqi = new Date(this.$route.params.filmitem.premiereAt * 1000);
      if (Number(riqi.getDate()) >= 10 && Number(riqi.getMonth()) >= 9) {
        this.datariqi = riqi.getFullYear() + "-" + (riqi.getMonth() + 1) + "-" + riqi.getDate();
      } else {
        if (Number(riqi.getMonth()) < 9) {
          this.datariqi = riqi.getFullYear() + "-0" + (riqi.getMonth() + 1) + "-" + riqi.getDate();
        }
        if (Number(riqi.getDate()) < 10) {
          this.datariqi = riqi.getFullYear() + "-" + (riqi.getMonth() + 1) + "-0" + riqi.getDate();
        }
        if (Number(riqi.getDate()) < 10 && Number(riqi.getMonth()) < 9) {
          this.datariqi = riqi.getFullYear() + "-0" + (riqi.getMonth() + 1) + "-0" + riqi.getDate();
        }
      }
    }
  },
  created () {
    // let filmId = this.$route.params.filmId;
    this.getFilmDetail();
    this.GetDates();
  },

  beforeRouteEnter (to, from, next) {
    console.log('进入到详情');
    next();
  },

  beforeRouteUpdate (to, from, next) {
    console.log('详情页组件路由有更新的情况, 会进来');
    // 上面 watch $route 的代码可以在这里写
    this.getFilmDetail();
    next();
  },

  beforeRouteLeave (to, from, next) {
    console.log('详情页离开之前，会调用');
    next();
  }
}
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: gray;
  .boxup {
    flex: 1;
    overflow-y: auto;
    .film-detail {
      flex: 1;
      .film-poster {
        height: px2rem(210);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .film-details {
        padding: px2rem(15);
        padding-top: px2rem(12);
        background-color: #fff;
        .col {
          display: flex;
          align-items: center;
        }

        .film-name {
          flex: 1;
          display: flex;
          align-items: center;

          .name {
            color: #191a1b;
            font-size: px2rem(18);
            height: px2rem(24);
            line-height: px2rem(24);
            margin-right: px2rem(8);
          }

          .item {
            font-size: px2rem(12);
            color: #fff;
            background-color: #d2d6dc;
            height: px2rem(14);
            line-height: px2rem(14);
            padding: 0 px2rem(2);
            border-radius: px2rem(2);
            display: inline-block;
          }
        }

        .film-grade {
          flex-shrink: 0;
          width: px2rem(100);
          text-align: right;
          color: #ffb232;
          font-size: px2rem(12);

          .grade {
            font-size: px2rem(18);
            font-style: italic;
          }
        }

        .grey-text {
          font-size: px2rem(13);
          line-height: px2rem(20);
          color: #797d82;
          margin-top: px2rem(4);
        }

        .film-synopsis {
          margin-top: px2rem(8);
          overflow: hidden;
          &.hide {
            height: px2rem(40);
          }
        }

        .toggle {
          text-align: center;
          &.hide {
            i {
              transform: translate(180deg);
            }
          }
        }
      }
      .shopping {
        background: white;
        margin-top: px2rem(5);
        display: flex;
        .mint-button{
          height:px2rem(49);
          flex: 3.5;
        }
        .mui-numbox{
          display: flex;
           flex: 5;
          .mui-numbox-input{
            flex: 3;
            width: px2rem(66);
          }
          .mui-btn{
            flex: 1;
            height: px2rem(49);
          }
        }
      }
      .actor {
        margin-top: px2rem(5);
        width: 100%;
        height: px2rem(192);
        background: white;
        h2 {
          margin: 0 px2rem(10) px2rem(10) px2rem(10);
          padding-top: px2rem(10);
        }
        ul {
          display: flex;
          overflow-x: auto;
          width: 100%;
          flex-direction: nowrap;
          li {
            flex: 1;
            height: px2rem(149);
            margin-left: px2rem(10);
            .pic {
              width: px2rem(85);
              height: px2rem(85);
            }
          }
        }
      }
    }
  }
  .boxdown {
    flex-shrink: 0;
    height: px2rem(49);
    width: 100%;
    text-align: center;
    line-height: px2rem(49);
    background: #ff5f16;
    color: white;
  }
}
</style>
