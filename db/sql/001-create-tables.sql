-- DROP
DROP TABLE IF EXISTS `cr_panda`;

---- create ----
create table IF not exists `cr_panda`
(
create table  if not exists users( id INT PRIMARY KEY auto_increment, token varchar(256),name varchar(256));
create table if not exists ips (id INT PRIMARY KEY auto_increment, ipadress varchar(256),username varchar(256)) ;
create table if not exists treades (id INT PRIMARY KEY auto_increment, name varchar(256));
create table if not exists ress(id INT PRIMARY KEY auto_increment, meesage varchar(256), treid int,ipsid INT, FOREIGN KEY(treid) REFERENCES treades(id),FOREIGN KEY(ipsid) REFERENCES ips(id));
)

