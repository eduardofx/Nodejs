function handle(request, response) {
    response.writeHead(200,{
        'Content-Type': 'text/html'
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