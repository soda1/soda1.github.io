(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{420:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),a("p",[s._v("Percona Toolkit工具集")]),s._v(" "),a("ul",[a("li",[s._v("pt-query-digest：慢查询日志剖析")]),s._v(" "),a("li",[s._v("pt-collect：收集服务器数据")])]),s._v(" "),a("h3",{attrs:{id:"单条sql剖析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单条sql剖析"}},[s._v("#")]),s._v(" 单条SQL剖析")]),s._v(" "),a("h4",{attrs:{id:"show-profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-profile"}},[s._v("#")]),s._v(" Show Profile")]),s._v(" "),a("p",[s._v("MySQL提供可以用来分析当前会话中语句执行的资源消耗情况。可以用于SQL的调优的测量")]),s._v(" "),a("p",[s._v("默认情况下，参数处于关闭状态，并保存最近15次的运行结果")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("开启")]),s._v(" "),a("p",[a("code",[s._v("set profiling=1")]),s._v(" ，session级别变量")])]),s._v(" "),a("li",[a("p",[s._v("查看记录的sql")]),s._v(" "),a("p",[a("code",[s._v("show profiles;")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/image-20201116204847285.png",alt:"image-20201116204847285"}})]),s._v(" "),a("p",[s._v("也可以查询information_schema下的profiling table")])]),s._v(" "),a("li",[a("p",[s._v("诊断sql")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" profile "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" query n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- n 为Query_ID; ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- type参数：")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ALL                        --显示所有的开销信息  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- BLOCK IO                   --显示块IO相关开销  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- CONTEXT SWITCHES \t\t  --上下文切换相关开销  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- CPU              \t\t  --显示CPU相关开销信息  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- IPC              \t\t  --显示发送和接收相关开销信息  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- MEMORY           \t\t  --显示内存相关开销信息  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- PAGE FAULTS      \t\t  --显示页面错误相关开销信息  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- SOURCE           \t      --显示和Source_function，Source_file，Source_line相关的开销信息  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- SWAPS              \t\t  --显示交换次数相关开销的信息")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/image-20201116204950949.png"}}),s._v(" "),a("p",[s._v("Block_ops_in：硬盘块写入")]),s._v(" "),a("p",[s._v("Block_ops_out：硬盘块读出")])]),s._v(" "),a("li",[a("p",[s._v("日常开发需要注意"),a("code",[s._v("show profile")]),s._v("中的status")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("converting HEAP to MyISAM")]),s._v(" 查询结果太大，内存都不够用了往磁盘上搬了。")]),s._v(" "),a("li",[a("code",[s._v("creating tmp table")]),s._v(" 创建临时表")]),s._v(" "),a("li",[a("code",[s._v("copying to tmp table on disk")]),s._v(" 把内存中临时表复制到磁盘，危险！！！")]),s._v(" "),a("li",[a("code",[s._v("locked")])])])])]),s._v(" "),a("h4",{attrs:{id:"show-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-status"}},[s._v("#")]),s._v(" Show Status")]),s._v(" "),a("p",[a("code",[s._v("show status")]),s._v("命令会返回一些计数器，包含global及session级别的，具体是什么级别则需要查手册了。")]),s._v(" "),a("p",[a("code",[s._v("show global status")]),s._v("则可以查看服务器启动时至今的global计数器")]),s._v(" "),a("p",[s._v("这个不怎么用，无法基于时间的统计，可以在查询后观察计数器的变化来大致判断哪个部分比较耗时")]),s._v(" "),a("h4",{attrs:{id:"使用慢查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用慢查询日志"}},[s._v("#")]),s._v(" 使用慢查询日志")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("MySQL的慢查询日志是MySQL提供的一种日志记录，它用来记录在MySQL中响应时间超过阀值的语句")])]),s._v(" "),a("li",[a("p",[s._v("具体指运行时间超过long_query_time值的SQL，则会被记录到慢查询日志中。long_query_time的默认值为10，意思是运行10秒以上的语句。")])]),s._v(" "),a("li",[a("p",[s._v("由他来查看哪些SQL超出了我们的最大忍耐时间值，比如一条sql执行超过5秒钟，我们就算慢SQL，希望能收集超过5秒的sql，结合之前explain进行全面分析。")])]),s._v(" "),a("li",[a("p",[s._v("相关变量")]),s._v(" "),a("ul",[a("li",[s._v("slow_query_log： 慢查询日志开启")]),s._v(" "),a("li",[s._v("long_query_time： 日志记录sql语句的时间阈值，sql执行时间"),a("strong",[s._v("大于")]),s._v("该时间就会记录")]),s._v(" "),a("li",[s._v("slow_query_log_file：日志记录位置")]),s._v(" "),a("li",[s._v("Slow_queries：当前慢查询日志记录的sql语句记录条数")])]),s._v(" "),a("p",[s._v("可以在配置文件中进行永久配置，也可以在命令端配置")])])]),s._v(" "),a("h5",{attrs:{id:"日志分析工具mysqldumpslow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志分析工具mysqldumpslow"}},[s._v("#")]),s._v(" 日志分析工具mysqldumpslow")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("命令参数")]),s._v(" "),a("ul",[a("li",[s._v("s: 是表示按照何种方式排序")]),s._v(" "),a("li",[s._v("c: 访问次数")]),s._v(" "),a("li",[s._v("l: 锁定时间")]),s._v(" "),a("li",[s._v("r: 返回记录")]),s._v(" "),a("li",[s._v("t: 查询行数")]),s._v(" "),a("li",[s._v("al:平均锁定时间")]),s._v(" "),a("li",[s._v("ar:平均返回记录数")]),s._v(" "),a("li",[s._v("at:平均查询时间")]),s._v(" "),a("li",[s._v("t:即为返回前面多少条的数据")]),s._v(" "),a("li",[s._v("g:后边搭配一个正则匹配模式，大小写不敏感的")])])]),s._v(" "),a("li",[a("p",[s._v("工作中常用命令")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("得到返回记录集最多的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("个"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v("\nmysqldumpslow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("atguigu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n得到访问次数最多的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("个"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v("\nmysqldumpslow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("atguigu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n得到按照时间排序的前"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("条里面含有左连接的查询语句\nmysqldumpslow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"left join"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("atguigu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n另外建议在使用这些命令时结合 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 和more 使用 ，否则有可能出现爆屏情况\nmysqldumpslow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("atguigu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" more\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("li",[a("ul",[a("li")])])]),s._v(" "),a("h5",{attrs:{id:"全局查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局查询日志"}},[s._v("#")]),s._v(" 全局查询日志")]),s._v(" "),a("p",[s._v("尽量不要在生产环境开启这个功能")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("配置启用")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在mysql的my.cnf中，设置如下：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("general_log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记录日志文件的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("general_log_file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/path/logfile")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出格式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("log_output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("FILE")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("编码启用")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" general_log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局日志可以存放到日志文件中，也可以存放到Mysql系统表中。存放到日志中性能更好一些，存储到表中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" log_output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TABLE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n此后 ，你所编写的"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("语句，将会记录到mysql库里的general_log表，可以用下面的命令查看\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("general_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])]),s._v(" "),a("h4",{attrs:{id:"performance-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-schema"}},[s._v("#")]),s._v(" performance schema")]),s._v(" "),a("p",[s._v("提供了MySQL服务器内部运行操作上的底层指标，包含查询SQL、读写性能、元数据锁、内部使用情况等 "),a("strong",[s._v("参考schema笔记")])]),s._v(" "),a("h4",{attrs:{id:"explain-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain-sql"}},[s._v("#")]),s._v(" explain SQL")]),s._v(" "),a("p",[s._v("explain用于解析SQL的执行计划，了解SQL阻塞点")]),s._v(" "),a("h3",{attrs:{id:"观察服务器线程状态信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察服务器线程状态信息"}},[s._v("#")]),s._v(" 观察服务器线程状态信息")]),s._v(" "),a("p",[s._v("通过不断的捕获"),a("code",[s._v("show processlist")]),s._v("输出，来观察是否有大量线程处于不正常的状态。也可以查询performance schema中的processlist table")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/202401281739490.png",alt:"image-20240128173851638"}})]),s._v(" "),a("h3",{attrs:{id:"查看存储引擎状态信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看存储引擎状态信息"}},[s._v("#")]),s._v(" 查看存储引擎状态信息")]),s._v(" "),a("p",[a("code",[s._v("SHOW ENGINE engine_name {STATUS | MUTEX}")]),s._v(" 用于查询存储引擎处于什么样的状态，主要输出以下信息")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("事务信息：")]),s._v(" "),a("ul",[a("li",[s._v("当前正在运行的事务的详细信息，包括事务ID、事务状态、锁等。")])])]),s._v(" "),a("li",[a("strong",[s._v("死锁信息：")]),s._v(" "),a("ul",[a("li",[s._v("如果存在死锁，报告将包括有关死锁的信息，例如涉及的事务、等待的资源等。")])])]),s._v(" "),a("li",[a("strong",[s._v("缓冲池信息：")]),s._v(" "),a("ul",[a("li",[s._v("缓冲池的使用情况，包括缓冲池中的页数、命中率等。")])])]),s._v(" "),a("li",[a("strong",[s._v("日志信息：")]),s._v(" "),a("ul",[a("li",[s._v("InnoDB事务日志的相关信息，例如当前的日志文件、等待日志的事务等。")])])]),s._v(" "),a("li",[a("strong",[s._v("锁信息：")]),s._v(" "),a("ul",[a("li",[s._v("锁的详细信息，包括当前的锁等待情况、锁冲突等。")])])]),s._v(" "),a("li",[a("strong",[s._v("I/O信息：")]),s._v(" "),a("ul",[a("li",[s._v("InnoDB的I/O活动信息，包括读写请求的次数、等待I/O的事务等。")])])]),s._v(" "),a("li",[a("strong",[s._v("刷新信息：")]),s._v(" "),a("ul",[a("li",[s._v("缓冲池和日志的刷新信息，包括刷新的次数、刷新时间等。")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("=====================================\n2024-01-28 17:50:27 139810062657088 INNODB MONITOR OUTPUT\n=====================================\nPer second averages calculated from the last 43 seconds\n-----------------\nBACKGROUND THREAD\n-----------------\nsrv_master_thread loops: 6 srv_active, 0 srv_shutdown, 174389 srv_idle\nsrv_master_thread log flush and writes: 0\n----------\nSEMAPHORES\n----------\nOS WAIT ARRAY INFO: reservation count 39\nOS WAIT ARRAY INFO: signal count 38\nRW-shared spins 0, rounds 0, OS waits 0\nRW-excl spins 0, rounds 0, OS waits 0\nRW-sx spins 0, rounds 0, OS waits 0\nSpin rounds per wait: 0.00 RW-shared, 0.00 RW-excl, 0.00 RW-sx\n------------\nTRANSACTIONS\n------------\nTrx id counter 2522702\nPurge done for trx's n:o < 2522670 undo n:o < 0 state: running but idle\nHistory list length 0\nLIST OF TRANSACTIONS FOR EACH SESSION:\n---TRANSACTION 421286023004968, not started\n0 lock struct(s), heap size 1128, 0 row lock(s)\n---TRANSACTION 421286023003352, not started\n0 lock struct(s), heap size 1128, 0 row lock(s)\n---TRANSACTION 421286023007392, not started\n0 lock struct(s), heap size 1128, 0 row lock(s)\n---TRANSACTION 421286023006584, not started\n0 lock struct(s), heap size 1128, 0 row lock(s)\n---TRANSACTION 421286023002544, not started\n0 lock struct(s), heap size 1128, 0 row lock(s)\n---TRANSACTION 421286023001736, not started\n0 lock struct(s), heap size 1128, 0 row lock(s)\n--------\nFILE I/O\n--------\nI/O thread 0 state: waiting for completed aio requests ((null))\nI/O thread 1 state: waiting for completed aio requests (insert buffer thread)\nI/O thread 2 state: waiting for completed aio requests (read thread)\nI/O thread 3 state: waiting for completed aio requests (read thread)\nI/O thread 4 state: waiting for completed aio requests (read thread)\nI/O thread 5 state: waiting for completed aio requests (read thread)\nI/O thread 6 state: waiting for completed aio requests (write thread)\nI/O thread 7 state: waiting for completed aio requests (write thread)\nI/O thread 8 state: waiting for completed aio requests (write thread)\nPending normal aio reads: [0, 0, 0, 0] , aio writes: [0, 0, 0, 0] ,\n ibuf aio reads:\nPending flushes (fsync) log: 0; buffer pool: 0\n5526 OS file reads, 548 OS file writes, 256 OS fsyncs\n0.00 reads/s, 0 avg bytes/read, 0.00 writes/s, 0.00 fsyncs/s\n-------------------------------------\nINSERT BUFFER AND ADAPTIVE HASH INDEX\n-------------------------------------\nIbuf: size 1, free list len 0, seg size 2, 0 merges\nmerged operations:\n insert 0, delete mark 0, delete 0\ndiscarded operations:\n insert 0, delete mark 0, delete 0\nHash table size 34679, node heap has 0 buffer(s)\nHash table size 34679, node heap has 2 buffer(s)\nHash table size 34679, node heap has 0 buffer(s)\nHash table size 34679, node heap has 4 buffer(s)\nHash table size 34679, node heap has 2 buffer(s)\nHash table size 34679, node heap has 2 buffer(s)\nHash table size 34679, node heap has 0 buffer(s)\nHash table size 34679, node heap has 1 buffer(s)\n0.00 hash searches/s, 0.00 non-hash searches/s\n---\nLOG\n---\nLog sequence number          1318313465\nLog buffer assigned up to    1318313465\nLog buffer completed up to   1318313465\nLog written up to            1318313465\nLog flushed up to            1318313465\nAdded dirty pages up to      1318313465\nPages flushed up to          1318313465\nLast checkpoint at           1318313465\nLog minimum file id is       402\nLog maximum file id is       402\n78 log i/o's done, 0.00 log i/o's/second\n----------------------\nBUFFER POOL AND MEMORY\n----------------------\nTotal large memory allocated 0\nDictionary memory allocated 719581\nBuffer pool size   8192\nFree buffers       2462\nDatabase pages     5719\nOld database pages 2092\nModified db pages  0\nPending reads      0\nPending writes: LRU 0, flush list 0, single page 0\nPages made young 6752, not young 18027\n0.00 youngs/s, 0.00 non-youngs/s\nPages read 5480, created 245, written 382\n0.00 reads/s, 0.00 creates/s, 0.00 writes/s\nNo buffer pool page gets since the last printout\nPages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s\nLRU len: 5719, unzip_LRU len: 0\nI/O sum[0]:cur[0], unzip sum[0]:cur[0]\n--------------\nROW OPERATIONS\n--------------\n0 queries inside InnoDB, 0 queries in queue\n1 read views open inside InnoDB\nProcess ID=727, Main thread ID=139810555545152 , state=sleeping\nNumber of rows inserted 8194, updated 0, deleted 0, read 4000107\n0.00 inserts/s, 0.00 updates/s, 0.00 deletes/s, 0.00 reads/s\nNumber of system rows inserted 8, updated 347, deleted 8, read 9936\n0.00 inserts/s, 0.00 updates/s, 0.00 deletes/s, 0.00 reads/s\n----------------------------\nEND OF INNODB MONITOR OUTPUT\n============================\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);