<template>
  <div>

      <div class="box1">
        <el-carousel :interval="3000" type="card" class="box">
          <el-carousel-item>
            <img :src="oImg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img :src="oImg1" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img :src="oImg2" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img :src="oImg3" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>

    <h1><el-button type="success" plain @click="back">返回</el-button>详情内容</h1>
    <div class="message">
      <h3>{{message.id}}.{{message.title}}</h3>
      <article>{{message.body}}</article>
    </div>
  </div>
</template>

<script>
  import imgSrc from './../assets/1.jpg';
  import imgSrc1 from './../assets/2.jpg';
  import imgSrc2 from './../assets/3.jpg';
  import imgSrc3 from './../assets/4.jpg';
  export default {
    name: "Single",
    data() {
      return {
        oImg:imgSrc,
        oImg1:imgSrc1,
        oImg2:imgSrc2,
        oImg3:imgSrc3,
        message: {},
        id: this.$route.params.id,
      }
    },

    methods:{
      back(){
        this.$router.go(-1);
      }
    },

    //动态传参，获取每页不同数据
    created() {
      this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(res => {
        // console.log(res.data);
        this.message = res.data;
      });
    }

  }
</script>

<style scoped>
  h1 {
    height: 80px;
    background: #fffe25;
    text-align: center;
    line-height: 80px;
    font-size: 36px;
    margin-bottom: 20px;
    color: #41ffcb;
  }

  .message {
    height: 120px;
    text-align: center;
    line-height: 40px;
    background: #EAEAEA;
    border: 1px solid #e3e4e5;
    margin-bottom: 20px;
    border-radius: 50px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
    transition: all 1s;
  }

  .message:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    margin-left: 10px;
  }

  h3 {
    font-size: 28px;
    color: lightblue;
  }

  article {
    font-size: 20px;
    color: #ff30d3;
  }

  img{
    width: 100%;
    height: 300px;
  }
  .el-carousel__item--card.is-in-stage{
    box-shadow: 0 0;
  }
  .box{
    padding: 20px 0;
  }
  .box1{
    width: 1000px;
    margin: 30px auto;
  }
.el-button{
  margin-right: 100px;
  vertical-align: middle;
}
</style>
