const exec = require('child_process').exec;
var argv = require('yargs').argv;
exec('java -jar selenium-server-standalone-2.53.1.jar', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stdout);
});
if(argv.username){
exec('./infinityloop '+argv.username, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
console.log(stdout);
});
exec('./infinityloop2 '+argv.username, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
exec('nodemon lakim.js ', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
console.log(stdout)
});
}