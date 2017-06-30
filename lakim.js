var express = require('express')
var app = express()
app.use(express.static('public'))
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send("bismillah")
})
app.get('/mining', function (req, res) {
  var nheq=require('./nheq')()
})
app.post('/webhook',function(req,res){
  res.status(200).end()
  if(req.body){
  console.log(req.body.TextBody)
  // console.log(req.body.HtmlBody)
  }
  
})
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT)
})
