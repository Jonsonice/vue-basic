new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function(){
            // console.log('你正在输入名字');
			this.name = this.$refs.name.value;
			console.log(this.$refs.name.value);
        },
        logAge: function(){
            console.log('你正在输入年龄');
        }
    }
});