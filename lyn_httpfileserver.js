let http = require('http');
let fs = require('fs');
let portNumber = process.argv[2];
let file = process.argv[3];

let server = http.createServer(function callback(request, response) {
	response.writeHead(200, {
		'content-type': 'text/plain'
	});
	fs.createReadStream(file).pipe(response);
});
server.listen(portNumber);