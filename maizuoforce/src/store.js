// 0. 引入 Vue
import Vue from 'vue';
// 1. 引入 vuex
import Vuex from 'vuex';
// 2. use
Vue.use(Vuex);

// 3. 实例化 store 对象
const store = new Vuex.Store({
  // 一个仓库中有那写东西
  // 状态： 放置整个项目中所有能够全局共用的状态。
  state: {
    // 当前定位的城市
    curCity: '深圳',

    // 项目名称
    projectName: '卖座网',
     // card ,购物车数据票数
     filmsCard: localStorage.getItem('filmsCard') ? JSON.parse(localStorage.getItem('filmsCard')) : []
  },

  // 对 当前的 state 里面某一个状态 做派生。 类似 计算属性
  getters: {

  },

  // 唯一能够修改 state 状态的东西 。同步操作
  mutations: {
    // setCurCity (state, name) {
    //   state.curCity = name;
    // },
    /**
     * 修改 当前定位的城市
     * @param {Object} state 就是当前 store实例的 state 属性
     * @param {Object} payload 参数 负载 接收页面$store.commit传过来的参数
     */
    chgCurCity (state, payload) {
      state.curCity = payload.cityName;
    },
    /**
  * 添加电影票数，
  * @param {Object} payload 添加的电影票
  *      filmId:   电影ID
  *      filmName: 电影名称
  *      filmPrice: 电影价格
  *      filmNum:   电影票的数量
  */
    addFilmNum (state, payload) {
      let filmId = payload.filmId;

      // 判断当前这个电影是否已经加入了购物车
      let index = -1;
      let isZai = state.filmsCard.some((item, i) => {
        if (item.filmId === filmId) {
          index = i;
          return true;
        }
        return false;
      });

      if (isZai) {
        // 如果存在，就对其加一
        state.filmsCard[index].filmNum++;
      } else {
        // 如果不存在，就push一个进去
        state.filmsCard.push({
          filmId: payload.filmId,
          filmName: payload.name,
          filmPrice: Math.random(10, 20),
          filmNum: 1
        });
      }

      // 最后将数据写入到localstoarge
      localStorage.setItem('filmsCard', JSON.stringify(state.filmsCard));

      // state.filmsCard.push(payload);
    },

    /**
     * 减少电影票数
     * @param {*} state
     * @param {*} payload
     */
    reduceFilmNum (state, payload) {
      let index = -1;
      state.filmsCard.forEach((item, i) => {
        if (item.filmId === payload.filmId) {
          index = i;
        }
      })

      // 判断是否有
      if (index > -1) {
        // 大于才是有
        // state.filmsCard.splice(index, 1);
        let film = state.filmsCard[index];
        if (film.filmNum > 1) {
          // 减一
          film.filmNum--;
        } else {
          // 删除
          state.filmsCard.splice(index, 1);
        }
      }

      // 最后将数据写入到localstoarge
      localStorage.setItem('filmsCard', JSON.stringify(state.filmsCard));
    }

  },

  // 做异步操作的时候，要用到。
  actions: {
    //根据百度地图开发平台Api，获取当前城市名称
    // getCityName (context) { // context 就是this.$store
    //   /* eslint-disable*/
    //   let myCity = new BMap.LocalCity();
    //   myCity.get((result) => {
    //     context.commit('setCurCity', result.name);
    //   });
    // }
  },

  // 对 store 做拆分，拆分成一个一个的小 store
  modules: {

  }
})

// 4. 暴露出 store 实例对象
export default store;
