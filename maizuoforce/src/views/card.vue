// 选作卡页
<template>
  <div class="card-list">
     <header>
        <router-link tag="span" class="center" to="/films/nowPlaying">
          <i class="">home</i>
        </router-link>
        <div class="left">
         卖座卡
        </div>
        <span></span>
    </header>
    <div class="no-record-img">
      <img src="../images/card.png" alt="">
      <div class="message">你还没有卖座卡哦～</div>
      <button class="newCard"> 激活新卡 </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.card-list {
  height: 100%;
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
  .no-record-img{
      width: 100%;
      // height: 100%;
      margin-top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      img{
        width: px2rem(95);
        height:px2rem(95);
        margin: 0 auto;
      }
      .message{
        text-align: center;
        color: #ddd;
        margin: px2rem(10) 0;
      }
      .newCard{
        border: 1px solid #ff5f16;
        color: #ff5f16;
        border-radius:  px2rem(3px);
        width: px2rem(150);
        height:px2rem(33);
        line-height: px2rem(33);
        text-align: center;
        font-size: px2rem(14);
         margin: 0 auto;
      }
  }
}
</style>
