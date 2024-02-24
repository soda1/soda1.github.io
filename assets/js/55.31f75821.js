(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{415:function(t,e,a){"use strict";a.r(e);var s=a(4),_=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ol",[e("li",[e("h4",{attrs:{id:"shared-and-exclusive-lock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shared-and-exclusive-lock"}},[t._v("#")]),t._v(" Shared and Exclusive Lock")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Shared Locks（读锁S）")]),t._v("：每个事务可以都可以获取锁，不阻塞")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Exclusive Locks  （写锁X）")]),t._v("：同一时间只能有一个事务持有同一个锁")])])]),t._v(" "),e("p",[t._v("MySQL实现了多粒度的锁")]),t._v(" "),e("h4",{attrs:{id:"服务层锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务层锁"}},[t._v("#")]),t._v(" 服务层锁")]),t._v(" "),e("h5",{attrs:{id:"表锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表锁"}},[t._v("#")]),t._v(" 表锁")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("语法")]),t._v(" "),e("p",[t._v("上锁")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" lock tables tableName1 (read|write) [,tableName2  (read|write)...];\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("解锁")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("unlock tables;  -- 释放当前会话所有表级锁\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])]),t._v(" "),e("p",[t._v("lock tables 语法除了会限制别的线程的读写外，也限定了本线程。例如锁表t1的读锁，那么在此session中它也不能进行写表操作。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230227163207.png",alt:"image-20230227163159921"}})]),t._v(" "),e("h5",{attrs:{id:"元数据锁-meta-data-lock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元数据锁-meta-data-lock"}},[t._v("#")]),t._v(" 元数据锁：(meta data lock)")]),t._v(" "),e("p",[t._v("MDL 不需要显式使用，在访问一个表的时候会被自动加上。MDL 的作用是，保证读写的正确性。在 MySQL 5.5 版本中引入了 MDL，当对一个表做增删改查操作的时候，加 MDL 读锁；当要对表做结构变更操作的时候，加 MDL 写锁。")]),t._v(" "),e("p",[t._v("读锁之间不互斥，因此你可以有多个线程同时对一张表增删改查。读写锁之间、写锁之间是互斥的，用来保证变更表结构操作的安全性。因此，如果有两个线程要同时给一个表加字段，其中一个要等另一个执行完才能开始执行。")]),t._v(" "),e("p",[t._v("mysql5.6版本支持online ddl，如果是5.6以下版本做表结构变更时要特别小心，避免因MDL锁而阻塞线上查询更新。")]),t._v(" "),e("h4",{attrs:{id:"innodb中的锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb中的锁"}},[t._v("#")]),t._v(" InnoDB中的锁")]),t._v(" "),e("h5",{attrs:{id:"intention-locks-意向锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intention-locks-意向锁"}},[t._v("#")]),t._v(" Intention Locks（意向锁）")]),t._v(" "),e("p",[t._v("先提前声明一个意向，并获取表级别的意向锁（IS或IX），如果获取成功，则稍后将要或正在(才被允许)，对该表的某些行加S/X锁。")]),t._v(" "),e("p",[t._v("和"),e("strong",[t._v("表级别")]),t._v("的X/S锁兼容性如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("X")]),t._v(" "),e("th",[t._v("IX")]),t._v(" "),e("th",[t._v("S")]),t._v(" "),e("th",[t._v("IS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("X")]),t._v(" "),e("td",[t._v("Conflict")]),t._v(" "),e("td",[t._v("Conflict")]),t._v(" "),e("td",[t._v("Conflict")]),t._v(" "),e("td",[t._v("Conflict")])]),t._v(" "),e("tr",[e("td",[t._v("IX")]),t._v(" "),e("td",[t._v("Conflict")]),t._v(" "),e("td",[t._v("Compatible")]),t._v(" "),e("td",[t._v("Conflict")]),t._v(" "),e("td",[t._v("Compatible")])]),t._v(" "),e("tr",[e("td",[t._v("S")]),t._v(" "),e("td",[t._v("Conflict")]),t._v(" "),e("td",[t._v("Conflict")]),t._v(" "),e("td",[t._v("Compatible")]),t._v(" "),e("td",[t._v("Compatible")])]),t._v(" "),e("tr",[e("td",[t._v("IS")]),t._v(" "),e("td",[t._v("Conflict")]),t._v(" "),e("td",[t._v("Compatible")]),t._v(" "),e("td",[t._v("Compatible")]),t._v(" "),e("td",[t._v("Compatible")])])])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("意向锁有什么作用呢？")]),t._v(" "),e("p",[t._v("为了快速检查是否可以获取表级锁，但MDL貌似也能实现这种效果，具体只能看实现或者ask MySQL")])]),t._v(" "),e("li",[e("p",[t._v("为什么IX和IX是兼容的呢？")]),t._v(" "),e("p",[t._v("因为在行级别的锁，不一定会有冲突，比如两个不同的事务想获取不同行的X锁，这时候他们都拥有意向锁IX是ok的")])])]),t._v(" "),e("h5",{attrs:{id:"record-locks-记录锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#record-locks-记录锁"}},[t._v("#")]),t._v(" Record Locks（记录锁）")]),t._v(" "),e("p",[t._v("对索引中的键进行上锁，阻止其他事务insert、delete、update。比如"),e("code",[t._v("SELECT c1 FROM t WHERE c1 = 10 FOR UPDATE")]),t._v("，那么c1=10得行都不会被更新")]),t._v(" "),e("p",[t._v("record locks 总是会在索引行上加锁。即使一个表并没有设置索引，这种时候InnoDB会创建一个隐式的聚集索引（primary Key）,然后在这个聚集索引上加锁。")]),t._v(" "),e("p",[e("strong",[t._v("如果没有命中索引，那么MySQL就会扫描聚簇索引，这时候就会锁住所有的行，造成锁表")])]),t._v(" "),e("h5",{attrs:{id:"gap-locks-间隙锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gap-locks-间隙锁"}},[t._v("#")]),t._v(" Gap locks（间隙锁）")]),t._v(" "),e("p",[t._v("间隙锁是索引记录之间的间隙的锁定，比"),e("code",[t._v("SELECT c1 FROM t WHERE c1 BETWEEN 10 and 20 FOR UPDATE;")]),t._v("，如果其他事务想插入c=15的行将会被阻塞")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("间隙锁是不会产生冲突的，比如一个事务持有gap X锁，另外一个事务持有gap S锁是兼容的。")])]),t._v(" "),e("li",[e("p",[t._v("如果使用了唯一索引，是不会产生gap lock的")])]),t._v(" "),e("li",[e("p",[t._v("gap lock在read committed事务级别下是不生效的")])])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("gap lock解决了什么问题")]),t._v(" "),e("p",[t._v("gap lock主要是解决当前读（delete/update/insert等）出现幻读的问题，又保证了一定的并发")])])]),t._v(" "),e("h5",{attrs:{id:"next-key-locks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-key-locks"}},[t._v("#")]),t._v(" Next-Key Locks")]),t._v(" "),e("p",[t._v("next-key locks会锁住索引记录和它前面的间隙，即Gap Locks + Record Locks。假设索引记录有如下值（10，11，13，20），可能的next-key locks如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("(negative infinity, 10]\n(10, 11]\n(11, 13]\n(13, 20]\n(20, positive infinity)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("如果查询使用了非聚簇索引，那么InnoDB还会在聚簇索引上锁住行记录")]),t._v(" "),e("p",[t._v("在隔离级别RR下，Next-Key Locks是默认开启的，加锁规则如下：")]),t._v(" "),e("ol",[e("li",[t._v("查找过程中访问到的对象才会加锁。")]),t._v(" "),e("li",[t._v("索引上的等值查询，给唯一索引加锁的时候，next-key lock退化为行锁。")]),t._v(" "),e("li",[t._v("索引上的等值查询，向右遍历时且最后一个值不满足等值条件的时候，next-key lock退化为间隙锁。")]),t._v(" "),e("li",[t._v("唯一索引上的范围查询会访问到不满足条件的第一个值为止。")])]),t._v(" "),e("p",[t._v("performance库中data_locks表用于查询每个事务所持有的锁，主要列属性介绍如下")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ENGINE_TRANSACTION_ID")]),t._v(" "),e("td",[t._v("事务id")])]),t._v(" "),e("tr",[e("td",[t._v("THREAD_ID")]),t._v(" "),e("td",[t._v("线程id")])]),t._v(" "),e("tr",[e("td",[t._v("EVENT_ID")]),t._v(" "),e("td",[t._v("The Performance Schema event that caused the lock. Tuples of ("),e("code",[t._v("THREAD_ID")]),t._v(", "),e("code",[t._v("EVENT_ID")]),t._v(") values implicitly identify a parent event in other Performance Schema tables:")])]),t._v(" "),e("tr",[e("td",[t._v("OBJECT_NAME")]),t._v(" "),e("td",[t._v("锁的归属表")])]),t._v(" "),e("tr",[e("td",[t._v("INDEX_NAME")]),t._v(" "),e("td",[t._v("锁住了哪个索引")])]),t._v(" "),e("tr",[e("td",[t._v("LOCK_TYPE")]),t._v(" "),e("td",[t._v("锁类型（行锁还是表锁）")])]),t._v(" "),e("tr",[e("td",[t._v("LOCK_MODE")]),t._v(" "),e("td",[t._v("想请求什么样的锁，这里有好几种值"),e("br"),e("strong",[t._v("S（X）,REC_NOT_GAP")]),t._v(" ：只获取记录锁"),e("br"),e("strong",[t._v("S（X）,GAP")]),t._v("：只获取gap锁"),e("br"),e("strong",[t._v("S（X）")]),t._v("：获取next-key锁"),e("br"),e("strong",[t._v("X,GAP,INSERT_INTENTION")]),t._v(" ：插入意向锁，表示想在行记录前插入记录"),e("br"),e("strong",[t._v("X,INSERT_INTENTION")]),t._v(" ：和上面相同的意思，当行记录前面的间隙无限大时会显示这种值")])]),t._v(" "),e("tr",[e("td",[t._v("LOCK_STATUS")]),t._v(" "),e("td",[t._v("请求状态")])]),t._v(" "),e("tr",[e("td",[t._v("LOCK_DATA")]),t._v(" "),e("td",[t._v("锁的数据")])])])]),t._v(" "),e("p",[t._v("例子")]),t._v(" "),e("p",[t._v("假设表test（name，age）有test_age_index（age）索引，表中age的值有（3，5，10）")]),t._v(" "),e("p",[t._v("查询如下")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("START TRANSACTION;\nSELECT *\nFROM test WHERE age = 3 FOR UPDATE;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("获取的锁如下图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/202402250118178.png",alt:"image-20240225011820113"}})]),t._v(" "),e("p",[t._v("在age索引上的行锁为(negative infinity, 3]，（3，5）。然后在聚簇索引上，next-key退化成了record lock，只锁住age=3的这一行")]),t._v(" "),e("h5",{attrs:{id:"insert-intention-locks-插入意向锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert-intention-locks-插入意向锁"}},[t._v("#")]),t._v(" Insert Intention Locks（插入意向锁）")]),t._v(" "),e("p",[t._v("insert intention lock是gap lock的一种类型，用于多个事务在相同的index gap 中，只要插入的不是相同的行，那么事务之间就不会有冲突，比如在索引记录中有（4，7）这个gap，两个事务分别使用"),e("code",[t._v("insert into t values....")]),t._v("插入（5，6）那么它们之间是不会有冲突的。")]),t._v(" "),e("h5",{attrs:{id:"auto-inc-locks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-inc-locks"}},[t._v("#")]),t._v(" AUTO-INC Locks")]),t._v(" "),e("p",[t._v("这是一个特殊的表级锁，用于在列定义时使用"),e("code",[t._v("auto_increment")]),t._v("，如果事务A想插入行进表，其他任何事务想执行插入操作都必须等待，这样事务A才能获取到连续的值")]),t._v(" "),e("h5",{attrs:{id:"锁操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#锁操作"}},[t._v("#")]),t._v(" 锁操作")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("隐式上锁")]),t._v(" "),e("p",[t._v("select：不自动加锁")]),t._v(" "),e("p",[t._v("insert|update|delete：自动加写锁，当前读")])]),t._v(" "),e("li",[e("p",[t._v("显式上锁")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tableName "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 当前读\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("解锁")]),t._v(" "),e("p",[t._v("提交事务：commit")]),t._v(" "),e("p",[t._v("回滚事务：rollback")]),t._v(" "),e("p",[t._v("kill阻塞进程")])]),t._v(" "),e("li",[e("p",[t._v("查看锁")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'innodb_row_lock%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_current_waits：当前正在等待锁定的数量；")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_time：从系统启动到现在锁定总时间长度；")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_time_avg：每次等待所花平均时间；")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_time_max：从系统启动到现在等待最常的一次所花的时间；")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Innodb_row_lock_waits：系统启动后到现在总共等待的次数；")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[e("code",[t._v("information_schema")]),t._v("库中table："),e("code",[t._v("innodb_lock_waits")]),t._v(" 、"),e("code",[t._v("innodb_locks")]),t._v(" 、"),e("code",[t._v("innodb_trx")]),t._v(" （5.7版本）")])])]),t._v(" "),e("h4",{attrs:{id:"事务中的锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务中的锁"}},[t._v("#")]),t._v(" 事务中的锁")]),t._v(" "),e("h5",{attrs:{id:"读未提交-read-uncommitted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读未提交-read-uncommitted"}},[t._v("#")]),t._v(" 读未提交（Read uncommitted）")]),t._v(" "),e("p",[t._v("在任何情况下都不会加锁")]),t._v(" "),e("h5",{attrs:{id:"已提交读-read-committed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#已提交读-read-committed"}},[t._v("#")]),t._v(" 已提交读（Read committed）")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("读")]),t._v(" "),e("p",[t._v("在同一事务通过MVCC每次都是读取最新的快照，因此可以读到最新提交的数据")])]),t._v(" "),e("li",[e("p",[t._v("写")]),t._v(" "),e("p",[t._v("对于"),e("code",[t._v("select...for update/lock in share mode")]),t._v("、"),e("code",[t._v("update")]),t._v("、"),e("code",[t._v("delete")]),t._v("等语句，只有record locks，没有gap locks。gap locks 只用在外键约束检查和重复键检查")])])]),t._v(" "),e("h5",{attrs:{id:"可重复读-repeatable-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可重复读-repeatable-read"}},[t._v("#")]),t._v(" 可重复读（Repeatable read）")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("读")]),t._v(" "),e("p",[t._v("在同一事务通过MVCC锁定每次读取某一时间的快照，因此每次读到的数据都是重复的")])]),t._v(" "),e("li",[e("p",[t._v("写")]),t._v(" "),e("p",[t._v("使用"),e("strong",[t._v("next-key locks")]),t._v("来锁当前读")]),t._v(" "),e("p",[t._v("对于"),e("code",[t._v("select...for update/lock in share mode")]),t._v("、"),e("code",[t._v("update")]),t._v("、"),e("code",[t._v("delete")]),t._v("等语句，使用什么锁取决于语句是只有唯一索引这一个条件还是搜索范围的条件")]),t._v(" "),e("ul",[e("li",[t._v("只有一个唯一索引，使用record locks;")]),t._v(" "),e("li",[t._v("其他搜索条件，使用 gap locks 或者 next-key locks")])])])]),t._v(" "),e("h5",{attrs:{id:"可串行化-serializable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可串行化-serializable"}},[t._v("#")]),t._v(" 可串行化（Serializable )")]),t._v(" "),e("p",[t._v("和RR差不多一样，区别就是如果手动commit，InnoDB会显示的对select语句加锁。")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);