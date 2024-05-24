var express = require('express')

var app = express()

app.listen(80, function() {
  console.log("start! express server on port 80")
})

app.get('/', function(req,res) {
  res.send("<h1>hi friend!</h1>")
})
