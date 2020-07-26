var app = new Vue({
    el:"#app",
    data:{
        comment: null,
        comments: [],
        errors: null
    },
    methods:{
        onSubmit(){
            if(this.comment){
                let new_comment = this.comment
                this.comments.push(new_comment)
                console.log(this.comments)
                this.comment = null
                
                if(this.errors){
                    this.errors = null
                }
                
           }else{
               this.errors = "The comment should not be empty"
           }
        }
    }
})