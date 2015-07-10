/** 用户登录中心 **/
exports.index	= function(req, res){
	res.render(__dirname + "/../views/index");
};

/** 修改密码 **/
exports.changePwd	= function(req, res){
	res.render(__dirname + "/../views/change-pwd");
};

/** 设置密码 **/
exports.setPwd		= function(req, res){
	res.render(__dirname + "/../views/set-pwd");
};

/** 输入登陆密码 **/
exports.confirmPwd	= function(req, res){
	res.render(__dirname + "/../views/confirm-pwd");
}

/** 设置账号 **/
exports.setAccount	= function(req, res){
	res.render(__dirname + "/../views/set-account");
};

/** 绑定手机 **/
exports.bindMob		= function(req, res){
	res.render(__dirname + "/../views/bind-mob");
};

/** 验证手机 **/
exports.validMob	= function(req, res){
	res.render(__dirname + "/../views/valid-mob");
};

/** 验证原手机 **/
exports.checkMob	= function(req, res){
	res.render(__dirname + "/../views/check-mob");
};

/** 邮箱绑定，输入邮箱号码 **/
exports.bindMail	= function(req, res){
	res.render(__dirname + "/../views/bind-mail");
};

/** 邮箱绑定，输入邮箱号码 **/
exports.sendMail = function(req, res){
	res.render(__dirname + "/../views/send-mail");
};

/** 设置昵称 **/
exports.setNickname = function(req, res){
	res.render(__dirname + "/../views/set-nickname");
};

