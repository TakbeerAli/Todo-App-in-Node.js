const express = require("express");
const BodyParser = require("body-parser");
const ejs = require('ejs');
const date = require(__dirname +"/date.js"); // making own module


const  app = express();
app.set('view engine', 'ejs');
 app.use(BodyParser.urlencoded({extended:true}));  
 app.use(express.static("public"));



var items = ["Buy food"," Cook food","Eat food"];  
let workItems = [];  

app.get("/", function(req,res){

    let Day = date.getDate();  // taking date value form own module  or if you want to take Day put   ( date.getDay();  )
res.render("list",{
    listTitle:Day , newItems :items
});

});

app.post("/" ,function(req,res) {   // defined 2 forms in sigle post

    var item = req.body.newItem;  

    if(req.body.list === "Work")  //if req is from work page then save to workitens array
    {
        workItems.push(item);
        res.redirect("/Work");
    }else {    //if req is from home page then save to items array
        items.push(item);
        res.redirect("/");
    }
   
   
    
  
});

app.get("/work", function(req,res){

    res.render("list",{ listTitle:"Work", newItems:workItems });
});



app.listen(process.env.PORT || 3000, function(req,res){    
    console.log("App is running on port 3000");

})




