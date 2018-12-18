new Vue({
    el: '#vue-app',
    data: {
        name: 'Jon',
        job: 'web'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name + ' ' + 'is ' + this.job;
        }
    }
});