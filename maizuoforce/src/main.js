// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 整个前端项目的入口js文件
import Vue from 'vue'
// 单文件组件（.vue）一个文件就是一个组件 import App from './App.vue'  .vue可以省略n
import App from './App'
// 去除vue开发时的浏览器提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
