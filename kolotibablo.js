var koneksi=require('./koneksi')
// koneksi.simpan("berapa",{jumlah:0})
koneksi.cari("codenvy",{},data=>{
    
  koneksi.hapus("codenvy",data[data.length-1]._id)
console.log(data)
    
})