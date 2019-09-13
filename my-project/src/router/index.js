import Vue from 'vue'
import Router from 'vue-router'

//原始路由引入方式
// import Home from '@/components/Home'
// import List from '@/components/List'
// import Shop from '@/components/Shop'
// import Detail from '@/components/Detail'

//路由懒加载
const Home = () => import('@/components/Home');
const List = () => import('@/components/List');
const Shop = () => import('@/components/Shop');
const Detail = () => import('@/components/Detail');
const Single = () => import('@/components/Single');
const Login = () => import('@/components/Login');
const Info = () => import('@/components/store/Info');
const Act = () => import('@/components/store/Act');
const Tab = () => import('@/components/store/Tab');
const Charts = () => import('@/components/store/Charts');
const BaiduMap = () => import('@/components/store/BaiduMap');
const Error = () => import('@/components/Error');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      //路由独享的守卫，此时home页面是无法查看的
      beforeEnter: (to, from, next) => {
        if(localStorage.getItem('user')){
          next();
        }else{
          next('/login');
        }
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta:{
        keepAlive:true     //保持状态，保持状态会自动保持，消耗性能
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children:[
        {path:'/detail',component:Info},
        {path:'info',component:Info},
        {path:'act',component:Act},
        {path:'tab',component:Tab},
        {path:'charts',component:Charts},
        {path:'baidu',component:BaiduMap},
      ]
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      component: Error
    },
  ]
})
