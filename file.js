//fs = file system
var fs = require('fs');


fs.writeFile('data.txt', "Eduardo Kawassaki",function(err){
    if(err){
        throw err;
    }
});