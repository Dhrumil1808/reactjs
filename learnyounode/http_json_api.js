var http = require('http')
var url = require('url')


function parse_time(time)
{
	return{
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unix_time(time)
{
	return {unixtime: time.getTime()}
}

var server = http.createServer(function (req, res) {


	 
	// var address= process.argv[2];

	 var adr=url.parse(req.url,true);

	 var qdata=adr.query;
	 var data =qdata.iso;
	 var date=new Date(data);
	// var data=date.getTime();

	var result;

	 if (/^\/api\/parsetime/.test(req.url)) {
    result = parse_time(date)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unix_time(date)
  }

  if(result)
  {
  	res.writeHead(200, { 'Content-Type': 'application/json' }) ;
  	res.end(JSON.stringify(result));
  }

else
{
	res.writeHead(404);
	res.end();
}

})
server.listen(Number(process.argv[2]));