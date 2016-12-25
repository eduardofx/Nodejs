var http = require('http');
var handle = require('./handle');




var events = require('events');
var emiter = new events.EventEmitter();

require('console-log-hello-world');

/*
emiter.on('say', say);

function say() {
    console.log('teste');
}
//say();

emiter.emit('say');

*/

/*
var a = require('./name');

//var server = http.createServer(handle);
a.name()
*/
var server = http.createServer(handle.fn);
server.listen(3000, function(){
    console.log('Servidor porta 3000');
});
