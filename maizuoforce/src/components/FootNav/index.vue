//FootNav组件
<template>
  <div class="lx-foot">
    <ul>
      <router-link
        :to="{path:'/films'}"
        tag="li"
        active-class="z-act"
      >
        <p>
          <span class="iconfont sz">&#xe600;</span>
        </p>
        <p>电影</p>
      </router-link>
      <router-link
        :to="{path:'/cinema'}"
        tag="li"
        active-class="z-act"
      >
        <p>
          <span class="iconfont sz">&#xe67f;</span>
        </p>
        <p>影院</p>
      </router-link>
      <router-link
        :to="{path:'/pintuan'}"
        tag="li"
      >
        <p>
          <span class="iconfont sz">&#xe601;</span>
        </p>
        <p>9.9拼团</p>
      </router-link>
      <router-link
        :to="{path:'/center'}"
        tag="li"
        active-class="z-act"
      >
        <p>
          <span class="iconfont sz">&#xe62e;</span>
        </p>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "FootNav"
  // data() {
  //   return {
  //     bars: [
  //       {
  //         id: "films",
  //         name: "电影"
  //       },
  //       {
  //         id: "cinema",
  //         name: "影院"
  //       },
  //       {
  //         id: "ping",
  //         name: "9.9拼团"
  //       },
  //       {
  //         id: "center",
  //         name: "我的"
  //       }
  //     ]
  //   };
  // }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common/px2rem.scss";
.lx-foot {
  flex-shrink: 0;
  background: white;
  width: 100%;
  ul {
    width: 100%;
    height: px2rem(49);
    display: flex;
    li {
      flex: 1;
      text-align: center;
      line-height: px2rem(39);
      height: px2rem(39);
      display: block;
      color: #797d82;
      padding-top: px2rem(10);
      text-decoration: none;
      p {
        line-height: px2rem(14);
        font-size: px2rem(12);
        .sz {
          font-size: px2rem(20);
        }
      }
      &.z-act {
        color: #ff5f16;
      }
    }
  }
}
</style>
