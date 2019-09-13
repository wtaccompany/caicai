<template>
    <div>
      <div class="error">
        <h1>您的网页未找到  <router-link to="/">返回首页</router-link></h1>
        <img src="./../assets/5.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Error"
    }
</script>

<style scoped>
.error{
  margin: 100px auto;
  text-align: center;
}
  h1{
    font-size: 36px;
    color: lightgreen;
    margin-bottom: 20px;
  }
  a{
    color: deepskyblue;
  }
</style>
