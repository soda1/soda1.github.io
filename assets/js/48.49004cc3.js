(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{367:function(t,a,s){"use strict";s.r(a);var e=s(7),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"表级锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表级锁"}},[t._v("#")]),t._v(" 表级锁")]),t._v(" "),a("h5",{attrs:{id:"表锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表锁"}},[t._v("#")]),t._v(" 表锁")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("语法")]),t._v(" "),a("p",[t._v("上锁")]),t._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" lock tables tableName1 (read|write) [,tableName2  (read|write)...];\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("解锁")]),t._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("unlock tables;  -- 释放当前会话所有表级锁\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("p",[t._v("lock tables 语法除了会限制别的线程的读写外，也限定了本线程。例如锁表t1的读锁，那么在此session中它也不能进行写表操作。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230227163207.png",alt:"image-20230227163159921"}})]),t._v(" "),a("h5",{attrs:{id:"元数据锁-meta-data-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元数据锁-meta-data-lock"}},[t._v("#")]),t._v(" 元数据锁：(meta data lock)")]),t._v(" "),a("p",[t._v("MDL 不需要显式使用，在访问一个表的时候会被自动加上。MDL 的作用是，保证读写的正确性。在 MySQL 5.5 版本中引入了 MDL，当对一个表做增删改查操作的时候，加 MDL 读锁；当要对表做结构变更操作的时候，加 MDL 写锁。")]),t._v(" "),a("p",[t._v("读锁之间不互斥，因此你可以有多个线程同时对一张表增删改查。读写锁之间、写锁之间是互斥的，用来保证变更表结构操作的安全性。因此，如果有两个线程要同时给一个表加字段，其中一个要等另一个执行完才能开始执行。")]),t._v(" "),a("p",[t._v("mysql5.6版本支持online ddl，如果是5.6以下版本做表结构变更时要特别小心，避免因MDL锁而阻塞线上查询更新。")]),t._v(" "),a("h4",{attrs:{id:"行锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行锁"}},[t._v("#")]),t._v(" 行锁")]),t._v(" "),a("h5",{attrs:{id:"锁种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁种类"}},[t._v("#")]),t._v(" 锁种类")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Shared Locks（读锁S）")]),t._v("：其他事务可以获取锁，多个读操作可以同时进行而不会互相影响")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Exclusive Locks  （写锁X）")]),t._v("：其他事务需要等当前事务释放锁后才能获取，当前操作没完成之前，会阻塞其它写操作（update、insert、delete）")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Intention Locks（意向锁）")])]),t._v(" "),a("p",[t._v("表级别的锁。先提前声明一个意向，并获取表级别的意向锁（IS或IX），如果获取成功，则稍后将要或正在(才被允许)，对该表的某些行加锁(S或X)了。")]),t._v(" "),a("p",[t._v("意向锁支持多重粒度锁,允许行锁和表锁共存")]),t._v(" "),a("ul",[a("li",[t._v("意向共享锁（IS）：在获取共享锁时必须先获取IS锁")]),t._v(" "),a("li",[t._v("意向排他锁（IX）：在获取排他锁时必须先获取IX锁")])]),t._v(" "),a("p",[t._v("兼容性如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("X")]),t._v(" "),a("th",[t._v("IX")]),t._v(" "),a("th",[t._v("S")]),t._v(" "),a("th",[t._v("IS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("X")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Conflict")])]),t._v(" "),a("tr",[a("td",[t._v("IX")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Compatible")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Compatible")])]),t._v(" "),a("tr",[a("td",[t._v("S")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Compatible")]),t._v(" "),a("td",[t._v("Compatible")])]),t._v(" "),a("tr",[a("td",[t._v("IS")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Compatible")]),t._v(" "),a("td",[t._v("Compatible")]),t._v(" "),a("td",[t._v("Compatible")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Record Locks（记录锁）")])]),t._v(" "),a("p",[t._v("对查index询条件中"),a("strong",[t._v("索引字段")]),t._v("命中的行进行上锁，阻止其他事务insert、delete、update该行")]),t._v(" "),a("p",[t._v("record locks 总是会在索引行上加锁。即使一个表并没有设置索引，这种时候InnoDB会创建一个隐式的聚集索引（primary Key）,然后在这个聚集索引上加锁。")]),t._v(" "),a("p",[t._v("==注意：如果查询条件中有不走索引的字段，会锁表，导致其他事务进行insert、delete、update时阻塞==")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Gap locks（间隙锁）")])]),t._v(" "),a("p",[t._v("间隙锁定是对索引记录之间的间隙的锁定。")]),t._v(" "),a("p",[t._v("假设记录中只有[1,3,4]行，使用范围查找1-4行，这时候会产生间隙锁定，其他事务想要插入索引字段值为2的行会被阻塞")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对于使用唯一索引来搜索唯一行的语句 select a from ，不产生间隙锁定。组合唯一索引除外，即Gap locks不作用于单例唯一索引")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--如果搜索字段不是索引或具有非唯一索引，将会锁定前面的间隙")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在重叠的间隙中（或者说重叠的行记录）中允许gap共存")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Next-Key Locks")])]),t._v(" "),a("p",[t._v("Record Locks和Gap Locks的结合")]),t._v(" "),a("p",[t._v("==在隔离级别RR下，Next-Key Locks是默认开启的==")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Insert Intention Locks（插入意向锁）")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("AUTO-INC Locks")])])])]),t._v(" "),a("h5",{attrs:{id:"锁操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁操作"}},[t._v("#")]),t._v(" 锁操作")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("隐式上锁")]),t._v(" "),a("p",[t._v("select：不自动加锁")]),t._v(" "),a("p",[t._v("insert|update|delete：自动加写锁")])]),t._v(" "),a("li",[a("p",[t._v("显式上锁")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tableName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("解锁")]),t._v(" "),a("p",[t._v("提交事务：commit")]),t._v(" "),a("p",[t._v("回滚事务：rollback")]),t._v(" "),a("p",[t._v("kill阻塞进程")])]),t._v(" "),a("li",[a("p",[t._v("查看锁")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'innodb_row_lock%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_current_waits：当前正在等待锁定的数量；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_time：从系统启动到现在锁定总时间长度；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_time_avg：每次等待所花平均时间；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_time_max：从系统启动到现在等待最常的一次所花的时间；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_waits：系统启动后到现在总共等待的次数；")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("code",[t._v("information_schema")]),t._v("库中table："),a("code",[t._v("innodb_lock_waits")]),t._v(" 、"),a("code",[t._v("innodb_locks")]),t._v(" 、"),a("code",[t._v("innodb_trx")])])])]),t._v(" "),a("h3",{attrs:{id:"事务中的锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务中的锁"}},[t._v("#")]),t._v(" 事务中的锁")]),t._v(" "),a("h5",{attrs:{id:"读未提交-read-uncommitted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读未提交-read-uncommitted"}},[t._v("#")]),t._v(" 读未提交（Read uncommitted）")]),t._v(" "),a("p",[t._v("在任何情况下都不会加锁")]),t._v(" "),a("h5",{attrs:{id:"已提交读-read-committed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已提交读-read-committed"}},[t._v("#")]),t._v(" 已提交读（Read committed）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("读")]),t._v(" "),a("p",[t._v("在同一事务通过MVCC实现每次读一致。即每次读都会刷新快照，因此可以读到已提交，不使用锁。")])]),t._v(" "),a("li",[a("p",[t._v("写")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("select...for update/lock in share mode")]),t._v("、"),a("code",[t._v("update")]),t._v("、"),a("code",[t._v("delete")]),t._v("等语句，只有record locks，没有gap locks。gap locks 只用在外键约束检查和重复键检查")])])]),t._v(" "),a("h5",{attrs:{id:"可重复读-repeatable-read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可重复读-repeatable-read"}},[t._v("#")]),t._v(" 可重复读（Repeatable read）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("读")]),t._v(" "),a("p",[t._v("在同一事务通过MVCC来实现读一致（重复读），没有加读锁")])]),t._v(" "),a("li",[a("p",[t._v("写")]),t._v(" "),a("p",[t._v("使用"),a("strong",[t._v("next-key locks")]),t._v("来锁当前读")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("select...for update/lock in share mode")]),t._v("、"),a("code",[t._v("update")]),t._v("、"),a("code",[t._v("delete")]),t._v("等语句，使用什么锁取决于语句是只有唯一索引这一个条件还是搜索范围的条件")]),t._v(" "),a("ul",[a("li",[t._v("只有一个唯一索引，使用record locks;")]),t._v(" "),a("li",[t._v("其他搜索条件，使用 gap locks 或者 next-key locks")])])])]),t._v(" "),a("h5",{attrs:{id:"可串行化-serializable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可串行化-serializable"}},[t._v("#")]),t._v(" 可串行化（Serializable )")]),t._v(" "),a("p",[t._v("和RR差不多一样，区别就是如果手动commit，InnoDB会显示的对select语句加锁。")]),t._v(" "),a("h3",{attrs:{id:"加锁规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加锁规则"}},[t._v("#")]),t._v(" 加锁规则")]),t._v(" "),a("ol",[a("li",[t._v("原则1：加锁的基本单位是next-key lock。希望你还记得，next-key lock是前开后闭区间。")]),t._v(" "),a("li",[t._v("原则2：查找过程中访问到的对象才会加锁。")]),t._v(" "),a("li",[t._v("优化1：索引上的等值查询，给唯一索引加锁的时候，next-key lock退化为行锁。")]),t._v(" "),a("li",[t._v("优化2：索引上的等值查询，向右遍历时且最后一个值不满足等值条件的时候，next-key lock退化为间隙锁。")]),t._v(" "),a("li",[t._v("一个bug：唯一索引上的范围查询会访问到不满足条件的第一个值为止。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);