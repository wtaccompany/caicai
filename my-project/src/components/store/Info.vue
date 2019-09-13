<template>
    <div>
      <div class="info">
        <img src="./../../assets/1.jpg"/>
        <p>用户名：user</p>
        <p>年龄：18</p>
        <p>权限管理：超级管理员</p>
        <p>爱好：编程</p>
      </div>
      <div class="rili">
        <el-calendar v-model="value">
        </el-calendar>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Info",
      data() {
        return {
          value: new Date()
        }
      }
    }
</script>

<style scoped>
.info{
  margin-left: 20px;
  width: 300px;
  height: 400px;
  border: 3px solid #e3e4e5;
  text-align: center;
  float: left;
}
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 10px 0;
  }
  p{
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    border-bottom: 2px solid #ccc;
  }

  .rili{
    width: 900px;
    float: right;

  }
</style>
