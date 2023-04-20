(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{360:function(t,s,a){"use strict";a.r(s);var v=a(7),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("范式是“符合某一种级别的关系模式的集合，表示一个关系内部各属性之间的联系的合理化程度”。即"),s("strong",[t._v("一张数据表的表结构所符合的某种设计标准的级别")])]),t._v(" "),s("h4",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("在理解范式之前，先熟悉以下的概念")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("属性")]),t._v("：在关系数据库中属性可以看作是“表的一列”。")]),t._v(" "),s("li",[s("strong",[t._v("元组")]),t._v("：表中的一行就是一个元组。")]),t._v(" "),s("li",[s("strong",[t._v("候选码")]),t._v("：假设K为表中的一个属性或属性组，若除K之外的所有属性都完全函数依赖于K，那么K为候选码，简称码。在实际中我们通常可以理解为："),s("strong",[t._v("假如当 K 确定的情况下，该表除 K 之外的所有属性的值也就随之确定，那么 K 就是码。"),s("strong",[t._v("一张表中可以有超过一个码。（实际应用中为了方便，通常选择其中的一个码作为")]),t._v("主码")]),t._v("）")]),t._v(" "),s("li",[s("strong",[t._v("主属性")]),t._v("：一个属性只要在任何一个候选码中出现过，这个属性就是主属性。")]),t._v(" "),s("li",[s("strong",[t._v("非主属性")]),t._v("：与上面相反，没有在任何候选码中出现过，这个属性就是非主属性。")]),t._v(" "),s("li",[s("strong",[t._v("外码")]),t._v("：一个属性（或属性组），它不是码，但是它别的表的码，它就是外码。")])]),t._v(" "),s("h5",{attrs:{id:"函数依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数依赖"}},[t._v("#")]),t._v(" 函数依赖")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("完全函数依赖")]),t._v(" "),s("p",[t._v("在一张表中，若 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"X"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"2192"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"Y"}})],1)],1)],1),t._v("，且对于 X 的任何一个真子集（假如属性组 X 包含超过一个属性的话），"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"X"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mo",{staticClass:"mjx-n",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"2032"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"2192"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"Y"}})],1)],1)],1),t._v(" 不成立，那么我们称 Y 对于 X "),s("strong",[t._v("完全函数依赖")]),t._v("，记作")],1),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230419235514.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("部分函数依赖")]),t._v(" "),s("p",[t._v("假如 Y 函数依赖于 X，但同时 Y 并不完全函数依赖于 X，那么我们就称 Y 部分函数依赖于 X，记作")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230419235825.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("传递函数依赖")]),t._v(" "),s("p",[t._v("假如 Z 函数依赖于 Y，且 Y 函数依赖于 X (前提：Y 不包含于 X，且 X 不函数依赖于 Y），那么我们就称 Z 传递函数依赖于 X ，记作")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230420000026.png",alt:""}})])])]),t._v(" "),s("h4",{attrs:{id:"第一范式-1nf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一范式-1nf"}},[t._v("#")]),t._v(" 第一范式（1NF）")]),t._v(" "),s("p",[t._v("定义：表中每一列都不可再分")]),t._v(" "),s("p",[t._v("比如下表就符合1NF，所有列都不可再分")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230420000340.jpg",alt:""}})]),t._v(" "),s("p",[t._v("表中码为（学号，课名）")]),t._v(" "),s("p",[t._v("存在问题：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("数据冗余")]),t._v(" "),s("p",[t._v("每一名学生的学号、姓名、系名、系主任这些数据重复多次")])]),t._v(" "),s("li",[s("p",[t._v("插入异常")]),t._v(" "),s("p",[t._v("如果新建一个系还没有招收学生，那么无法将系名与系主任的数据单独地添加到数据表")])]),t._v(" "),s("li",[s("p",[t._v("删除异常")]),t._v(" "),s("p",[t._v("将某个系的学生记录删除了，那么系和系主任数据也随之被删除")])]),t._v(" "),s("li",[s("p",[t._v("修改异常")]),t._v(" "),s("p",[t._v("学生转系时需要修改多条数据")])])]),t._v(" "),s("h4",{attrs:{id:"第二范式-2nf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二范式-2nf"}},[t._v("#")]),t._v(" 第二范式（2NF)")]),t._v(" "),s("p",[t._v("定义：在1NF的基础上消除非主属性对于码的部分函数依赖")]),t._v(" "),s("p",[t._v("对上表字段进行分析得到所有函数依赖关系如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230420001012.jpg",alt:""}})]),t._v(" "),s("p",[t._v("因此消除部分函数依赖后得到新的数据如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230420001124.png",alt:""}})]),t._v(" "),s("p",[t._v("仍然存在的问题：")]),t._v(" "),s("ul",[s("li",[t._v("将某个系的学生记录删除了，那么系和系主任数据也随之被删除")]),t._v(" "),s("li",[t._v("无法插入一个尚无学生的系")])]),t._v(" "),s("h4",{attrs:{id:"第三范式-3nf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三范式-3nf"}},[t._v("#")]),t._v(" 第三范式（3NF)")]),t._v(" "),s("p",[t._v("定义：在2NF的基础上，消除非主属性对码的传递函数依赖")]),t._v(" "),s("p",[t._v("对于学生表来说，学号→ 系名，同时系名→ 系主任，存在传递函数依赖。对表进行模式分解如下")]),t._v(" "),s("p",[t._v("选课（学号，课名，分数）\n学生（学号，姓名，系名）\n系（系名，系主任）")]),t._v(" "),s("p",[t._v("至此所有表都满足3NF要求")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230420001928.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("p",[t._v("3NF"),s("strong",[t._v("基本")]),t._v("上解决了数据冗余过大，插入异常，修改异常，删除异常的问题，但在实际中，往往为了追求性能，往往做到2NF或1NF即可")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.zhihu.com/question/24696366",title:"[如何理解关系型数据库的常见设计范式？]",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何理解关系型数据库的常见设计范式？"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=_.exports}}]);