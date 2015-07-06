module.exports		= function( app ){
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: app.get("env") === "development" ? err : {}
		});
	});

	//非预期异常捕获，例如session中redis异步链接失败等。
	process.on('uncaughtException', function (err) {
		console.log(err);
	});
};
