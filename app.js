var express = require("express");
var app = express();

app.set("view engine", "html");
app.get("/", function(req, res){
  res.render("index");
})

app.use("/static", express.static(__dirname + "/public"));

app.listen(5000, function(){
  console.log("Listening on port 5000");
})
