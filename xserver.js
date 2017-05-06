const exec = require('child_process').exec;
var argv = require('yargs').argv;
if(argv.username){
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