//FootNav组件
<template>
  <div class="lx-foot">
    <ul>
      <li>
        <a href="#" class="footcurrent">
          <p>
            <span class="iconfont sz">&#xe600;</span>
          </p>
          <p>电影</p>
        </a>
      </li>
      <li>
        <a href="#">
          <p>
            <span class="iconfont sz">&#xe67f;</span>
          </p>
          <p>影院</p>
        </a>
      </li>
      <li>
        <a href="#">
          <p>
            <span class="iconfont sz">&#xe601;</span>
          </p>
          <p>9.9拼团</p>
        </a>
      </li>
      <li>
        <a href="#">
          <p>
            <span class="iconfont sz">&#xe62e;</span>
          </p>
          <p>我的</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "FootNav"
};
</script>
<style lang="scss" scoped>
@import "../../styles/common/px2rem.scss";
.lx-foot {
  position: fixed;
  bottom: px2rem(0);
  background: white;
  width: 100%;
  ul {
    width: 100%;
    height: px2rem(49);
    display: flex;
    li {
      flex: 1;
      a {
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
      }
      .footcurrent {
        color: #ff5f16;
      }
    }
  }
}
</style>
