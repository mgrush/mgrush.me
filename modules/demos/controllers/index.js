exports.testCurl	= function(req, res){
	var util		= require(__dirname + "/../../../components/util");

	util.curl("http://127.0.0.1/index.php", {}, function(err, response, body){
		console.log(body);
	});

	util.response(res, { name : "mgrush" });
};
