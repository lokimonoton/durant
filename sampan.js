var postmark=require("./postmark")
var koneksi=require("./koneksi")

// postmark.mendapatkanServer()
// postmark.deleteServer("2980389")
koneksi.cari("codenvy",{},function(sampai){
var cane=sampai.length+1;
if(sampai.length<1){
  postmark.buatServer("mboh","http://panda-kolotibablo.c9users.io/facebook",function(data){
    buatCodenvy(data.InboundAddress,"selacioniko"+cane)
  });

}
})
