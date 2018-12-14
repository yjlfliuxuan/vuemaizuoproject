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
    curCity: '岳阳市',

    // 项目名称
    projectName: '卖座网'
  },

  // 对 当前的 state 里面某一个状态 做派生。 类似 计算属性
  getters: {

  },

  // 唯一能够修改 state 状态的东西 。同步操作
  mutations: {
    /**
     * 修改 当前定位的城市
     * @param {Object} state 就是当前 store实例的 state 属性
     * @param {Object} payload 参数 负载
     */
    chgCurCity (state, payload) {
      state.curCity = payload.cityName;
    }
  },

  // 做异步操作的时候，要用到。
  actions: {

  },

  // 对 store 做拆分，拆分成一个一个的小 store
  modules: {

  }
})

// 4. 暴露出 store 实例对象
export default store;
