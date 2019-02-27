var mongoose=require("mongoose");
var schema=require("./schema");

mongoose.connect("mongodb://localhost:27017/reviews");

var Post=mongoose.model("Post",schema,"post");

var post=new Post({
    title:"El día despues de mañana",
    author:"John Smith",
    body:"En esta increible hazaña encontraremos a todos nuestros ...",
    comments:[
        {
            body:"Me parecio excelente...",
            date:Date.now()
        }
    ],
    meta:{
        votes:10,
        favs:2
    }
});

post.save(err=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Saved!");
    process.exit(0);
});
