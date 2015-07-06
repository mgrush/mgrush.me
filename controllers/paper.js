var paper		= {
	icon		: "/images/me.jpg",		//用户的照片（头像）
	name		: "Mgrush",
	tel			: "18511878280",
	email		: "724565311@qq.com",
	base		: [{
		title	: "ITEM01",
		content	: "This is the content of the base item !",
		icon	: "icon-search",
	}, {
		title	: "ITEM01",
		content	: "This is the content of the base item !",
		icon	: "icon-search",
	}],
	timelines	: [{
		title	: "2014年 XXXXXX",
		contents: [
			"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
		]
	}, {
		title	: "2014年 XXXXXX",
		contents: [
			"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
		]
	}]
}

module.exports	= {
	show	: function(req, res){
		res.render("paper/" + req.query.papername, { paper : paper });
	}
};
