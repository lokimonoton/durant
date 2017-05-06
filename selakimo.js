const exec = require('child_process').exec;
  exec('source jikaberhasil', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
  console.log("buat codenvy lagi")
  });