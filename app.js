Vue.component("greeting", {
    template: `
    <p>
    {{name}}:这是组件应用
    <button v-on:click="changeName">改名</button>
    </p>
    `,
    data:function () {
      return{
        name:"神说"
      }
    },
    methods:{
      changeName:function(){
        this.name = "恶魔说"
      }
    }
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});