const exec = require('child_process').exec;
var panda=process.env;
if(!panda.SUDAH){
  exec('sh jikaberhasil', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    
  console.log(stdout)
panda.SUDAH+=1;

  });
}