module.exports		= {
	//登录页面
	login		: function(req, res){
		res.render("user/login", {});			  
	},

	//验证用的登录是否合法
	checkLogin	: function(req, res){
		var username	= req.body.username,
			password	= req.body.password;

		var util		= require(__dirname + "/../components/util"),
			user		= require(__dirname + "/../models/user");

		user.authenticate({ username : username, password : password }, function(errmsg, data){
			if(errmsg) {
				util.response(res, { status : 1, msg : errmsg });
			}else {
				req.session.user	= data;
				util.response(res, { status : 0, data : data });
			}
		});
	},

	//退出登录
	logout		: function(req, res) {
		req.session.user	= null;
	}
};
