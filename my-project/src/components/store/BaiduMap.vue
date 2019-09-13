<template>
<div>
  <baidu-map class="bm-view">
  </baidu-map>
</div>
</template>

<script>
    export default {
        name: "BaiduMap",
      data() {
        return {};
      },
      mounted() {
        const map = new BMap.Map("Map");
        // 创建地图实例
        const point = new BMap.Point(116.404, 39.915);
        // 创建点坐标
        map.centerAndZoom(point, 15);
        // 初始化地图，设置中心点坐标和地图级别
      }
    }
</script>

<style scoped>
  .bm-view {
    width: 50%;
    height: 300px;
  }
</style>
