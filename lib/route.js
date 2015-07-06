//模拟PHP YII框架中的modules/moduleName/controllers/contName的方法配置路由
module.exports	= function(app){
	//不需要登录控制的接口
	function needLogin(req) {
		return false;
		return ( req.session.user == "undefined" || req.session.user == null )
			&& ["/", "/index/index", "/user/login", "/user/checkLogin"].indexOf(req.url) == -1;
	}

	//首页路由映射
	app.get("/", function(req, res){
		return res.redirect("/index/index");
	});
		
	//处理controllers下面的请求
	app.all("/:cont/:func", function(req, res){
		var cont	= req.params.cont,
			func	= req.params.func;

		return needLogin(req) ? res.redirect("/user/login") : require("../controllers/" + cont)[func].call(null, req, res);
	});
	
	//处理components下面的请求
	app.all("/:mod/:cont/:func", function(req, res){
		var mod		= req.params.mod,
			cont	= req.params.cont,
			func	= req.params.func;

		return needLogin(req) ? res.redirect("/user/login") : require("../modules/" + mod + "/controllers/" + cont)[func].call(null, req, res);
	});
};
