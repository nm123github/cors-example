var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/api', function(req, res){
  //check the URL of the current request
  var POSTS = {
    "1": { post: "This is first blog post" },
    "2": { post: "This is second blog post" },
    "3": { post: "This is third blog post" }
  };
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  });
  res.write(JSON.stringify(POSTS));
  res.end();
});


app.listen(80);