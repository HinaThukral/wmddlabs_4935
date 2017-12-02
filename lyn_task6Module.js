const fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];
var myArray = new Array();
module.exports = 
    function (path, extension, callback){
    fs.readdir(path, (err, files) => {
      if (err) 
      return callback(err)
      
      for(var i=0;i<files.length;i++){
          var name = files[i].toString().split('.');
          
          if(name[1] == extension)
          myArray.push(files[i]);
          
      }
      
      
      callback(null, myArray)
      return myArray;
    })
    
}