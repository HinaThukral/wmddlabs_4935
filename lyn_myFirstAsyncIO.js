var fs = require("fs");
const myfile = process.argv[2]

fs.readFile(myfile, function (err, data) {
  if (err) {
    return console.log(err)
  }
  
  const lines = data.toString().split('\n').length - 1
  console.log(lines)
})