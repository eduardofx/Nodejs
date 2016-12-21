var http = require('http');
var handle = require('./handle');
var a = require('./name');

//var server = http.createServer(handle);
a.name()

var server = http.createServer(handle.fn);
server.listen(3000, function(){
    console.log('Servidor porta 3000');
});