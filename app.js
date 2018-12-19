var one = new Vue({
    el: '#vue-app-one',
    data: {
      title: 'Vue App One'
    },
    computed: {
      greet: function(){
        return 'Hello App One';
      }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
      title: 'Vue App Two'
    },
    computed: {
      greet: function(){
        return 'Hello App Two';
      }
    },
    methods: {
      changeTitle: function(){
        one.title = 'two 改变 one';
      }
    }
});

two.title = 'Changed from two';