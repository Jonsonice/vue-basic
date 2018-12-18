new Vue({
    el: '#vue-app',
    data: {
        name: 'Jon',
        job: 'web开发',
        website:"http://www.jods.vip",
        websiteTag: '<a href="http://www.jods.vip">The JO Website</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name + ' ' + 'is ' + this.job;
        }
    }
});