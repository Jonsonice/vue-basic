new Vue({
    el: '#vue-app',
    data: {
        age: 29,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
		stopMoving:function(event){
			event.stopPropagation();
		},
        click: function(){
            alert('you clicked me');
        }
    }
});