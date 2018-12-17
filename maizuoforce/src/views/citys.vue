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
        <div class="gpsdw">定位失败</div>
      </div>
    </div>
    <div class="direct1">
      <h3>热门城市</h3>
      <div class="gps1 hotcitys">
        <div
          class="gpsdw1"
          v-for="(item,index) in hotcitys"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterA"
    >
      <h3>A</h3>
      <div class="gps1 citysA">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysA"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterB"
    >
      <h3>B</h3>
      <div class="gps1 citysB">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysB"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterC"
    >
      <h3>C</h3>
      <div class="gps1 citysC">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysC"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterD"
    >
      <h3>D</h3>
      <div class="gps1 citysD">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysD"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterE"
    >
      <h3>E</h3>
      <div class="gps1 citysE">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysE"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterF"
    >
      <h3>F</h3>
      <div class="gps1 citysF">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysF"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterG"
    >
      <h3>G</h3>
      <div class="gps1 citysG">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysG"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterH"
    >
      <h3>H</h3>
      <div class="gps1 citysH">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysH"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterI"
    >
      <h3>I</h3>
      <div class="gps1 citysI">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysI"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterJ"
    >
      <h3>J</h3>
      <div class="gps1 citysJ">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysJ"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterK"
    >
      <h3>K</h3>
      <div class="gps1 citysK">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysK"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterL"
    >
      <h3>L</h3>
      <div class="gps1 citysL">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysL"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterM"
    >
      <h3>M</h3>
      <div class="gps1 citysM">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysM"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterN"
    >
      <h3>N</h3>
      <div class="gps1 citysN">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysN"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterO"
    >
      <h3>O</h3>
      <div class="gps1 citysO">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysO"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterP"
    >
      <h3>P</h3>
      <div class="gps1 citysP">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysP"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterQ"
    >
      <h3>Q</h3>
      <div class="gps1 citysQ">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysQ"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterR"
    >
      <h3>R</h3>
      <div class="gps1 citysR">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysR"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterS"
    >
      <h3>S</h3>
      <div class="gps1 citysS">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysS"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterT"
    >
      <h3>T</h3>
      <div class="gps1 citysT">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysT"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterU"
    >
      <h3>U</h3>
      <div class="gps1 citysU">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysU"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterV"
    >
      <h3>V</h3>
      <div class="gps1 citysV">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysV"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterW"
    >
      <h3>W</h3>
      <div class="gps1 citysW">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysW"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterX"
    >
      <h3>X</h3>
      <div class="gps1 citysX">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysX"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterY"
    >
      <h3>Y</h3>
      <div class="gps1 citysY">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysY"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <div
      class="znletter"
      id="letterZ"
    >
      <h3>Z</h3>
      <div class="gps1 citysZ">
        <div
          class="gpsdw1"
          v-for="(item,index) in citysZ"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Search } from "mint-ui";
import axios from 'axios';
export default {
  name: 'citys',
  data () {
    return {
      citysname: '',
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      hotcitys: ["北京", "上海", "广州", "深圳"],
      citysA: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysB: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysC: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysD: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysE: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysF: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysG: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysH: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysI: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysJ: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysK: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysL: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysM: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysN: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysO: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysP: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysQ: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysR: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysS: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysT: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysU: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysV: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysW: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysX: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysY: ["鞍山", "安庆", "安阳", "安顺", "安康"],
      citysZ: ["鞍山", "安庆", "安阳", "安顺", "安康"]
    }
  },
  components: {
    "mt-search": Search
  },
  created () { //创建的时候发送请求，不传参，只需要写请求地址就可以了
    axios.get('/static/api/citysname.json').then(res => {
      console.log(res.data);
      let arr = res.data;
      let obj = {};
      let i = 0;
      let newarr = [];
      arr.forEach(item => { //item为数组中每一个对象
        let hotcity = item.isHot;
        if (obj[hotcity]) {
          newarr[obj[hotcity] - 1].list.push(item);
        } else {
          obj[hotcity] = ++i;
          newarr.push({
            isHot: hotcity,
            list: [item]
          })
        }
      });
      newarr.forEach(item => {
        if (item.isHot === 1) {
          let x = item.list;
          var y = [];
          for (let i = 0; i < x.length; i++) {
            y.push(x[i].name);
          }
            this.hotcitys = y;
        }
      })
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
    height: px2rem(74);
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
