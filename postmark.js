var axios=require('axios')
//mendaptkan id email
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['X-Postmark-Account-Token'] = '39a15f25-e2ec-4d0d-8c64-c29d9c5f411a';
var dataServer=[]
//mendapatkan server
var mendapatkanServer=function mendapatkanServer(berhasil){
axios.get('https://api.postmarkapp.com/servers?count=50&offset=0', {
  headers:{
      "X-Postmark-Account-Token":"39a15f25-e2ec-4d0d-8c64-c29d9c5f411a"
  }
})
  .then(function (response) {
    response.data.Servers.forEach(function(data){
      dataServer.push({ID:data.ID,
        name:data.Name,
        token:data.ApiTokens,
        address:data.InboundAddress,
        inboundhookurl:data.InboundHookUrl
      });
    })
    berhasil(dataServer)
  })
  .catch(function (error) {
    console.log(error);
  });
}
var editServer=function editServer(token,inbound){
  axios.put("https://api.postmarkapp.com/server",{
    "InboundHookUrl":inbound
  },{
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "X-Postmark-Server-Token":token
    }
  })
  .then((data)=>{
    console.log(data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}
  //untuk membuat server
  var buatServer=function buatServer(nama,inbound,selesai){
  axios.post('https://api.postmarkapp.com/servers', {
      "Name":nama,
      "Color":"Green",
      "InboundHookUrl":inbound
  }
)
  .then(function (response) {
    selesai({ID:response.data.ID,InboundAddress:response.data.InboundAddress})
    })
      .catch(function (error) {
    console.log(error);
  });
  }
  //delete server
  var deleteServer=function(id){
    axios.delete("https://api.postmarkapp.com/servers/"+id,{
      headers:{
        "Accept":"application/json",
      "X-Postmark-Account-Token":"39a15f25-e2ec-4d0d-8c64-c29d9c5f411a"
      }
    })
    .then(function(data){
      console.log(data.data)
    })
    .catch(function(err){
      console.log(err)
    })
  }
  //mendapatkan message
  var mendapatkanMessage=function mendapatkanMessage(token){
    axios.get("https://api.postmarkapp.com/messages/inbound?count=100&offset=10",{
  headers:{
      "X-Postmark-Server-Token":token
  }
})
  .then(function(data){
    console.log(data.data)
  })
  .catch(function(err){
    console.log(err)
  })
  }
  module.exports={
    editServer:editServer,
    buatServer:buatServer,
    mendapatkanServer:mendapatkanServer,
    mendapatkanMessage:mendapatkanMessage,
    deleteServer:deleteServer
  }
