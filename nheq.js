

module.exports = function() {

var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn('./nheqminer',['-t','4','-l','stratum-zec.antpool.com:8899','-u','spiritbro.panda','-p','x']);
    //spawn('./nheqminer',['-t','1''-l','zec.suprnova.cc:2142','-u','t1SkKSR2rhZt6mtmWZ4BKz2FrhwpSphJkpR','-p','x']);
//spawn('./minho',['-a','scrypt','-o','stratum+tcp://stratum-ltc.antpool.com:8888','-O','spiritbrother.panda:password']);
ls.stdout.on('data', function (data) {
  //io.emit("data",{data:'stdout: ' + data.toString()})
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  //io.emit("data",{data:'stderr: ' + data.toString()})
  console.log("bismillah")
  console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
  //io.emit("data",{data:'child process exited with code ' + code.toString()})
  console.log('child process exited with code ' + code);
});
setInterval(function(){
  console.log('kill');
ls.stdin.pause();
ls.kill();
},2000000)
}


