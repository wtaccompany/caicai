// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';   //引入axios
//引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
//引入store公有数据仓库
import store from './store/store';
Vue.prototype.$axios = axios;  //把axios挂载在vue的原型下
Vue.use(ElementUI)//使用ElementUI
//使用VueAwesomeSwiper
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'http://api.map.baidu.com/api?v=3.0&ak=GFnDLWwGwBGXRylQNKFnwWcD4GARmDjl'
})
//注册全局自定义指令，字体加粗
Vue.directive('changeStyle', function (el, binding) {
  // console.log(Math.random().toString(16).slice(2,8));
  el.style.color = '#' + Math.random().toString(16).slice(2, 8);
  // console.log(binding.arg)
  if (binding.arg === 'bold') {
    el.style.fontWeight = 'bold';
  }
});

//注册全局过滤器,标题变大写
Vue.filter('upper', function (val) {
  return val.toUpperCase();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //挂载store
  components: {App},
  template: '<App/>'
})
