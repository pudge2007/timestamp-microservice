var express = require("express")
var app = express()
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	var pathname = url.parse(req.url , true).pathname.slice(1);
	var result;
	var reg = /^\d{1,13}$/;

	if(pathname === '')
		result = 'Timestamp Microservice'

	else if(pathname.match(reg) != null){
		result = output(parseInt(pathname), timeConverter(pathname));

	}
	
	else
		result = output(null, null);

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(result));

});

server.listen(8080, function () {
  console.log('listening server on port 8080...')
});

function output (unix, natural) {
  return { unixtime : unix, natural: natural }
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date + ', ' + year;
  return time;
}