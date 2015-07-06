//获取Redis对象
exports.getClient	= function(port, hostname, options){
	var port		= port || 6307,
		hostname	= hostname || "127.0.0.1",
		options		= options || {};

	var client		= require("redis").createClient(port, hostname, options);

	client.on("error", function(err){
		console.log("Redis异常：" + err);
	});

	return client;
};
