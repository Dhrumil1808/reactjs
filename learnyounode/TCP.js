
var time=require('strftime');


function tcp()
{
	var d= new Date();

	
	return d.getFullYear() + '-' + ('0'+ (d.getMonth() + 1)).slice(-2) + '-' +  d.getDate() + " " + d.getHours() +":" + d.getMinutes(); 
}

 var net = require('net')  
     var server = net.createServer(function (socket) {  
       // socket handling logic  
       
       socket.end(tcp() + '\n');

     })  
     server.listen(Number(process.argv[2]));


       
