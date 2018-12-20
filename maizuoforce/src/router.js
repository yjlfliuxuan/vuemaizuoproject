// 路由相关代码
import vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

// 引入路由组件
// import Films from './views/Films.vue';
// import NowPaly from './components/NowPaly';
// import SoonPlay from './components/SoonPlay';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';
// import FilmDetail from './views/FilmDetail.vue';
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
      component: () => import('./views/FilmDetail.vue'),
      beforeEnter (to, from, next) {
        console.log('我是一个路由独享的钩子函数');
        next();
      }
    },
    {
      //购物车页面
      path: "/shoppingcar",
      name: "shoppingcar",
      component: () => import('./views/shoppingcar.vue'),
      beforeEnter (to, from, next) {
        console.log('进入购物车');
        next();
      }
    },
    {
      // 选择城市页
      path: '/citys',
      name: 'filmcitys',
      component: () => import('./views/citys.vue')
    },
    {
      // 9.9拼团
      path: '/pintuan',
      name: 'pintuan',
      component: () => import('./views/pintuan.vue')
    },
    {
      // 用户
      path: '/user',
      component: {
        template: `
          <div>
            <router-view></router-view>
          </div>
        `
      },
      children: [{
          path: 'card',
          component: () => import(/* webpackChunkName: "card" */ './views/card.vue'),
          beforeEnter (to, from, next) {
            // 用没有登录
            if (localStorage.getItem('userName')) {
              next();
            } else {
              // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
              // localStorage.setItem('myNeedPage', '/user/card');
              // next('/user/login');
              //console.log(to.fullPath);
              next({
                path: '/user/login',
                query: {
                  redirect: to.fullPath
                }
              })
            }
          }
        },
        {
          path: 'balance',
          component: () => import(/* webpackChunkName: "balance" */ './views/balance.vue'),
          beforeEnter (to, from, next) {
            // 用没有登录
            if (localStorage.getItem('userName')) {
              next();
            } else {
              // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
              // localStorage.setItem('myNeedPage', '/user/balance');
              // next('/user/login');
              //console.log(to.fullPath);
              next({
                path: '/user/login',
                query: {
                  redirect: to.fullPath
                }
              })
            }
          }
        },
        {
          path: 'set',
          component: () => import(/* webpackChunkName: "set" */ './views/set.vue'),
          beforeEnter (to, from, next) {
            // 用没有登录
            if (localStorage.getItem('userName')) {
              next();
            } else {
              // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
              // localStorage.setItem('myNeedPage', '/user/set');
              // next('/user/login');
              //console.log(to.fullPath);
              next({
                path: '/user/login',
                query: {
                  redirect: to.fullPath
                }
              })
            }
          }
        },
        {
          path: 'login',
          component: () => import('./views/Login.vue')
        }
      ]
    },
    {
      //默认配置
      path: "*",
      redirect: '/films/nowPlaying'
    }
  ]
})
/**
 * 全局前置守卫
 * @param {Object} to 要去哪里
 * @param {Object} from 从哪里来
 * @param {Function} next 结束当前的钩子函数，进入到下一个相应的钩子函数，如果没有的话，即最终来控制是否可以切换路由
 *  */
router.beforeEach((to, from, next) => {
  NProgress.start();

  // 判断当前要去的路由是不是卖座卡或者余额或者设置  这样在全局里面是没有问题，只是要做判断
  // if (to.name === 'card' || to.name === 'yue' || to.name === 'set') {
  //   // 如果当前用户有登录，就可以去
  //   next();
  //   // 如果没有，就让去登陆页面
  //   next('/user/login')
  // }

  //console.log(to);
  //console.log(from);

  // 请一定记得要做 next
  next();
})

/**
 * 全局后置守卫
 * @param {Object} to 要去哪里
 * @param {Object} from 从哪里来
 */
router.afterEach((to, from) => {
  // 做一些额外处理，比如进度条的效果
  NProgress.done();
})

export default router;
