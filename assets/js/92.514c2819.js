(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{452:function(a,e,r){"use strict";r.r(e);var t=r(4),s=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h4",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("Kafka是以消息引擎起家，在设计之初旨在实现以下三大特性：")]),a._v(" "),e("ul",[e("li",[a._v("提供一套 API 实现生产者和消费者；")]),a._v(" "),e("li",[a._v("降低网络传输和磁盘存储开销；")]),a._v(" "),e("li",[a._v("实现高伸缩性架构")])]),a._v(" "),e("p",[a._v("到现如今发展成一个分布式流处理平台")]),a._v(" "),e("h4",{attrs:{id:"消息模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息模型"}},[a._v("#")]),a._v(" 消息模型")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Producer/Consumer Model（队列模型）:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230301145154.png",alt:""}})]),a._v(" "),e("p",[a._v("生产者产生消息放在队列一端，消费者从队列的另一端进行消费，如果没有消费者，那么消息就会保存在队列中直到队列满或者有消费者上线")])]),a._v(" "),e("li",[e("p",[a._v("Publisher/Subscriber Model（发布/订阅模型）")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230301145213.png",alt:""}})])])]),a._v(" "),e("p",[a._v("Kafka同时支持以上两种模型")]),a._v(" "),e("h4",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/soda1/img/main/20230228191503.png",alt:""}})]),a._v(" "),e("p",[a._v("图片展示了Kafka作为消息引擎的大致结构，术语解释如下：")]),a._v(" "),e("ul",[e("li",[a._v("Broker：表示的是一个Kafka实例")]),a._v(" "),e("li",[a._v("Record：Kafka处理的主要对象，由Producer产生，<key, value>形式，key可以为空")]),a._v(" "),e("li",[a._v("Topic：作为Record的容器，多用来区分不同的业务")]),a._v(" "),e("li",[a._v("Partition：每一个Partition下的消息都是有序的，Topic下可以有多个Partition")]),a._v(" "),e("li",[a._v("Offset：表示的是消息的位置信息")]),a._v(" "),e("li",[a._v("Replica：副本，每个分区都可以保存多个副本，从而实现高可用")]),a._v(" "),e("li",[a._v("Producer：可以向主题"),e("strong",[a._v("发布")]),a._v("消息的客户端")]),a._v(" "),e("li",[a._v("Consumer：向主题"),e("strong",[a._v("订阅")]),a._v("消息的客户端，同一时间内一个Partition只能被一个Consumer消费")]),a._v(" "),e("li",[a._v("Consumer Offset：表示的是消费者的消费进度")]),a._v(" "),e("li",[a._v("Consumer Group：由多个Consumer组成,同时消费多个分区")]),a._v(" "),e("li",[a._v("Leader副本：对位提供数据读写服务的分区副本称为Leader，其余的称为Follower")])]),a._v(" "),e("h4",{attrs:{id:"参数描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述"}},[a._v("#")]),a._v(" 参数描述")]),a._v(" "),e("p",[a._v("Kafka有着很多的配置参数，下面是一些比较重要的参数")]),a._v(" "),e("h5",{attrs:{id:"broke-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broke-config"}},[a._v("#")]),a._v(" Broke config")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("broker.id：broker id，用于集群标识实例，不可重复，默认值为0")])]),a._v(" "),e("li",[e("p",[a._v("log.dirs：日志数据路径，这个是没有默认值的，需要自己去指定，可以指定多个路径，用逗号隔开。/home/kafka1/,/home/kafak2/")])]),a._v(" "),e("li",[e("p",[a._v("log.dir：这个用于指定单个路径，如果log.dirs没有设置的话就会使用这个")])]),a._v(" "),e("li",[e("p",[a._v("zookeeper.connect：zookeeper连接配置，以hostname:port的格式配置，配置多个是以逗号隔开")])]),a._v(" "),e("li",[e("p",[a._v("listeners：监听器,多个以逗号隔开，格式为"),e("code",[a._v("协议://hostname:port")]),a._v("，比如 "),e("code",[a._v("PLAINTEXT://myhost:9092")]),a._v("。协议如果不写，那么就必须要配置listener.security.protocol.map")])]),a._v(" "),e("li",[e("p",[a._v("advertised.listeners：这个是用于客户端的，客户端在做初始连接时获取的元信息会包含这些配置，这样客户端才会知道它需要请求的broker地址。当客户端和Kafka在不同的网络中就需要配置")]),a._v(" "),e("p",[a._v("listeners和advertised.listeners的区别参考"),e("a",{attrs:{href:"https://rmoff.net/2018/08/02/kafka-listeners-explained/",title:"Kafka Listeners - Explained",target:"_blank",rel:"noopener noreferrer"}},[a._v("这篇文章"),e("OutboundLink")],1)])]),a._v(" "),e("li",[e("p",[a._v("allow.auto.create.topics：是否允许自动创建Topic，default：true，建议false，避免创建一些奇怪的Topic")])]),a._v(" "),e("li",[e("p",[a._v("unclean.leader.election.enable：是否允许Unclean Leader选举，default：false。该选项决定同步落后太多的副本是否可以参与选举")])]),a._v(" "),e("li",[e("p",[a._v("auto.leader.rebalance.enable：允许Kafka定期对一些Topic分区进行Leader重选， default：true，建议生产环境中设为false")])]),a._v(" "),e("li",[e("p",[a._v("log.retention.{hour|minutes|ms}：数据留存时间，优先级上来说 ms 设置最高、minutes 次之、hour 最低。Kafka数据默认保存7天")])]),a._v(" "),e("li",[e("p",[a._v("log.retention.bytes：限制Broker保存数据的总容量大小，default：-1（无限制）")])]),a._v(" "),e("li",[e("p",[a._v("message.max.bytes：消息能正常接收的最大值")])]),a._v(" "),e("li",[e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("num.network.threads：接收和响应请求线程数\nnum.io.threads：处理请求的线程数\n这两个参数理解需要看Broker内部结构，num.network.threads对应Network Layer层Processor Thread线程数，num.io.threads是API Layer层的API Thread数\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])]),a._v(" "),e("h5",{attrs:{id:"topic-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#topic-config"}},[a._v("#")]),a._v(" Topic config")]),a._v(" "),e("ul",[e("li",[a._v("retention.ms：设置该Topic消息保存时长，该值会覆盖Broker端的全局参数配置")]),a._v(" "),e("li",[a._v("retention.bytes：设置为该Topic预留多少磁盘空间")]),a._v(" "),e("li",[a._v("max.message.bytes：该Topic可以正常接收到消息的最大值，会覆盖全局参数")])]),a._v(" "),e("h5",{attrs:{id:"jvm-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jvm-config"}},[a._v("#")]),a._v(" JVM config")]),a._v(" "),e("p",[a._v("Kafka是运行在JVM上的，因此配置JVM参数的重要性就不言而喻了")]),a._v(" "),e("ul",[e("li",[a._v("KAFKA_HEAP_OPTS：指定堆大小，业界推荐6GB")]),a._v(" "),e("li",[a._v("KAFKA_JVM_PERFORMANCE_OPTS：指定GC参数，一般配置收集器为G1")])]),a._v(" "),e("p",[a._v("配置示例")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KAFKA_HEAP_OPTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("--Xms6g  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--Xmx6g")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KAFKA_JVM_PERFORMANCE_OPTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-server")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+UseG1GC")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:MaxGCPauseMillis")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:InitiatingHeapOccupancyPercent")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("35")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+ExplicitGCInvokesConcurrent")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Djava.awt.headless")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动")]),a._v("\nbin/kafka-server-start.sh config/server.properties\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("更多参数参考"),e("a",{attrs:{href:"https://kafka.apache.org/28/documentation.html#brokerconfigs",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kafka Doc"),e("OutboundLink")],1),a._v("，这个文档写的很好，结构很清晰")])])}),[],!1,null,null,null);e.default=s.exports}}]);