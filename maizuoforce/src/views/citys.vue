<template>
  <div class="main">
    <div class="lx-head">
      <div class="floatmain">
        <div class="iconfont">&#xe61b;</div>
        <span class="maintitle">当前城市 -</span>
        <div></div>
      </div>
      <div class="search">
        <mt-search
          v-model="citysname"
          cancel-text="取消"
          placeholder="输入城市名或拼音"
        >
        </mt-search>
      </div>
    </div>
    <div v-show="searchcityname">
      <div class="rightside">
        <ul>
          <li
            v-for="(item,index) in letters"
            :key="index"
          ><a :href="'#letter'+item">{{item}}</a></li>
        </ul>
      </div>
      <div class="direct">
        <h3>GPS定位你所在城市</h3>
        <div class="gps">
          <router-link
            to="/films/nowPlaying"
            tag="div"
            @click.stop.native="change(curCity)"
            class="gpsdw"
          >{{curCity}}</router-link>
        </div>
      </div>
      <div class="direct1">
        <h3>热门城市</h3>
        <div class="gps1 hotcitys">
          <router-link
            :to="{path:'/films/nowPlaying'}"
            tag="div"
            @click.stop.native="change(item)"
            class="gpsdw1"
            v-for="(item,index) in hotcitys"
            :key="index"
          >{{item}}</router-link>
        </div>
      </div>
      <div
        v-for="(item,index) in citys"
        :key="index"
        class="znletter"
        :id="'letter'+item.word"
      >
        <h3>{{item.word}}</h3>
        <div class="gps1">
          <router-link
            :to="{path:'/films/nowPlaying'}"
            tag="div"
            @click.stop.native="change(items.name)"
            class="gpsdw1"
            v-for="(items,indexs) in item.cityname"
            :key="indexs"
          >{{items.name}}</router-link>
        </div>
      </div>
    </div>
    <div class="ssearch" v-show="!searchcityname">
      <ul>
        <li
          v-for="(item ,index) in filter"
          :key="index"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Search } from "mint-ui";
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  name: 'citys',
  data () {
    return {
      searchcityname: true,
      arr: [],
      citysname: '',
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
      hotcitys: [],
      citys: []
    }
  },
  components: {
    "mt-search": Search
  },
  methods: {
    change (CitysName) {
      // 操作 store 里面的 mutations
      // 得要 提交 mutations
      console.log(CitysName);
      this.$store.commit('chgCurCity', {
        'cityName': CitysName
      })
    }
  },
  computed: {
    ...mapState(
      ["curCity"]
    ),
    filter () {
      /* eslint-disable */
      var cityreg = new RegExp(this.citysname);
      if (this.citysname !== "") {
        this.searchcityname = false;
        var searchcityname = this.arr.filter(item => {
          return cityreg.test(item.name) || cityreg.test(item.pinyin)
        })
        var cityarr=[];
        searchcityname.forEach(item =>{
          cityarr.push(item.name)
        })

      } else {
        this.searchcityname = true;
      }
      return cityarr;
    }
  },
  created () { //创建的时候发送请求，不传参，只需要写请求地址就可以了
    // this.$store.dispatch('getCityName');
    axios.get('/static/api/citysname.json').then(res => {
      // console.log(res.data);
      this.arr = res.data;
      this.arr.forEach(item => {
        if (item.isHot === 1) {
          this.hotcitys.push(item.name);
        }
      });
      for(var i=0;i<this.letters.length;i++){
         /* eslint-disable */
         var firstletterreg=new RegExp("^"+this.letters[i]);
          var temp=this.arr.filter(item=>{
           if(firstletterreg.test(item.pinyin.toUpperCase())){
             return item.name;
          }
        })
        this.citys.push({
            word: this.letters[i],
            cityname: temp
        })
      }
      console.log(this.citys);
    })
  }
}
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";
html,
body {
  width: 100%;
  .main {
    box-sizing: border-box;
    .lx-head {
      position: sticky;
      top: 0;
      .floatmain {
        position: sticky;
        height: px2rem(44);
        line-height: px2rem(44);
        background: white;
        display: flex;
        div {
          width: px2rem(56.25);
          display: inline;
          text-align: center;
        }
        .maintitle {
          text-align: center;
          font-size: px2rem(16);
          flex: 1;
        }
      }
    }
    .ssearch{
      padding: 0 px2rem(10);
    }
    .search {
      width: 100%;
      height: px2rem(49);
      background: #f4f4f4;
      .mint-search {
        height: px2rem(49);
      }
    }
  }
  .rightside {
    position: fixed;
    right: 0;
    top: px2rem(150);
    li {
      line-height: px2rem(12);
      height: px2rem(16);
      a {
        color: black;
        font-size: px2rem(12);
      }
    }
  }
  .direct {
    height: px2rem(74);
    width: 100%;
    h3 {
      font-size: px2rem(14);
      margin: px2rem(15) 0 0 px2rem(20);
      color: #797d82;
    }
    .gps {
      margin-top: px2rem(5);
      display: flex;
      padding: 0 px2rem(20);
      justify-content: flex-start;
      .gpsdw {
        font-size: px2rem(14);
        width: 30%;
        height: px2rem(30);
        text-align: center;
        line-height: px2rem(30);
        background: #f4f4f4;
      }
    }
  }
  .direct1 {
    height: px2rem(74);
    width: 100%;
    h3 {
      font-size: px2rem(14);
      margin: 0 0 0 px2rem(20);
      color: #797d82;
    }
    .gps1 {
      margin-top: px2rem(5);
      display: flex;
      padding: 0 px2rem(20);
      justify-content: flex-start;
      flex-wrap: wrap;
      .gpsdw1 {
        font-size: px2rem(14);
        width: 30%;
        height: px2rem(30);
        text-align: center;
        line-height: px2rem(30);
        background: #f4f4f4;
        margin: px2rem(5) px2rem(11) px2rem(10) 0;
      }
    }
  }
  .znletter {
    width: 100%;
    h3 {
      font-size: px2rem(14);
      margin: px2rem(35) 0 0 px2rem(20);
      color: #797d82;
      background: #f4f4f4;
      height: px2rem(30);
      line-height: px2rem(30);
    }
    .gps1 {
      margin-top: px2rem(5);
      display: flex;
      padding: 0 px2rem(20);
      justify-content: flex-start;
      flex-wrap: wrap;
      .gpsdw1 {
        font-size: px2rem(14);
        width: 30%;
        height: px2rem(30);
        text-align: center;
        line-height: px2rem(30);
        margin: px2rem(5) px2rem(11) px2rem(10) 0;
      }
    }
  }
}
</style>
