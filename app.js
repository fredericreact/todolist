const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");



const app = express();

const items = ["buy food", "cook food", "eat food"];
const workItems =[];

// Possible de push items into arrays pour les array declarees en const
// en gros, en javascript, const , tu peu changer ce qu'il y a des les objets ou array
// mais tu peux pas assigner un completely new array ou object

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

const day = date.getDate();



  res.render("list", {
    listTitle: day,
    newListItem: items
  })

});

app.post("/",function(req,res) {


  const item = req.body.newItem;

if(req.body.list === "Work") {
  workItems.push(item);
  res.redirect("/work");
}

else {
  items.push(item)

    res.redirect("/");
}






});

app.get("/work", function (req,res){
  res.render("list", {listTitle: "Work List", newListItem:workItems});
})

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/");
})

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000, function() {
  console.log("listening port 3000");
})
