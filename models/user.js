module.exports	= {
	//验证用户登录信息是否合法
	authenticate : function(params, callback){
		var self		= this;
		var isValid		= true;
		var username	= params.username;
		var password	= params.password;
		
		var md5			= require("MD5");
		var util		= require(__dirname + "/../components/util");
		var mysql		= require(__dirname + "/../components/mysql");
		var connection	= mysql.getConnection();

		connection.query("SELECT * FROM `user` WHERE `username` = ?", [ username ], function(err, data, fields){
			util.each([
				[ err, err ],
				[ data.length == 0, "用户名不存在！" ],
				[ data.length != 0 && data[0].password != md5(password), "用户名与密码不匹配！" ]
			], function(index, checkItem){
				return checkItem[0] ? (isValid = false) || callback(checkItem[1]) && false : true;
			});
			
			isValid && callback(null, data[0]);
		});
	}
};
