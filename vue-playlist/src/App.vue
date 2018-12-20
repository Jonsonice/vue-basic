<!-- 1模板 html结构 -->
<template>
  <div id="app">
		<ul>
			<!-- <li><a href="/">Home</a></li>
			<li><a href="/helloworld">Helloworld</a></li> -->
			
			<!-- a标签会重新加载页面 使用router-link -->
			
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/helloworld">Helloworld</router-link></li>
		</ul>
		<router-view></router-view>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>

export default {
  name: 'app',
  data(){
    return{

    }
  }
}
</script>

<!-- 3.样式：解决样式 -->
<style scoped>

</style>
