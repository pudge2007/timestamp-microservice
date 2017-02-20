var express = require("express");
var app = express();
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	var pathname = url.parse(req.url , true).pathname.slice(1);
	var result;
	var regUnix = /^\d{1,13}$/;
	var regNatural = /^[a-zA-Z]{3,}%\d{1,2},?%\d{4,}$/;

	if(pathname === '')
		result = 'Timestamp Microservice';

	else if(pathname.match(regUnix) != null)
		result = output(parseInt(pathname), timeConverter(pathname));
		
	else if(pathname.match(regNatural) != null){
		var data = pathname.split('%');
		var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		var regex = new RegExp(data[0], "i");
		var month = months.filter(function(item){
			return item.search(regex) != -1;
		});
		var date = month + ' ' + data[1].replace(',', '') + ', ' + data[2];
		var ms = Math.round(new Date(date).getTime()/1000.0)
		result = output(parseInt(ms), date);
	}
	
	else
		result = output(null, null);

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(result));

});

	server.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
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