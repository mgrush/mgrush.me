/**
 * 公共API以及全局参数
 */
var util		= require(__dirname + "/../../../components/util");
var wechat		= require(__dirname + "/../components/wechat");

/** 
 * 处理微信开发者认证、获取签名、消息处理等接口
 **/
exports.index = function(req, res){
	switch(req.method.toUpperCase()) {
		case "GET"	: //开发者中心服务器地址认证
			wechat.checkSignature(req.query, function(isValid){
				isValid && res.end( req.query.echostr );
			});
			break;
		case "POST"	: //微信公众号消息处理以及事件处理中心
			handleEvent(req.query, function(){
				
			});
			break;
	}
};

exports.getSignature = function(req, res){
	return wechat.getSignature(req.query, function(signature){
		util.response(res, {
			signature	: signature
		});
	});
};

/**
 * 消息以及事件处理中心
 */
function handleEvent(query, callback) {
	console.log(req);
}

