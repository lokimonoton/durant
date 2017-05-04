const exec = require('child_process').exec;
  exec('./jikaberhasil', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
  console.log("buat codenvy lagi")
  });