//统一输出json格式数据
exports.response	= function(res, data){
	res.writeHead(200, {"Content-Type" : "text/plain; charset=utf8"});
	res.end(JSON.stringify(data));
};

//针对数组进行遍历操作
exports.each = function(arr, func){
	for( var index in arr ) {
		if( func.call(null, index, arr[index]) === false ) { break; }
	}			  
};

//执行curl请求
exports.curl = function(url, params, callback){
	require("request").post({
		url			: url,
		form		: params,
		encoding	: "utf8"
	}, function(err, response, body){
		callback && callback(err, response, body);
	});
};
