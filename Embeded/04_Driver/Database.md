###### MySQL
- [**一天学会 MySQL 数据库**](https://www.bilibili.com/video/BV1Vt411z7wy)
    - 下载安装
        - [MySQL Community Downloads](https://dev.mysql.com/downloads/windows/installer/8.0.html) 下载社区版服务器进行学习
        - 具体的安装教程[**超详细MySQL安装及基本使用教程**](https://blog.csdn.net/bobo553443/article/details/81383194)
    - 基本命令
        - mysql是关系型数据库
    - 如何使用终端操作数据库？
        - 如何登录数据库服务器 mysql -uroot -p123456
        - 如何查询数据库服务器中的所有数据库 show databases;
        - 如何选中某一个数据库进行操作 use test 返回Database changed
        - SQL语句中的查询 select * from admin;
        - 带过滤条件 select * from admin where ID=1;
        - 如何退出数据库服务器 exit;
        - 如何在数据库服务器中创建数据库？create database test;
        - 如何查看某个数据库中所有的数据表？ show tables；
        - 如何创建一个数据表？create table pet(内容未填写)
        - 如何产看好的数据表的结构 describe pet;
        - 查看数据表中的记录？ select * from pet;
        - 如何往数据表中添加数据记录呢？insert info pet values(内容未填写)
        - mysql数据类型有哪些？建议参考菜鸟教程
        - 怎么选择数据类型？日期按照格式进行选择。数值和字符串按照大小进行选择。
        - 如何删除数据？delete from pet where name=’acai’
        - 如何修改数据？update pet set name=’旺旺财’ where owner=’zhouxingchi’
        - 增INSERT删DELETE改UPDATE查SELECT
        
        - mysql建表约束
            - 主键约束
                - 它能够唯一确定一张表的一条记录，也就是我们通过给某个字段添加约束，就可以是的该字段不重复且不为空。
            - 联合组建
            - 自增约束
            - 外键约束
            - 唯一约束
            - 默认约束
    - 如何使用可视化工具操作数据库？
    - 如何在编程语言中操作数据库？
- [菜鸟教程MySQL教程](https://www.runoob.com/mysql/mysql-tutorial.html)
- [小白教程MySQL教程](http://www.voidme.com/mysql)
    
      
    
- [牛客网](http://www.nowcoder.com)