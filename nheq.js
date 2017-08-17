function panda(server) {
//./nheqminer -l equihash.eu.nicehash.com:3357 -u 16nwBgDJA8KekHsvt1apLMsyoXpsstV2NH.worker1 -t 0
var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn('./nheqminer',['-l',server,'-u','spiritbro.panda','-p','x']);
  
ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});

}

module.exports = {panda:panda}
