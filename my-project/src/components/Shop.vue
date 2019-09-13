<template>
  <div>
    <Head/>
    <template>
      <el-table :data="tableData" style="width: 80%;margin: 0 auto">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="brand" label="品牌" width="180"></el-table-column>
        <el-table-column prop="single" label="型号" width="180"></el-table-column>
        <el-table-column label="图片" width="180">
          <template slot-scope="scope">
            <!--scope.$index当前点击行的下标   scope.row当前行点击的一整条数据-->
            <img :src="scope.row.src"/>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="单价"></el-table-column>
        <el-table-column prop="num" label="数量">
          <template slot-scope="scope">
            <!--scope传过来的是一整个组件-->
            <el-input-number v-model="scope.row.num" @change="handleChange(scope.row)" :min="0"
                             :max="10"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="subtotal" label="小计"></el-table-column>
      </el-table>
    </template>
    <h2>总价：{{totalPrice}}</h2>
  </div>
</template>

<script>
  import Head from './Head';

  export default {
    name: "Shop",
    components: {Head},
    data() {
      return {
        tableData: [],
      }
    },
    methods: {
      handleChange(value) {
        // console.log(value);
        value.subtotal = value.price * value.num;
      }
    },

    computed:{
      totalPrice(){
        return this.tableData.reduce((sum,data)=>{
          return sum+data.subtotal;
        },0);
      }
    },

    created() {
      this.$axios.get('./../../static/shop.json').then(res => {
        // console.log(res.data);
        this.tableData = res.data;
      });
    },
  }
</script>

<style scoped>
  img {
    width: 100px;
    margin-left: -34px;
  }
  h2{
    text-align: right;
    margin: 30px 150px 0 0;
    font-size: 36px;
  }
</style>
