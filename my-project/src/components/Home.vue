<template>
  <div class="home">
    <Head/>
    <h1>总览条目 <img src="./../assets/1.jpg" alt=""><span>欢迎{{user}}登录</span></h1>
    <div class="box" v-for="item of list">
      <!--动态传参-->
      <router-link :to="'/single/'+item.id">
        <!--自定义指令-->
        <h3 v-changeStyle:bold>{{item.id}}.{{item.title | upper}}</h3>
      </router-link>
      <article>{{item.body}}</article>
    </div>
    <el-button type="primary" @click="getMore">获取更多</el-button>

  </div>
</template>

<script>
  import Head from './Head';

  export default {
    name: 'Home',
    components: {Head},
    data() {
      return {
        list: [],
        n: 0,
        user:localStorage.getItem('user')
      }
    },
    created() {
     if(this.$store.state.storeMoreList.length===0){
       //请求本地数据，请求后台数据填http://jsonplaceholder.typicode.com/posts
       this.$axios.get('./../../static/txt.json').then(res => {
         // console.log(res.data);
         this.list = res.data.slice(0, 10);
         this.$store.commit('initList', res.data);  //数据下载完成后，使用commit方法把数据存储到store中
         // this.list=this.$store.state.storeList.splice(0,10);
         //不要直接去改store中的数据
         // let storeListArr = this.$store.state.storeList;
         // this.list = storeListArr.splice(0,10);
       }).catch(() => {
         this.$message({
           showClose: true,
           message: '数据丢失了',
           type: 'error'
         });
       });
     }else{
       this.list=this.$store.state.storeMoreList;
       this.n=30;
     }
    },

    methods: {
      getMore() {
        if (this.n < 30) {
          this.$axios.get('./../../static/txt.json').then(res => {
            let data = res.data.slice(5 + this.n, 10 + this.n);
            // console.log(data);
            //因为data也是一个数组，所以进行数组拼接即可，用push也行
            this.list = this.list.concat(data);
            this.$store.commit('storeGetMore',this.list);
            // console.log(this.n)
          }).catch(() => {
            this.$message({
              showClose: true,
              message: '数据丢失了',
              type: 'error'
            });
          });
          this.n += 5;
        } else {
          this.$message({
            showClose: true,
            message: '不好意思哦，数据加载完了~~~',
            type: 'warning'
          });
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    text-align: center;
  }

  h1 {
    height: 100px;
    line-height: 100px;
    background: skyblue;
    color: #fff;
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
    position: relative;
  }

  .box {
    height: 100px;
    text-align: center;
    line-height: 30px;
    background: #EAEAEA;
    border: 1px solid #e3e4e5;
    margin-bottom: 20px;
    border-radius: 50px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
    transition: all 1s;
  }

  .box:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    margin-left: 10px;
  }

  h3 {
    font-size: 24px;
    color: lightblue;
  }

  article {
    font-size: 16px;
    color: #00FF00;
  }
  h1>span{
    display: inline-block;
    margin-left: 160px;
    vertical-align: top;
  }

  h1>img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 25px;
    right: 750px;
  }
</style>
