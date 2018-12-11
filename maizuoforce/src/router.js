// 路由相关代码
import vue from "vue";
import VueRouter from "vue-router";
// 引入路由组件
import films from "./views/films.vue";
import cinema from "./views/cinema.vue";
import center from "./views/center.vue";
// 插件安装
vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            //电影页面
            path: "/films",
            name: "films",
            component: films
        },
        {
            //影院页面
            path: "/cinema",
            name: "cinema",
            component: cinema
        },
        {
            //个人中心页面
            path: "/center",
            name: "center",
            component: center
        },
        {
            //默认配置
            path: "*",
            redirect: "/films"
        }
    ]
})
export default router;
