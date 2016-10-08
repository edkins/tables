var http = require('http');

const port = 8080;

function handleRequest( request, response )
{
	response.end( 'Stuff' );
}

var server = http.createServer( handleRequest );

server.listen( port, () => console.log('Server started on port ' + port) );

