 var http = require('http')  
 var fs=require('fs');
     var server = http.createServer(function (req, res) {  
       // request handling logic...  

       var str=fs.createReadStream(process.argv[3]);

       str.on('open',function()
       {
       	str.pipe(res);
       });
       
        str.on('error', function(err) {
    res.end(err);
  });

     })  
     server.listen(Number(process.argv[2]));  
