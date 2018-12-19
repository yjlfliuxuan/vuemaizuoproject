<template>
  <div class="bigbox">
    <div v-for="(item ,index) in list" :key="index" class="list">
      <div class="goodspic"><img :src="item.activeBannerUrl"></div>
      <div class="goodsclass">
        <p class="goodsname">{{item.masterTitle}}</p>
        <p class="goodsinfo">{{item.slaveTitle}}</p>
      </div>
      <div class="priceandshop">
        <div class="goodsprice"><span class="red">￥</span><span class="red">{{item.price/100}}</span><span>原价￥{{item.marketPrice/100}}</span></div>
        <div class="goodsrelative">
          <div class="relativehuman">
            <div :class="'pict'+index" v-for="(items,index) in item.userList" :key="index"><img :src="items.icon"></div>
          </div>
          <div class="btn">去拼单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'pintuan',
  data () {
     return {
       list: []
     }
  },
  created () {
    axios.get('/static/api/pintuan.json').then(res => {
      var datalist = res.data;
      this.list = datalist;
    })
  }
}
</script>
<style lang="scss">
@import "../styles/common/px2rem.scss";
html,
body {
  width: 100%;
  height: 100%;
  .bigbox {
    background:#f4f4f4;
    height: 100%;
    .list {
      margin-bottom:px2rem(10);
      background: white;
      .goodspic {
        img {
          width: 100%;
        }
      }
      .goodsclass {
        padding: px2rem(10);
        p {
          line-height: px2rem(24);
          font-size: px2rem(16);
          color: #191a1b;
        }
        .goodsinfo {
          color: #797d82;
          font-size: px2rem(14);
        }
      }
      .priceandshop {
        padding: px2rem(10);
        display: flex;
        .goodsprice {
          width: 60%;
          span{
             font-size: px2rem(12);
             text-decoration: line-through;
             color: #bdc0c5;
          }
          .red{
            color:red;
            font-size: px2rem(20);
            text-decoration:none;
          }
        }
        .goodsrelative {
          width: 40%;
          display: flex;
          justify-content: space-between;
          .relativehuman {
            width: 30%;
            padding: relative;
            div {
               width: px2rem(30);
               height: px2rem(30);
               border-radius:px2rem(30);
               overflow: hidden;
              img {
                width: 100%;
                height:  100%;
              }
            }
            .pict0 {
              position: absolute;
            }
            .pict1{
              margin-left: px2rem(22);
            }
          }
          .btn {
            width: 50%;
            text-align: center;
            line-height:px2rem(33);
            height: px2rem(33);
            background: rgb(192, 49, 49);
            border-radius:px2rem(6) ;
            color: white;
          }
        }
      }
    }
  }
}
</style>
