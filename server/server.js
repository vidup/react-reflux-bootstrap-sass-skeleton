//Dependencies
var express = require('express');
var app = express();

//Setup
var PORT = process.env.PORT || 3000;

//MiddleWares

//Routes
app.get('/', function(req, res){
  res.json({
    content : "You hit the base route. If you can read this, then the Express Server is working as intended."
  });
});
//Server start
app.listen(PORT, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Express server listening on port '+PORT);
  }
});
