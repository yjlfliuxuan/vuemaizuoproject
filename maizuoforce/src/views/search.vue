<template>
  <div>
    <div class="mint-search">
      <div class="mint-searchbar">
        <div class="mint-searchbar-inner"><i class="mintui mintui-search"></i> <input
            type="search"
            placeholder="输入影城名称"
            class="mint-searchbar-core"
          ></div> <router-link tag="span" :to="{path:'/cinema'}">取消</router-link>
      </div>
      <div
        class="mint-search-list"
        style="display: none;"
      >
        <div class="mint-search-list-warp"></div>
      </div>
    </div>
    <div class="main">
      <h2>离你最近</h2>
      <ul>
        <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Search } from 'mint-ui';
import axios from 'axios';
export default {
  name: "search",
  data () {
    return {
      list: []
    }
  },
  components: {
    "mt-search": Search
  },
  created () {
    axios.get('/static/api/cinema.json').then(res => {
       var arr = res.data;
       this.list = arr.splice(0,5);
    })
  }
}
</script>
<style lang="scss">
@import "@/styles/common/px2rem.scss";
.mint-search{
  height: px2rem(49);
}
.main{
  padding:px2rem(8) ;
  h2{
        color: #bdc0c5;
        font-size:px2rem(14);
        margin-bottom:px2rem(8) ;
  }
  ul{
    display: flex;
    flex-wrap:wrap;
    li{
      display: inline-block;
      background:hsla(0,0%,96%,.6);
      margin-right: px2rem(8);
      line-height: px2rem(30);
      height:px2rem(30) ;
      text-align: center;
      padding:0 px2rem(5) ;
      margin: px2rem(5) 0;
    }
  }
}
</style>
