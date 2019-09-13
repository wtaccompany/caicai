import Vue from 'vue';
import Vuex from 'vuex';  //引入Vuex

Vue.use(Vuex);  //使用Vuex

const store = new Vuex.Store({  //声明store仓库
  state:{    //这里的所有数据都是公有数据
    storeList:[],
    storeMoreList:[]   //储存home页面中的数据，目的防止用户获取更多数据然后跳转页面回来后显示的还是十条数据
  },
  //vue下的 methods
  mutations:{
    initList(state,listData){
      // state.storeList=listData;
      //把公有数据存储到本地，解决列表页面刷新时数据加载不出来
      localStorage.setItem('list',JSON.stringify(listData));  //本地储存只能存储字符串，所以要把对象转换为字符串，list是key值，自己设定
      state.storeList=JSON.parse(localStorage.getItem('list')); //从本地存储中取值，把字符串数据转换为对象
    },
    storeGetMore(state,moreList){
      state.storeMoreList=moreList;
    }
  },
});

export default store;
