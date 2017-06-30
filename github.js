var axios=require('axios')
axios.get('https://api.github.com/user',{
    params:{
        access_token: "13745ac351fcc0598f6a61662f1b1bbfbdf39289"
    }
})
.then(function(data){
    console.log(data.data)
})
.catch(function(err){
    console.log(err)
})