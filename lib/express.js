var express			= require('express');
var path			= require('path');
var logger			= require('morgan');
var cookieParser	= require('cookie-parser');
var bodyParser		= require('body-parser');
var lessMiddleware	= require('less-middleware');
var app				= express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

//less css config, call lessMiddleware before express.static middle ware
app.use(lessMiddleware(path.join(__dirname, '../public/less'), {
	dest		: path.join(__dirname, '../public'),
	preprocess	: {
		path	: function(pathname, req){
			return pathname.replace(path.sep + "stylesheets" + path.sep, path.sep);
		}
	}
}));

app.use(express.static(path.join(__dirname, '../public')));

module.exports		= app;
