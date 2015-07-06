-- 用户数据表
CREATE TABLE IF NOT EXISTS `user` (
	`id` int NOT NULL AUTO_INCREMENT,
	`username` varchar(25) NOT NULL default "",
	`password` varchar(32) NOT NULL default "",
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
