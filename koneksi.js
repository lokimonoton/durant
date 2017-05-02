var url = 'mongodb://panda:1234@ds135800.mlab.com:35800/panda';
var collections = []
var mongojs=require("mongojs")
var pencarian=function(nama,koleksi,fungsi){
var db = mongojs(url,collections);
db.collection(nama).find(koleksi, function(err, users) {
if(typeof(users)!= "undefined" && users.length>0){
  fungsi(users)
  db.close()
}else{
  fungsi([])
db.close()
  
}
})
}


var simpan=function(nama,koleksi){
 var db = mongojs(url,collections);
 db.collection(nama).save(koleksi, function(err, saved) {
  if( err || !saved ){ 
  console.log("User not saved");
  db.close()
  }
  else{ 
  console.log("User saved");
  db.close()
}

 });
}
// simpan("user",{nama:"cebum",user:"panda"})

var updateId=function(nama,kondisi,berubah){
  var db = mongojs(url,collections);
  db.collection(nama).update({_id:db.ObjectId(kondisi)}, {$set: berubah}, {multi: true}, function (data) {
    console.log("saved")
db.close()
})
}
var update=function(nama,kondisi,berubah){
var db = mongojs(url,collections);
  db.collection(nama).update({_id:db.ObjectId(kondisi)}, {$set: berubah}, {multi: true}, function (data) {
    console.log("saved")
db.close()
})
}
var hapus=function(nama,kondisi){
  var db = mongojs(url,collections);
db.collection(nama).remove({_id:db.ObjectId(kondisi)}, {}, function(data,panda){
  if(!data){
    console.log("sukses menghapus")
    db.close()
  }else{
    console.log("error: "+panda)
    db.close()
  }
// pencarian(nama,{},(data)=>{
//   console.log(data)
// })

})
  }
var hapusKoleksi=function(nama){
var db = mongojs(url,collections);
  db.collection(nama).drop(function(data){
    console.log(data)
  db.close()
    
  })
}


var semuaKoleksi=function(panda){
  var db = mongojs(url,collections);
  db.getCollectionNames(function(err, colNames) {
if (err) return console.log(err);
panda(colNames)

});}
module.exports={
  cari:pencarian,
  simpan:simpan,
  updateId:updateId,
  update:update,
  hapus:hapus,
  semuaKoleksi:semuaKoleksi,
  hapusKoleksi:hapusKoleksi
}
