//获取数据库链接
exports.getConnection	= function(){
	var mysql			= require("mysql");
	var connection		= mysql.createConnection({
		host	: "localhost",
		user	: "root",
		password	: "",
		database	: "mgrush",
		port		: 3306
	});

	connection.connect(function(err){
		if(err) {
			return console.log("error connect mysql :" + err.stack);
		}

		return console.log("connect mysql success !");
	});

	return connection;
};
