var express = require('express')
var app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send("bismillah")
})
app.get('/mining', function (req, res) {
  var nheq=require('./nheq')()
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT)
})
