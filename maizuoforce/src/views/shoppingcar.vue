<template>
  <div class="shopcar">
    <div class="lx-head">
      <router-link
        tag="span"
        class="home"
        :to="{path:'/films/nowPlaying'}"
      >home</router-link>
      <span class="car">购物车</span>
      <span class="home">&nbsp;</span>
    </div>
    <ul>
      <li>海报</li>
      <li>名称</li>
      <li>数量</li>
      <li>操作</li>
    </ul>
    <div class="goodsdetail">
      <table>
        <tr
          v-for="(item,index) in filmsCard"
          :key="index"
        >
          <td><img :src="item.filmposter"></td>
          <td>{{item.filmName}}</td>
          <td>{{item.filmNum}}</td>
          <td>
            <div class="mui-numbox">
              <!-- "-"按钮，点击可减小当前数值 -->
              <button
                class="mui-btn mui-numbox-btn-minus"
                type="button"
                @click.stop="reduceFilmNum(item)"
              >-</button>
              <input
                class="mui-numbox-input"
                type="number"
                disabled
                :value="item.filmNum"
              />
              <!-- "+"按钮，点击可增大当前数值 -->
              <button
                class="mui-btn mui-numbox-btn-plus"
                type="button"
                @click.stop="addFilmNum(item)"
              >+</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { Button } from 'mint-ui';
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'shoppingcar',
  components: {
    "mt-button": Button
  },
  data () {
    return {
      filmlist: []
    }
  },
  computed: {
    ...mapState([
      'filmsCard',
      'filmcardnum'
    ])
  },
  methods: {
    ...mapMutations([
      'addFilmNum',
      'reduceFilmNum'
    ]),
    changeroute () {
      // 编程式导航
      this.$router.replace("/shoppingcar");
    }
  },
  created () {
  }
}
</script>
<style lang="scss">
@import "../styles/common/px2rem.scss";
html,
body {
  width: 100%;
  height: 100%;
  .shopcar {
    width: 100%;
    padding-left: px2rem(5);
    .lx-head {
      position: sticky;
      top: 0;
      background: white;
      height: px2rem(44);
      display: flex;
      color: #000;
      font-weight: 700;
      font-size: px2rem(18);
      justify-content: space-between;
      .home {
        width: 15%;
        height: px2rem(44);
        line-height: px2rem(44);
        text-align: left;
      }
      .car {
        width: 70%;
        height: px2rem(44);
        line-height: px2rem(44);
        text-align: center;
      }
    }
    ul{
      position: sticky;
      top: px2rem(44);
      background: white;
      display: flex;
      justify-content: space-between;
      li{
        flex: 1;
         display: inline-block;
         height: px2rem(44);
         line-height: px2rem(44);
         text-align: center;
      }
    }
    .goodsdetail {
      width: 100%;
      table {
        width: 100%;
        text-align: center;
        tr {
          td {
            width: 25%;
            .mui-numbox {
              width: 100%;
              display: flex;
              justify-content: flex-start;
              .mui-numbox-input {
                width: 43%;
              }
              .mui-btn {
                width: 23%;
              }
            }
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
