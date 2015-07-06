var redis		= require("redis");
var client01	= redis.createClient();
var client02	= redis.createClient();
var msgCount	= 0;

client01.on("subscribe", function(channel, count){
	client02.publish("user_event", "I did a touchstart event !");
	client02.publish("user_event", "I did a touchmove event !");
	client02.publish("user_event", "I did a touchend event !");
	client02.publish("USER_COUNT", "2000");

	console.log(channel, count);
});

client01.on("message", function(channel, message){
	msgCount++;

	console.log(channel, message);

	if(msgCount == 14) {
		client01.unsubscribe();
		client01.end();
		client02.end();
	}
});

client01.subscribe("user_event, USER_COUNT");
