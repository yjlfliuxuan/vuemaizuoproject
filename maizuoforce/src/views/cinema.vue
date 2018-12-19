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
        <li
          v-for="(item,index) in list"
          :key="index"
          class="lxli"
        >
          <div class="lxlilf">
            <p class="size">{{item.name}}</p>
            <p class="shenlue">{{item.address}}</p>
          </div>
          <div class="lxlirt">
            <p class="lxlirtup"><span>￥</span><span>{{item.lowPrice/100}}</span><span>起</span></p>
            <p class="juli">{{parseInt(item.Distance*10)+"km"}}</p>
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
import axios from 'axios';
export default {
  name: 'cinema',
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState([
      'curCity'
    ])
  },
  created () {
    axios.get('/static/api/cinema.json').then(res => {
      this.list = res.data;
      //console.log(this.list);
    })
  },
  methods: {}
}
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import "@/styles/common/px2rem.scss";
html,
body {
  height: 100%;
  .bigbox {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    .lx-head {
      position: sticky;
      top: 0;
      flex: 1;
      background: white;
      .iconfont{
        font-size: px2rem(12);
      }
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
          text-align: left;
        }
        .adress {
          flex: 2;
          text-align: center;
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
          font-size: px2rem(14);
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
          margin: px2rem(8) 0 px2rem(20) 0;
          font-size: px2rem(14);
          color: #191a1b;
          .lxlilf {
            width: 80%;
            .shenlue {
              width: 96%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #797d82;
              font-size: px2rem(12);
            }
            .size{
              font-size: px2rem(16);
            }
            p {
              line-height: px2rem(24);
            }
          }
          .lxlirt {
            width: 20%;
            p {
              line-height: px2rem(24);
              text-align: right;
            }
            .lxlirtup {
              color: #ff5f16;
            }
            .juli {
              color: #797d82;
              font-size: px2rem(12);
            }
          }
        }
      }
    }
  }
}
</style>
