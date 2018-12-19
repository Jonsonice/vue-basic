<!-- 1模板 html结构 -->
<template>
  <div id="app">
    <app-header></app-header>
    <users></users>
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
      title:"这是我的第一个vue脚手架项目"
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
