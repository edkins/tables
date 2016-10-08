var http = require('http');
var dispatcher = require('httpdispatcher');

const port = 8080;

function handleRequest( request, response )
{
	dispatcher.dispatch( request, response );
}
dispatcher.onGet("/", function(req,res) {
	req.url = "/resources/index.html";
	dispatcher.staticListener(req,res);
});
dispatcher.onGet("/page1", function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Page One');
});	
dispatcher.setStatic( 'resources' );
dispatcher.setStaticDirname( '' );

var server = http.createServer( handleRequest );

server.listen( port, () => console.log('Server started on port ' + port) );

