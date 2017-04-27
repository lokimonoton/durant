var express = require('express')
var app = express()
//untuk menjadikan json
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var argv = require('yargs').argv;
app.get('/goal', function (req, res) {
  res.sendFile(__dirname+'/panda.html')
})

app.get('/', function (req, res) {
  res.send(argv.apa)
})
//webhook mendapatkan notifikasi facebook
app.post('/facebook', jsonParser, function (req, res) {
  res.send("berhasil").status(200)
console.log(req.body.TextBody)
console.log(req.body.HtmlBody)
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT)
})
