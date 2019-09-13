<template>
  <div>
    <Head />
    <div class="totalbox">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>我的导航</span>
            </template>
            <el-menu-item-group>
              <!--<template slot="title">分组一</template>-->
              <router-link to="/detail/info">
                <el-menu-item index="1-1">个人信息</el-menu-item>
              </router-link>
              <router-link to="/detail/act">
                <el-menu-item index="1-2">代办事理</el-menu-item>
              </router-link>
              <router-link to="/detail/tab">
                <el-menu-item index="1-3">Tab切换</el-menu-item>
              </router-link>
              <router-link to="/detail/charts">
                <el-menu-item index="1-3">eCharts</el-menu-item>
              </router-link>
              <router-link to="/detail/baidu">
                <el-menu-item index="1-4">百度地图</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
<router-view />
  </div>
</template>

<script>
  import Head from './Head';
  import Info from "./store/Info";
  import Act from "./store/Act";
  import Tab from "./store/Tab";
  import Charts from "./store/Charts";
  import BaiduMap from "./store/BaiduMap";

    export default {
        name: "Detail",
      components:{Info, Head,Tab,Act,Charts,BaiduMap},
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .el-col{width:15%;float: left}
</style>
