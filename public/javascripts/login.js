//登录成功之后的跳转页面
var redirectUrl		= "/";

//处理登录事件
$(".button").on("click", function(event){
	var username	= $("#username").val().replace(/\s/g, ""),
		password	= $("#password").val().replace(/\s/g, "");

	$.ajax({
		url			: "/user/checkLogin",
		type		: "POST",
		dataType	: "JSON",
		data		: { username : username, password : password },
		success		: function( res ){
			if( res.status == 0 ) {
				window.location.href = redirectUrl || "/";
			}else {
				alert( res.msg );
			}
		}
	});
});
