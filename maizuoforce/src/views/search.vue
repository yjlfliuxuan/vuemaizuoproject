<template>
  <div>
    <div class="mint-search">
      <div class="mint-searchbar">
        <div class="mint-searchbar-inner"><i class="mintui mintui-search"></i> <input
            type="search"
            v-model="searchText"
            placeholder="输入影城名称"
            class="mint-searchbar-core"
          ></div>
        <router-link
          tag="span"
          :to="{path:'/cinema'}"
        >取消</router-link>
      </div>
      <div
        class="mint-search-list"
        style="display: none;"
      >
        <div class="mint-search-list-warp"></div>
      </div>
    </div>
    <div
      class="main"
      v-show="maintext"
    >
      <h2>离你最近</h2>
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
        >{{item.name}}</li>
      </ul>
    </div>
    <div
      class="lx-body"
      v-show="!maintext"
    >
      <ul class="lxul">
        <li
          v-for="(item,index) in filter"
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
import { Search } from 'mint-ui';
import axios from 'axios';
export default {
  name: "search",
  data () {
    return {
      arr: [],
      list: [],
      maintext: true,
      searchText: ""
    }
  },
  components: {
    "mt-search": Search
  },
  computed: {
      filter () {
        /* eslint-disable */
      var searchreg = new RegExp(this.searchText);
      console.log(searchreg);
      if (this.searchText !== "") {
        this.maintext = false;
        var searchlist =this.arr.filter(item => {
            return searchreg.test(item.name)
        })
      } else {
        this.maintext=true;
      }
      return searchlist;
    }
  },
  created () {
    axios.get('/static/api/cinema.json').then(res => {
      this.arr = res.data;
      this.list = this.arr.splice(0, 5);
    })
  }
}
</script>
<style lang="scss">
@import "@/styles/common/px2rem.scss";
.mint-search {
  height: px2rem(49);
}
.main {
  padding: px2rem(8);
  h2 {
    color: #bdc0c5;
    font-size: px2rem(14);
    margin-bottom: px2rem(8);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: inline-block;
      background: hsla(0, 0%, 96%, 0.6);
      margin-right: px2rem(8);
      line-height: px2rem(30);
      height: px2rem(30);
      text-align: center;
      padding: 0 px2rem(5);
      margin: px2rem(5) 0;
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
        .size {
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
</style>
