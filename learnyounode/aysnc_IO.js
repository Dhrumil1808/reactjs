var fs = require('fs')


function readcontent(callback)
{
fs.readFile(process.argv[2],function (err,contents)
	{
		if(err)
			return callback(err);
		else
		{
				var lines=contents.toString().split("\n");
				return callback(null,lines.length-1);
		}
	});
}


readcontent(function(err,content)
{
	console.log(content);
})

//console.log(contents.toString().toString());