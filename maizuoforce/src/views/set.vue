// 设置页
<template>
  <div class="set-list">
    <header>
      <router-link tag="span" class="center" to="/center">
        <i>《</i>
      </router-link>
      <div class="left">
        设置
      </div>
      <span></span>
   </header>

   <div class="setting-detail">
     <div class="setting-concent">
       <div class="item-box">
          <div class="common">
           <span class="label">账号ID</span>
           <span class="text" style="color: rgb(121, 125, 130);">230057167</span>
           </div>
       </div>
        <div class="item-box">
          <div class="common">
            <span class="label">登录密码</span>
            <span class="text" style="color: rgb(121, 125, 130);">未设置</span>
          </div>
          <div class="common feedback">
            <span class="label">安全密码</span>
            <span class="text" style="color: rgb(121, 125, 130);">未设置</span>
          </div>
        </div>
        <div class="item-box">
          <div class="common">
            <span class="label">软件版本</span>
            <span>》</span>
          </div>
          <div class="common feedback">
            <span class="label">意见反馈</span>
            <span>》</span>
          </div>
        </div>
        <div class="item-box">
          <div class="common">
            <span class="label">清除缓存</span>
            <span class="text">0.1 KB</span>
          </div>
        </div>
        <div class="logout-btn" @click= "loginOut">退出登录</div>
      </div>
   </div>
  </div>
</template>
<script>
export default {
  name: 'set',
  /**
   * 退出登录跳转到的人中心
   */
  methods: {
    loginOut () {
      localStorage.removeItem('userName');
      this.$router.replace('/center');
    }
  }
};
</script>
<style lang="scss">
@import "../styles/common/px2rem.scss";
.set-list {
  height: 100%;
  background-color: #eeeeee;
  display: flex;
  font-size: px2rem(16);
  flex-direction: column;
  header{
    // position: fixed;
    // top: 0;
    // left: 0;
    flex:1;
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    margin-bottom: px2rem(10);
    padding: 0 px2rem(10);
    z-index: 3000;
    background-color: #fff;
    display: flex;
    justify-content: space-between;

  }
  .setting-detail{
    display: flex;
    flex:1;
    justify-content: space-between;
    width: 100%;
    .setting-concent{
      width: 100%;
      .item-box{
        width: 100%;
        // height: px2rem(44);
        background-color: #fff;
        margin-bottom: px2rem(10);
        .common{
          height:px2rem(44);
          line-height:px2rem(44);
          display: flex;
          justify-content: space-between;
          padding: 0 px2rem(10);
        }
      }
    }
    .logout-btn{
      width: 100%;
      height: px2rem(44);
       line-height:px2rem(44);
      background-color: #fff;
      color: orangered;
      text-align: center;
      margin-top: px2rem(50);
    }
  }
}
</style>
