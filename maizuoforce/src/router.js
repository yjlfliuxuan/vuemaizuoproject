// 路由相关代码
import vue from "vue";
import VueRouter from "vue-router";
// 引入路由组件
import FilmDetail from './views/FilmDetail.vue';
// 插件安装
vue.use(VueRouter);
const router = new VueRouter({
  routes: [{
        path: '/',
        component: () => import('./views/home.vue'), //异步路由
        children: [{
            path: '',
            redirect: '/films/nowPlaying'
          },
          {
            // 首页
            path: 'films',
            // name: 'films',
            component: () => import('./views/films.vue'),
            children: [{
                path: '',
                redirect: '/films/nowPlaying'
              },
              {
                path: 'nowPlaying',
                name: 'nowPlaying',
                component: () => import('./components/NowPlay/index.vue')
              },
              {
                path: 'comingSoon',
                name: 'comingSoon',
                component: () => import('./components/SoonPlay/index.vue')
              }
            ]
          },
          {
            // 影院页
            path: 'cinema',
            name: 'cinema',
            component: () => import('./views/cinema.vue')
          },
          {
            // 个人中心页
            path: 'center',
            name: 'center',
            component: () => import('./views/center.vue')
          }
        ]
      },
    {
      //详情页面
      path: "/film/:filmId",
      name: "filmDetail",
      component: FilmDetail
    },
    {
      //默认配置
      path: "*",
      redirect: '/films/nowPlaying'
    }
  ]
})
export default router;
