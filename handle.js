var querystring = require('querystring');
function handle(request, response) {
    response.writeHead(200,{
        'Content-Type': 'text/html'
    });

    var body = '';
    request.on('data', function(data){
        body += data.toString();
    });
    
    request.on('end', function(){
        var decode = querystring.parse(body);
        console.log(decode);

    });

    response.write('<!DOCTYPE "html">')
    response.write('<html>');
    response.write('<head><title>NodeJS</title></head>');
    response.write('<body>');
    response.write('<p>Escrevendo em HTML</p>');
    response.write('</body>');
    response.write('</html>');  
    response.end('oi de modulo http');
}

//Para ser chamado no app.js
exports.fn = handle;
//module.exports = handle;