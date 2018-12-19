// 余额页
<template>
  <div class="balance-list">
    <header>
      <router-link
        tag="span"
        class="center"
        to="/films/nowPlaying"
      >
        <i class="">home</i>
      </router-link>
      <div class="left">
        余额明细
      </div>
      <span>说明</span>
    </header>
    <!-- 余额 -->
    <div class="balance-count">
      <div class="label">当前余额</div>
      <div class="balance-amount">￥0.00</div>
    </div>
    <!--余额图-->
    <div class="no-record-img">
      <img
        src="../images/balance.png"
        alt="余额"
      >
      <div>暂无余额使用明细</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'balance'
}
</script>
<style lang="scss">
@import "../styles/common/px2rem.scss";
html,
body {
  width: 100%;
  height: 100%;
  .balance-list {
    height: 100%;
    width: 100%;
    display: flex;
    font-size: px2rem(16);
    flex-direction: column;
    header {
      // position: fixed;
      // top: 0;
      // left: 0;
      flex: 1;
      width: 100%;
      height: px2rem(44);
      line-height: px2rem(44);
      margin-bottom: px2rem(10);
      z-index: 3000;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      span{
        display: inline-block;
        width: px2rem(60);
        text-align: center;
      }
    }
    .balance-count {
      width: 100%;
      height: px2rem(140);
      text-align: center;
      // line-height: px2rem(140);
      background-image: url("../images/bg.png");
      font-size: px2rem(20);
      color: #fff;
      padding-top: px2rem(30);
    }
    .no-record-img {
      width: 100%;
      // height: 100%;
      margin-top: 50%;
      text-align: center;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>
