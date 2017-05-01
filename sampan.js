var postmark=require("./postmark")
var koneksi=require("./koneksi")

// postmark.mendapatkanServer(data=>{
//   if(data.length!=0){
//   postmark.deleteServer(data[0].ID)
// }
// })
// koneksi.cari("codenvy",{},data=>{
//   koneksi.hapus("codenvy",data._id)
// })
var perang=require("./perang")
koneksi.cari("codenvy",{},function(sampai){
var cane=sampai.length+1;
if(sampai.length<1){
  postmark.buatServer("mboh","http://panda-kolotibablo.c9users.io/facebook",function(data){
    perang.buatCodenvy(data.InboundAddress,"lampiskoci"+cane)
  })
}
  })


