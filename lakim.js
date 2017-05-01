var express = require('express')
var app = express()
//untuk menjadikan json
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var koneksi=require('./koneksi')
app.get('/goal', function (req, res) {
  res.sendFile(__dirname+'/panda.html')
})

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/panda.html')
})
app.get('/codenvy',function(req,res){
  koneksi.cari('codenvy',{},function(data){
    res.send(data)
  })
})
app.get('/ecommerce',function(req,res){
  koneksi.cari('pertanyaanecommerce',{},function(data){
    res.send(data)
  })
})
//webhook mendapatkan notifikasi facebook
var menggunakan=require("./perang")
app.post('/facebook', jsonParser, function (req, res) {
  res.send("berhasil").status(200)
  console.log("berhasil")
  var cheerio = require('cheerio')
  var $ = cheerio.load(req.body.HtmlBody)
  koneksi.cari("codenvy",{},data=>{
    console.log($('a').eq(0).attr('href'))
  menggunakan.masukPertamaCodenvy($('a').eq(0).attr('href'),data[data.length-1].username)  
  })
  

})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT)
})
