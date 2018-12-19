<!-- 1模板 html结构 -->
<template>
  <div id="app">
    <app-header></app-header>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
  //局部注册组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return{
      // title:"这是我的第一个vue脚手架项目"
       users:[
        {name:"Henry", position:'总裁' ,show:false},
        {name:"lili", position:'经理' ,show:true},
        {name:"sanmi", position:'保洁' ,show:false},
        {name:"kuja", position:'人力资源' ,show:true},
        {name:"kaway", position:'安保' ,show:false},
        {name:"wawa", position:'中介' ,show:true},
        {name:"liuuu", position:'医生' ,show:false},
        {name:"miwd", position:'消防员' ,show:true}
      ]
    }
  },
  components:{
    // "p":Users   与系统标签冲突 不可取
    // Users
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<!-- 3.样式：解决样式 -->
<style scoped>
  h1{
    color: purple;
  }
</style>
