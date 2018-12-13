<template>
  <!-- 列表 -->
  <div class="lx-main">
    <div class="movies">
      <ul
        v-for="(item,index) in films"
        :key="index"
        @click="goDetail(item)"
      >
      <!-- 每个元素是一个对象，将对象传到详情页，可以在详情页渲染 -->
        <li class="movieleft"><img
            class="movielogo"
            :src="item.poster"
          ></li>
        <li class="moviemiddle">
          <p class="midea"><span class="moviename">{{item.name}}</span><span class="item">{{item.filmType.name}}</span></p>
          <p class="see">观众评分<span class="grade">{{item.grade}}</span></p>
          <p class="actor">主演：{{actorsList(item.actors)}}</p>
          <p class="times">{{item.nation}} | {{item.runtime}}分钟</p>
        </li>
        <li class="movieright">
          <p class="buy">购票</p>
        </li>
      </ul>
      <div
        class="load-more"
        @click="loadMore"
      >{{ loadMoreText }}</div>
    </div>
  </div>
  <!-- 列表 -->
</template>
<script>
import axios from 'axios';
export default {
  name: 'NowPlay',
  data () {
    return {
      films: [],
      loadMoreText: '点击，加载下一页',
      pageNum: 1, // 当前页码
      pageSize: 10, // 每页条数
      totalPage: 0 // 总页数
    }
  },
  methods: {
    /**
     * 获取影片
     */
    getFilms () {
      // localhost:3000/api/film/list
      axios.get('/api/film/list', {
        params: {
          // get 请求的参数要放在这个里面传递
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then((response) => {
        // PS: res 不单单包含后台给的数据，还有一些个额外的东西。
        // console.log(res);
        let result = response.data;
        console.log(result);
        // 一共多少页
        this.totalPage = Math.ceil(result.data.total / this.pageSize);
        // 判断是否还有更多页
        if (this.pageNum >= this.totalPage) {
          // 没有更多页面
          this.loadMoreText = '别拉啦，没有更多了。';
        }
        if (result.code === 0) {
          // this.films = result.data.films;
          // 追加
          // this.films = this.films.push(...result.data.films);  √
          this.films = this.films.concat(result.data.films);
        } else {
          alert(result.msg);
        }
      })
    },
    /**
     * 排列我们主演列表
     * @param {Array} list 主演列表
     */
    actorsList (list) {
      let arr = [];
      if (list) {
        arr = list.map(item => {
          return item.name;
        });
      }
      return arr.join(' ');
    },
    /**
     * 加载更多
     */
    loadMore () {
      // 对当前页码加1
      if (this.pageNum < this.totalPage) {
        this.pageNum++;
        this.getFilms();
      }
    },
    /**
    * 去详情页面
    * @param {String} id 影片ID
    */
    goDetail (item) {
      this.$router.push({
        // path: '/film/' + id,
        // path: `/film/${id}`,
        name: 'filmDetail',
        params: {
          filmitem: item
        }
      })
    }
  },
  created () {
    this.getFilms();
  }
}
</script>
<style lang="scss">
@import "@/styles/common/px2rem.scss";
.lx-main {
  width: 100%;
  .movies {
    width: 96%;
    margin-left: px2rem(15);
    ul {
      width: 95.83%;
      margin-right: px2rem(15);
      display: flex;
      li {
        color: #797d82;
        height: px2rem(124);
      }
      .movieleft {
        width: px2rem(66);
        height: px2rem(124);
        display: flex;
        img {
          align-self: center;
          width: px2rem(66);
          height: px2rem(91);
        }
      }
      .movieright {
        font-size: px2rem(14);
        display: flex;
        .buy {
          align-self: center;
          width: px2rem(48);
          height: px2rem(23);
          line-height: px2rem(23);
          text-align: center;
          color: #ff5f16;
          border: px2rem(1) solid #ff5f16;
        }
      }
      .moviemiddle {
        width: 64.1%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 0 px2rem(8);
        p {
          height: px2rem(21);
          line-height: px2rem(21);
          align-items: center;
        }
        .midea {
          display: flex;
          justify-content: flex-start;
          .moviename {
            font-size: px2rem(16);
            color: black;
          }
          .item {
            font-size: px2rem(12);
            color: #fff;
            background-color: #d2d6dc;
            margin-left: px2rem(5);
            line-height: px2rem(14);
            height: px2rem(14);
          }
        }
        .see {
          font-size: px2rem(14);
          .grade {
            font-size: px2rem(14);
            color: #ffb232;
          }
        }

        .actor {
          font-size: px2rem(14);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .times {
          font-size: px2rem(14);
        }
      }
    }
  }
}
.load-more {
  height: px2rem(30);
  line-height: px2rem(30);
  text-align: center;
}
</style>
