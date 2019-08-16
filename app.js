var express = require("express");
var app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

navbar =[{link:"link of the book1",title:"book title1"},
{link:"link of the book2",title:"book title2"}];

app.get("/",(req,res)=>{
    res.render("index",{navbar:navbar});
});

app.listen(3000,()=>{
    console.log("server is up");
});