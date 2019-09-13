<template>
  <div>
    <Head/>
    <div class="list">
      <el-table :data="tableData" style="width: 100%;"  :row-class-name="tableRowClassName">
        <!--label 表格范例内容  tableData表格总数据 prop进行数据映射-->
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="body" label="内容"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!--scope.$index当前点击行的下标   scope.row当前行点击的一整条数据-->
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="margin-top: 20px"
                     background
                     layout="prev, pager, next"
                     :page-size="pageSize"
                     :total="total"
                     @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Head from './Head';

  export default {
    name: "List",
    components: {Head},
    data() {
      return {
        message: [],  //总数据
        total: this.total,   //数据有多少条
        pageSize: 5,  //每页显示的数据条数
        currentPage: 1 //显示当前页
      }
    },
    methods: {
      // current-change改变页码值触发该方法
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage = val;
      },
      //handleDelete删除方法
      handleDelete(index,row) {
        console.log(index,row);
        this.message.splice(index, 1);   //删除一条信息
      },

      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 === 1) {
          return 'warning-row';
        } else if (rowIndex%2 === 0) {
          return 'success-row';
        }
        return '';
      }

    },
    computed: {
      tableData() {  //过滤后的数据再存给tableData
        return this.message.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      }
    },
    created() {
      /*this.$axios.get('./../../static/txt.json').then(res => {
        // console.log(res.data);
        this.message = res.data;
        this.total = res.data.length;
      }).catch(() => {
        this.$message({
          showClose: true,
          message: '数据丢失了',
          type: 'error'
        });
      });*/
      //加载相同数据的时候可以使用store去管理公共数据，http请求一次后把所有的公共数据
      //存储在store中，其他页面需要此数据，直接从store中调用即可
      /*this.message=this.$store.state.storeList;  //这边的数据从store中拿到
      this.total = this.$store.state.storeList.length;*/

    //  从本地存储中拿到值
      this.message=JSON.parse(localStorage.getItem('list'));
      this.total=JSON.parse(localStorage.getItem('list')).length;
    },

  }
</script>
<style scoped>
  .list {
    margin: 0 auto;
    width: 1100px;
    height: 600px;
    text-align: center;
  }
  .el-button--danger{
    width: 120px;
    height: 50px;
    font-size: 36px;
    background: lightgreen;
  }
</style>
