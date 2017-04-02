const exec = require('child_process').exec;
exec('java -jar selenium-server-standalone-2.45.0.jar', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
exec('node lakim.js', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
