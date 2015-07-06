var appId		= "wx2f23eaf649480cd5";
var appSecret	= "38c1c41c060feed6ce1c25e27922c48e";
var token		= "ce64bfef774b238c87dbce6915c34caf"; //开发者中心配置的token字符串
var util		= require(__dirname + "/../../../components/util");

/**
 * 开发者中心服务器地址认证接口
 */
exports.checkSignature	= (query, callback) {
	var signature	= query.signature,
		timestamp	= query.timestamp,
		nonce		= query.nonce;

	var sortArr		= [token, timestamp, nonce].sort(),
		sortStr		= sortArr.join("");

	callback && callback( signature == util.sha1( sortStr ) );
};

/**
 * 获取微信调用需要的签名字符串，主要在调调用微信JSAPI wx.config 方法时需要使用
 */
exports.getSignature	= function(query, callback) {
	var timestamp	= query.timestamp,
		nonceStr	= query.nonceStr,		
		url			= query.url;

	util.series([
		function(next){		//获取AccessToken
			util.curl("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appId + "&secret=" + appSecret, {}, function(err, response, body){
				next(err, JSON.parse(body).access_token);
			});
		},	
		function(next, data){ //获取JsApiTicket
			util.curl("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" + data + "&type=jsapi", {}, function(err, response, body){
				next(err, JSON.parse(body).ticket);
			});
		},
		function(next, data){ //根据accessToken和JsApiTicket生成签名
			callback && callback(util.sha1("jsapi_ticket=" + data + "&noncestr=" + nonceStr + "&timestamp=" + timestamp + "&url=" + url));
		}
	]);
};
