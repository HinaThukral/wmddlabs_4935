var mymodule = require('./lyn_task6Module.js');
var path = process.argv[2];
var extension = process.argv[3];

let files = mymodule(path, extension, function(err, files){
    
    if (err)
    console.log(err)
    
    for(var i=0;i < files.length; i++)
    console.log(files[i]) 
})
