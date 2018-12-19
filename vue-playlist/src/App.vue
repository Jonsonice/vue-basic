<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>
  </div>
</template>

<script>
  //局部注册组件
import Users from './components/Users'

export default {
  name: 'App',
  data(){
    return{
      title:"这是我的第一个vue脚手架项目"
    }
  },
  components:{
    // "users":Users
    // "p":Users   与系统标签冲突 不可取
    Users
  }
}
</script>

<style>

</style>
