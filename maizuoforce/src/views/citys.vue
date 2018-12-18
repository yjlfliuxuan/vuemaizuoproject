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
        <router-link to="/films/nowPlaying" tag="div" @click.stop.native="change(curCity)" class="gpsdw" >{{curCity}}</router-link>
      </div>
    </div>
    <div class="direct1">
      <h3>热门城市</h3>
      <div class="gps1 hotcitys">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in hotcitys"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterA"
    >
      <h3>A</h3>
      <div class="gps1 citysA">
        <router-link  :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysA"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterB"
    >
      <h3>B</h3>
      <div class="gps1 citysB">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysB"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterC"
    >
      <h3>C</h3>
      <div class="gps1 citysC">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysC"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterD"
    >
      <h3>D</h3>
      <div class="gps1 citysD">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysD"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterE"
    >
      <h3>E</h3>
      <div class="gps1 citysE">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysE"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterF"
    >
      <h3>F</h3>
      <div class="gps1 citysF">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysF"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterG"
    >
      <h3>G</h3>
      <div class="gps1 citysG">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysG"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterH"
    >
      <h3>H</h3>
      <div class="gps1 citysH">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysH"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterI"
    >
      <h3>I</h3>
      <div class="gps1 citysI">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysI"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterJ"
    >
      <h3>J</h3>
      <div class="gps1 citysJ">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysJ"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterK"
    >
      <h3>K</h3>
      <div class="gps1 citysK">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysK"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterL"
    >
      <h3>L</h3>
      <div class="gps1 citysL">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysL"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterM"
    >
      <h3>M</h3>
      <div class="gps1 citysM">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysM"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterN"
    >
      <h3>N</h3>
      <div class="gps1 citysN">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysN"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterP"
    >
      <h3>P</h3>
      <div class="gps1 citysP">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysP"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterQ"
    >
      <h3>Q</h3>
      <div class="gps1 citysQ">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysQ"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterR"
    >
      <h3>R</h3>
      <div class="gps1 citysR">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysR"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterS"
    >
      <h3>S</h3>
      <div class="gps1 citysS">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysS"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterT"
    >
      <h3>T</h3>
      <div class="gps1 citysT">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysT"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterW"
    >
      <h3>W</h3>
      <div class="gps1 citysW">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysW"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterX"
    >
      <h3>X</h3>
      <div class="gps1 citysX">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysX"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterY"
    >
      <h3>Y</h3>
      <div class="gps1 citysY">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysY"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
    <div
      class="znletter"
      id="letterZ"
    >
      <h3>Z</h3>
      <div class="gps1 citysZ">
        <router-link :to="{path:'/films/nowPlaying'}" tag="div" @click.stop.native="change(item)"
          class="gpsdw1"
          v-for="(item,index) in citysZ"
          :key="index"
        >{{item}}</router-link>
      </div>
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
      citysname: '',
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
      hotcitys: [],
      citysA: [],
      citysB: [],
      citysC: [],
      citysD: [],
      citysE: [],
      citysF: [],
      citysG: [],
      citysH: [],
      citysI: [],
      citysJ: [],
      citysK: [],
      citysL: [],
      citysM: [],
      citysN: [],
      citysP: [],
      citysQ: [],
      citysR: [],
      citysS: [],
      citysT: [],
      citysW: [],
      citysX: [],
      citysY: [],
      citysZ: []
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
    )
  },
  created () { //创建的时候发送请求，不传参，只需要写请求地址就可以了
    // this.$store.dispatch('getCityName');
    axios.get('/static/api/citysname.json').then(res => {
      // console.log(res.data);
      let arr = res.data;
      arr.forEach(item => {
        if (item.isHot === 1) {
          this.hotcitys.push(item.name);
        }
        var firstletter = item.pinyin.charAt(0).toUpperCase();
        switch (firstletter) {
          case "A":
            this.citysA.push(item.name);
            break;
          case "B":
            this.citysB.push(item.name);
            break;
          case "C":
            this.citysC.push(item.name);
            break;
          case "D":
            this.citysD.push(item.name);
            break;
          case "E":
            this.citysE.push(item.name);
            break;
          case "F":
            this.citysF.push(item.name);
            break;
          case "G":
            this.citysG.push(item.name);
            break;
          case "H":
            this.citysH.push(item.name);
            break;
          case "I":
            this.citysI.push(item.name);
            break;
          case "J":
            this.citysJ.push(item.name);
            break;
          case "K":
            this.citysK.push(item.name);
            break;
          case "L":
            this.citysL.push(item.name);
            break;
          case "M":
            this.citysM.push(item.name);
            break;
          case "N":
            this.citysN.push(item.name);
            break;
          case "P":
            this.citysP.push(item.name);
            break;
          case "Q":
            this.citysQ.push(item.name);
            break;
          case "R":
            this.citysR.push(item.name);
            break;
          case "S":
            this.citysS.push(item.name);
            break;
          case "T":
            this.citysT.push(item.name);
            break;
          case "W":
            this.citysW.push(item.name);
            break;
          case "X":
            this.citysX.push(item.name);
            break;
          case "Y":
            this.citysY.push(item.name);
            break;
          case "Z":
            this.citysZ.push(item.name);
            break;
          default:
            break;
        }
      });
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
    .search {
      width: 100%;
      height: px2rem(49);
      background: #f4f4f4;
      .mint-search {
        height:px2rem(49);
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
