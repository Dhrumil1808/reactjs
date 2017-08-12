var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
  	var result=[];
    if (err) {
      return callback(err)
    }
    	for(var i=0;i<list.length;i++)
    	{
    		if(list[i].split('.')[1]==filterStr)
    			result.push(list[i]);
    	}

    callback(null, result);
  })
}