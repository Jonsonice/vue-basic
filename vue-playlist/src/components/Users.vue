<template>
  <div class="users">
    <h1>Hello Users</h1>
    <ul>
      <li v-for="user in users" v-on:click="user.show = !user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data(){
    return{
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0; 
}
li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
  cursor: pointer;
}
</style>
