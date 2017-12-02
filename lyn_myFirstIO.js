var fs = require('fs')
const myfile = process.argv[2]

  
const output =fs.readFileSync(myfile,"utf8");
console.log(output.toString().split('\n').length - 1);
 
