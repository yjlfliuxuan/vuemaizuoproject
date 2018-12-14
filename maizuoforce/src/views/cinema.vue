<template>
  <div class="cinemas-list">
    <h1>我是影院页面</h1>

    <h2>我当前的定位城市是：{{ curCity }}</h2>

    <h2>{{ projectName }}</h2>

    <h2>{{ cinemaCity }}</h2>

    <button @click="change">修改 store 里面的 curCity</button>
  </div>
</template>

<script>
// 需要使用辅助函数，得引入
import { mapState } from 'vuex';
// var mapState = vuex.mapState;

export default {
  name: 'cinema',

  data () {
    return {
      cinemaName: '深圳-凤凰传奇'
    }
  },

  // computed: {
  //   curCity () {
  //     return this.$store.state.curCity;
  //   },

  //   projectName () {
  //     return this.$store.state.projectName;
  //   },

  //   cinemaCity () {
  //     return this.cinemaName.split('-')[0];
  //   }
  // },

  // computed: mapState([
  //   'curCity',
  //   'projectName'
  // ]),

  // computed: mapState({
  //   // myCity: 'curCity',
  //   // myName: 'projectName'
  //   myCity: (state) => {
  //     return state.curCity
  //   },

  //   myName: (state) => {
  //     return state.projectName + '哈哈哈哈';
  //   }
  // }),

  computed: {
    ...mapState([
      'curCity',
      'projectName'
    ]),

    cinemaCity () {
      return this.cinemaName.split('-')[0]
    }
  },

  methods: {
    change () {
      // 操作 store 里面的 mutations
      // 得要 提交 mutations
      this.$store.commit('chgCurCity', {
        'cityName': '深圳市',
        'quName': '宝安区'
      })
    }
  }
}
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import '@/styles/common/px2rem.scss';

.cinemas-list {
  flex: 1;
}
</style>
