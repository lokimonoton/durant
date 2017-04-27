var argv=require('yargs').argv
var koneksi=require('./koneksi')
koneksi.cari("percobaan",{},function(data){
  console.log(data)
})
// koneksi.simpan("percobaan",{nama:"kucing"})
// koneksi.update("percobaan","590277647a9b8f1018b5ebe9",{kucing:"lucu"})
var postmark=require('./postmark')
postmark.mendapatkanServer()
postmark.deleteServer('2980393')
