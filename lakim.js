var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile('panda.html')
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT)
})