<template>
  <div class="bigbox">
    <div class="lx-head">
      <div class="floatmain">
        <div class="adress">
          <router-link
            :to="{path:'/citys'}"
            tag="span"
          >{{curCity}}</router-link>
          <i class="iconfont">&#xe633;</i>
        </div>
        <span class="maintitle">影院&emsp;&emsp;&emsp;</span>
        <div class="iconfont search">&#xe6c0;</div>
      </div>
      <div class="tabs">
        <ul>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe633;</i>
          </li>
          <li>
            <span>最近去过</span>
            <i class="iconfont">&#xe633;</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="lx-body">
      <ul class="lxul">
        <li class="lxli">
          <div class="lxlilf">
            <p>星美影商城（深圳福体店）</p>
            <p class="shenlue">广东省深圳市福田区福强路3030号福田体育公园负一层 </p>
          </div>
          <div class="lxlirt">
            <p class="lxlirtup"><span>￥</span><span>40</span><span>起</span></p>
            <p>距离未知</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 需要使用辅助函数，得引入
import { mapState } from 'vuex';
// var mapState = vuex.mapState;
export default {
  name: 'cinema',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'curCity'
    ])
  },

  methods: {}
}
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import "@/styles/common/px2rem.scss";
.bigbox {
  display: flex;
  flex-direction: column;
  height: 100%;
  .lx-head {
    position: sticky;
    top: 0;
    flex: 1;
    .floatmain {
      display: flex;
      height: px2rem(44);
      line-height: px2rem(44);
      overflow: hidden;
      .maintitle {
        flex: 7;
        display: inline-block;
        text-align: center;
        font-size: px2rem(17);
      }
      .search {
        flex: 1;
        display: inline-block;
        font-size: px2rem(22);
        text-align: center;
      }
      .adress {
        flex: 2;
        span {
          max-width: px2rem(51);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #191a1b;
          display: inline-block;
          font-size: px2rem(13);
          height: px2rem(16);
          line-height: px2rem(16);
        }
      }
    }
    .tabs {
      ul {
        display: flex;
        li {
          flex: 1;
          text-align: center;
          height: px2rem(44);
          line-height: px2rem(44);
        }
      }
    }
  }
  .lx-body {
    flex: 6;
    .lxul {
      padding: px2rem(15);
      .lxli {
        display: flex;
        .lxlilf {
          width: 80%;
          .shenlue {
            width: 95%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .lxlirt {
          width: 20%;
          .lxlirtup {
            color: #ff5f16;
          }
        }
      }
    }
  }
}
</style>
