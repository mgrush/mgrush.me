exports.testCurl	= function(req, res){
	var util		= require(__dirname + "/../../../components/util");

	util.curl("http://127.0.0.1/index.php", {}, function(err, response, body){
		console.log(body);
	});

	util.response(res, { name : "mgrush" });
};

exports.testSha1	= function(){
	var util		= require(__dirname + "/../../../components/util");
	console.log( util.sha1("mgrush") == "dd5eaa897a09360948e1d52213830439e44b4faf" );
}
