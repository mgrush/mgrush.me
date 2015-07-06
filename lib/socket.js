module.exports		= function(app){
	var server		= require("http").createServer(app);
	var io			= require("socket.io").listen(server);
	var client		= require("redis").createClient();

	io.sockets.on("connection", function(socket){
		
		socket.on("USER_COUNT", function(data){
			client.on("message", function(channel, message){
				console.log(channel + ": " + message);
				socket.emit("USER_COUNT", message);
			});

			client.subscribe("USER_COUNT");
		});

		console.log("socket.io connect success !");

	});

	server.listen(5000);
};
