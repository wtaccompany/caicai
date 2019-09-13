<template>
  <div class="login">
    <div class="login_inner">
      <h1>用户登录</h1>
      <el-input placeholder="请输入用户名" suffix-icon="el-icon-mobile-phone" v-model="user"></el-input>
      <el-input placeholder="请输入密码" suffix-icon="el-icon-edit" v-model="pass"></el-input>
      <div>
        <el-button type="success" round @click="sub">登 录</el-button>
        <el-button type="warning" round @click="res">重 置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        user: localStorage.getItem('user'),
        pass: localStorage.getItem('pass')
      }
    },
    methods: {
      sub() {
        this.$axios.post('/api', {
          user: this.user,
          pass: this.pass
        }).then(res => {
          if (res.data === 1) {
            // console.log(res.data);
            // alert("登录成功")
            localStorage.setItem('user',this.user);
            localStorage.setItem('pass',this.pass);
            this.$router.push('/');
          } else if (res.data === -1) {
            this.$message({
              showClose: true,
              message: '用户名或密码错误，请重试~~~',
              type: 'error'
            });
          }
        }).catch(() => {
          this.$message({
            showClose: true,
            message: '服务器错误，请稍后重试~~~',
            type: 'error'
          });
        })
      },
      res() {
        this.user = '';
        this.pass = '';
      }
    }
  }
</script>

<style scoped>
  .login_inner {
    width: 500px;
    height: 300px;
    margin: 200px auto;
    border: 3px solid #ccc;
    padding: 20px;
    text-align: center;
    box-shadow: 0px 0px 120px #ddd;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    color: #e3e4e5;
  }

  .el-input {
    margin: 25px 0;
  }
</style>
