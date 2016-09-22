var express = require('express');
var app = express();
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from view or scripts
});


app.listen(8080, function () {
  console.log('TEOPD started listening on port 8080');
});
