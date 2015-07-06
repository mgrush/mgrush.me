module.exports		= function(app){
	var session		= require("express-session"),
		RedisStore	= require("connect-redis")(session);

	app.use(session({
		secret		: "mgrush",
		resave		: false,
		saveUninitialized	: true,
		store				: new RedisStore({
			host	: "127.0.0.1",
			port	: 6379
		})
	}));
};
