var fs = require('fs');

/*
// Cria arquivo
fs.writeFile('data.txt', "Eduardo Kawassaki",function(err){
    if(err){
        throw err;
    }
});
*/

/*
//ler arquivo
fs.readFile('data.txt', function(err, data){
    if(err){
        throw err;
    }

    console.log(data.toString('utf8'));
});
*/

/*
//lê arquivos
fs.readdir('.',function(err,files){
    if(err){
        throw err;
    }

    for(var file in files){
        console.log(files[file]);
    }
});
*/

//retorna somente arquivos js
fs
    .readdirSync('.')
    .filter(function(file) {
        return (file.endsWith('.js'));
    })
    .forEach(function(file){
        console.log(file);
    })