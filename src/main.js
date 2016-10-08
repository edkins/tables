var http = require('http');
var dispatcher = require('httpdispatcher');
var apiTables = require('./api-tables');

const port = 8080;

function handleRequest( request, response )
{
	dispatcher.dispatch( request, response );
}
dispatcher.onGet("/", function(req,res) {
	req.url = "/resources/index.html";
	dispatcher.staticListener(req,res);
});
apiTables( dispatcher );
dispatcher.setStatic( 'resources' );
dispatcher.setStaticDirname( '' );

var server = http.createServer( handleRequest );

server.listen( port, () => console.log('Server started on port ' + port) );

