<template>
  <div>
    <header>
      <nav>
        <!--使用router-link-exact-active自带样式，实现tab切换，
        使用router-link-active需要在router-link中写入exact-->
        <!--<router-link exact to="/">首页</router-link>-->
        <router-link exact to="/">首页</router-link>
        <router-link to="/list">列表</router-link>
        <router-link to="/shop">购物</router-link>
        <router-link to="/detail">详情</router-link>
      </nav>
      <div class="reset">
        <img src="./../assets/1.jpg" alt="">
        <router-link to="/login"><span>注销</span></router-link>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style scoped>
  header {
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: #97FFFF;
    margin-bottom: 20px;
  }
nav{
  float: left;
  margin-left: 500px;
}
  a {
    display: inline-block;
    width: 100px;
    background: #fff;
    font-size: 36px;
    margin: 0 5px;
    border-radius: 10%;
    color: #C1C1C1;
  }

  .router-link-exact-active {
    background: #00EEEE;
    color: #fff;
  }
  .reset{
    float: right;
    margin-right: 30px;
  }
  .reset>img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-top: -5px;
  }
  span{
    display: inline-block;
    vertical-align: middle;
  }
</style>
