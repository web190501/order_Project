#dsj_user.sql创建用户表
#创建数据库
DROP DATABASE IF EXISTS dsj;
CREATE DATABASE dsj CHARSET=UTF8;
#创建表dsj_login 用户登录表
USE dsj;
CREATE TABLE dsj_login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(64),
    phone VARCHAR(16),
    avatar VARCHAR(128)
)
#添加用户测试数据
INSERT INTO dsj_login VALUES(NULL,'lily',md5('123'),'940746559@qq.com','18629884657','invite.png')
INSERT INTO dsj_login VALUES(NULL,'lucy',md5('123'),'94446559@qq.com','18634584657','notice.png')