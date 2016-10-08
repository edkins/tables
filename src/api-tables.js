
var tables = {foo:{'some':'thing'}};

function getTables(req,res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	var result = [];
	for (name in tables)
	{
		result.push({name:name});
	}
	res.end( JSON.stringify({tables:result}) );
}

const tableRegex = new RegExp("^\\/table\\/([^/]*)$");

function getTable(req,res) {
	var name = tableRegex.exec( req.url )[1];
	if (!(name in tables))
	{
		res.writeHead(404);
		res.end('No such table ' + name);
		return;
	}

	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end( JSON.stringify(tables[name]) );
}

function install( dispatcher ) {
	dispatcher.onGet("/tables", getTables );
	dispatcher.onGet( tableRegex, getTable );
}

module.exports = install;

