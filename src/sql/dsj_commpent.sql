#创建评论表
#创建评论数据库表
DROP DATABASE IF EXISTS dsj;
CREATE DATABASE dsj CHARSET=UTF8;
#创建表dsj_commpent 评论表
USE dsj;
CREATE TABLE dsj_commpent(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(64),
    val INT(10),
    content VARCHAR(64)
)
#添加用户测试数据
INSERT INTO dsj_commpent VALUES(NULL,'lily',3,'环境还可以 稍微有点拥挤 服务还不错 人多了就会有些应付不来的感觉 味道还可以没有惊艳但也可以吃吃');
INSERT INTO dsj_commpent VALUES(NULL,'lucy',5,'下午临时刷到的，就高兴前往，结果前台没有信息，主管确认了我的手机上信息后安排入座。食物很喜欢，牛排肉质和熟度都不错。后来有酒杯打翻，事后服务员马上重新安排，还是让人满意的。总体食物五分！谁让我喜欢他家的牛扒！');