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

//执行sha1（secure hash）加密
exports.sha1 = function(string){
	return require(__dirname + "/sha1").hex_sha1(string);
};

//串行执行一些的函数方法
exports.series = function(funcList){
	var funcList	= (new Object()).toString.call(funcList) == "[object Array]" ? funcList : [],
		next		= function(err, data){
			if(err) {
				throw err;
			}

			var func	= funcList.shift();
			if(func) {
				func.call(null, next, data);
			}
		};

	next();
}
