const exec = require('child_process').exec;
var argv = require('yargs').argv;
exec('java -jar selenium-server-standalone-2.45.0.jar', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  exec('./infinityloop '+argv.username, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    exec('./infinityloop2 '+argv.username, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });
  });
  console.log(stdout);
});

exec('nodemon lakim.js ', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
console.log(stdout)
});
