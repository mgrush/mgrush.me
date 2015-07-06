var app			= require("./lib/express");
var session		= require("./lib/session")(app);
var socket		= require("./lib/socket")(app);
var route		= require("./lib/route")(app);
var errHandler	= require("./lib/errHandler")(app);

module.exports	= app;
