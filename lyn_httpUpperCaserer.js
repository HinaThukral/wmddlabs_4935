let port = process.argv[2];
let http = require('http');
let map = require('through2-map');
http.createServer(function(request, response) {
	if (request.method === 'POST') {
		return response.end('Send post\n');
	}
		request.pipe(map(function(move) {
			return move.toString().toUpperCase();
		})).pipe(response);
	
}).listen(port);