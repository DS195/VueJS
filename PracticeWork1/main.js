var app = new Vue({
    el: "#app",
    data:{
        lesson: "Events and Methods",
        counter: 0
    },
    methods:{
        incrementCounter(){
            this.counter += 1;
            console.log(this.counter);
            if (this.counter === 10){
                alert(this.counter)
            }
        },
        decrementCounter(){
            this.counter -= 1;
            console.log(this.counter);
        },
        overTheBox(){
            console.log("Over The Green Box");
        }
    }
})

var app2 = new Vue({
    el: "#app2",
    data:{
        name:"shyam Desai",
        profile:"Vue developer"
    }
    


})