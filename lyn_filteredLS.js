const fs = require('fs');
var path = process.argv[2];
let data = fs.readdir(path, (err, items) => {
  if (err) 
  console.log(err)
  for(var i=0;i<items.length;i++){
      var file = items[i].toString().split('.');
      
      if(file[1] == process.argv[3])
      console.log(items[i]);
  }
})