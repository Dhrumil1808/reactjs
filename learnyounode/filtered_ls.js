var fs = require('fs')


fs.readdir(process.argv[2],function (err,list)
	{
		if(err)
			return callback(err);
		else
		{
				for(var i=0;i<list.length;i++)
				{
					if(list[i].split(".")[1]== process.argv[3])
					{
						console.log(list[i]);
					}
				}
		}
	});



//console.log(contents.toString().toString());