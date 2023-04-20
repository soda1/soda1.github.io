(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{366:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),s("p",[t._v("提高查询效率，因为索引是经过排序后的能够快速查找的数据结构")]),t._v(" "),s("h3",{attrs:{id:"索引原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引原理"}},[t._v("#")]),t._v(" 索引原理")]),t._v(" "),s("p",[t._v("通过不断的缩小想要获得的数据的范围来筛选出想要的结果，数据都是排好序的。数据库操作不只包括等值查询还包括范围查询（between、in、> 、<  、like等)，搜索树可以满足数据库的操作，但是数据库的数据是保存在磁盘中的，所以会发生IO操作，先将数据读取到内存中在进行搜索。IO操作是很比较费时的，数据量过多时，查询很很慢。因此简单搜索树没办法满足。")]),t._v(" "),s("h4",{attrs:{id:"io读取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io读取"}},[t._v("#")]),t._v(" IO读取")]),t._v(" "),s("p",[t._v("由于IO读取是高昂的操作，计算机系统对IO进行了一些优化，当一次IO时，不光把当前磁盘地址的数据，而是把相邻的数据也都读取到内存缓冲区内，每一次IO读取的数据我们称之为一页(page)。具体一页有多大数据跟操作系统有关，一般为4k或8k，也就是我们读取一页内的数据时候，实际上才发生了一次IO。")]),t._v(" "),s("h4",{attrs:{id:"b-树-多路搜索树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-树-多路搜索树"}},[t._v("#")]),t._v(" B+树（多路搜索树）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/7af22798.jpg",alt:"b+树"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("多路表示非叶节点的子节点数>1，且<=M ，且M>=2。图中为3路搜索树")])]),t._v(" "),s("li",[s("p",[t._v("浅蓝色部分是磁盘块，代表的是一次IO读取的数据。")]),t._v(" "),s("ul",[s("li",[t._v("蓝色部分是"),s("strong",[t._v("数据项")]),t._v("（"),s("strong",[t._v("关键字")]),t._v("）")])])]),t._v(" "),s("li",[s("p",[t._v("黄色部分是"),s("strong",[t._v("指针")]),t._v("，指向下一个子节点的磁盘块")])]),t._v(" "),s("li",[s("p",[t._v("所有叶子节点均在同一层,只有叶子节点才会存储真正的数据，包含了"),s("strong",[t._v("关键字")]),t._v("和"),s("strong",[t._v("关键字记录的指针")]),t._v("。每个叶子节点都有指向右叶子节点的指针。非叶子节点只存储数据项，如17，35并没有真实存在数据当中。")])]),t._v(" "),s("li",[s("p",[t._v("一次查找过程（查找数据28）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第一次IO：将磁盘块1读取到内存中，因为数据28在17和35之间，所以读取磁盘块1指针P2指向的磁盘块3")])]),t._v(" "),s("li",[s("p",[t._v("第二次IO：将磁盘块3读取到内存中，因为数据28在26和30之间，所以读取磁盘块3指针P2指向的磁盘块8")])]),t._v(" "),s("li",[s("p",[t._v("第三次IO：将磁盘8读取到内存中，找到数据28")])])]),t._v(" "),s("p",[t._v("一次查找过程只用了三次IO就能够找到数据。一般3层b+树可以表示百万的数据，也就是查找上百万的数据只要三次IO，提升是巨大的")])]),t._v(" "),s("li",[s("p",[t._v("性质")]),t._v(" "),s("ul",[s("li",[t._v("IO次数由树高h决定，假设数据为N，每个磁盘块数据项为m，那么有h=log(m+1)N，当数据N一定的情况下，m越大，则h越小，而m = 磁盘块大小/数据项大小。因为磁盘块大小是固定的，因此存储的数据项越小，存储的数据就越多，树的高度就越低。这就是为什么b+树只在叶子节点存储真实数据。b树是所有节点都保存真实数据")]),t._v(" "),s("li",[t._v("当b+树的数据项是复合的数据结构，比如(name,age,sex)的时候，b+数是按照从左到右的顺序来建立搜索树的，比如当(张三,20,F)这样的数据来检索的时候，b+树会优先比较name来确定下一步的所搜方向，如果name相同再依次比较age和sex，最后得到检索的数据；但当(20,F)这样的没有name的数据来的时候，b+树就不知道下一步该查哪个节点，因为建立搜索树的时候name就是第一个比较因子，必须要先根据name来搜索才能知道下一步去哪里查询。比如当(张三,F)这样的数据来检索时，b+树可以用name来指定搜索方向，但下一个字段age的缺失，所以只能把名字等于张三的数据都找到，然后再匹配性别是F的数据了， 这个是非常重要的性质，即"),s("strong",[t._v("索引的最左匹配特性")])])])]),t._v(" "),s("li",[s("p",[t._v("b树和b+树区别")]),t._v(" "),s("ul",[s("li",[t._v("B树的关键字和记录是放在一起的，叶子节点可以看作外部节点，不包含任何信息；B+树叶子节点中只有关键字和指向下一个节点的索引，记录只放在叶子节点中。(一次查询可能进行两次i/o操作)")])])]),t._v(" "),s("li",[s("p",[t._v("为什么说B+树比B树更适合实际应用中操作系统的文件索引和数据库索引？")]),t._v(" "),s("ul",[s("li",[t._v("B+树的磁盘读写代价更低")])]),t._v(" "),s("p",[t._v("B+树的内部结点并没有指向关键字具体信息的指针。因此其内部结点相对B 树更小。如果把所有同一内部结点的关键字存放在同一盘块中，那么盘块所能容纳的关键字数量也越多。一次性读入内存中的需要查找的关键字也就越多。相对来说IO读写次数也就降低了。")]),t._v(" "),s("ul",[s("li",[t._v("B+树的查询效率更加稳定")])]),t._v(" "),s("p",[t._v("由于非终结点并不是最终指向文件内容的结点，而只是叶子结点中关键字的索引。所以任何关键字的查找必须走一条从根结点到叶子结点的路。所有关键字查询的路径长度相同，导致每一个数据的查询效率相当。")])])]),t._v(" "),s("h3",{attrs:{id:"索引分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引分类"}},[t._v("#")]),t._v(" 索引分类")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("从存储结构上来划分：BTree索引（B-Tree或B+Tree索引），Hash索引，full-index全文索引，R-Tree索引。")])]),t._v(" "),s("li",[s("p",[t._v("从应用层次来分：普通索引，唯一索引，复合索引")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("普通索引：即一个索引只包含单个列，一个表可以有多个单列索引")])]),t._v(" "),s("li",[s("p",[t._v("唯一索引：索引列的值必须唯一，但允许有空值")])]),t._v(" "),s("li",[s("p",[t._v("复合索引：即一个索引包含多个列")])])])]),t._v(" "),s("li",[s("p",[t._v("根据中数据的物理顺序与键值的逻辑（索引）顺序关系：聚集索引，非聚集索引。")]),t._v(" "),s("p",[t._v("聚簇索引(聚集索引)：并不是一种单独的索引类型，而是一种数据存储方式。InnoDB的聚簇索引其实就是在同一个结构中保存了索引和数据行。")]),t._v(" "),s("p",[t._v("非聚集索引：和聚簇索引相反，索引和数据是分开的。")])])]),t._v(" "),s("h3",{attrs:{id:"建立索引原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立索引原则"}},[t._v("#")]),t._v(" 建立索引原则")]),t._v(" "),s("p",[t._v("建立索引虽然可以提高查找效率，但是维护索引仍要花费很大的代价。插入数据时，如果节点数据满了之后，就需要进行分页操作，b+树也有类似于旋转的功能，如果相邻页数据没有满时，会先考虑将数据移到相邻页而不是先分页。因此，索引建立需要一定的原则。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("最左前缀匹配原则，非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，比如a = 1 and b = 2 and c > 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。")])]),t._v(" "),s("li",[s("p",[t._v("=和in可以乱序，比如a = 1 and b = 2 and c = 3 建立(a,b,c)索引可以任意顺序，mysql的查询优化器会帮你优化成索引可以识别的形式。")])]),t._v(" "),s("li",[s("p",[t._v("尽量选择区分度高的列作为索引，区分度的公式是count(distinct col)/count(*)，表示字段不重复的比例，比例越大我们扫描的记录数越少，唯一键的区分度是1，而一些状态、性别字段可能在大数据面前区分度就是0，那可能有人会问，这个比例有什么经验值吗？使用场景不同，这个值也很难确定，一般需要join的字段我们都要求是0.1以上，即平均1条扫描10条记录。")])]),t._v(" "),s("li",[s("p",[t._v("索引列不能参与计算，保持列“干净”，比如from_unixtime(create_time) = ’2014-05-29’就不能使用到索引，原因很简单，b+树中存的都是数据表中的字段值，但进行检索时，需要把所有元素都应用函数才能比较，显然成本太大。所以语句应该写成create_time = unix_timestamp(’2014-05-29’)。")])]),t._v(" "),s("li",[s("p",[t._v("尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要加(a,b)的索引，那就删除原索引（mysql没有修改索引），然后再重建索引。")])])]),t._v(" "),s("h3",{attrs:{id:"索引语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引语法"}},[t._v("#")]),t._v(" 索引语法")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" index_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("columnname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--create 语句  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--该语句添加一个主键，这意味着索引值必须是唯一的，且不能为NULL。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" index_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--这条语句创建索引的值必须是唯一的（除了NULL外，NULL可能会出现多次）。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" index_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--添加普通索引，索引值可出现多次。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" FULLTEXT index_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--该语句指定了索引为 FULLTEXT ，用于全文索引。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--创建表时建立索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tb_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" FULLTEXT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SPATIAL "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" 别名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 属性名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("长度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("删除")]),t._v(" "),s("p",[s("code",[t._v("DROP INDEX [indexName] ON mytable;")])])]),t._v(" "),s("li",[s("p",[t._v("查看")]),t._v(" "),s("p",[s("code",[t._v("SHOW INDEX FROM table_name")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);