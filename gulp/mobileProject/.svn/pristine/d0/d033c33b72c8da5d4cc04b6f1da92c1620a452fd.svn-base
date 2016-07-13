1 新浪云 与 微信公众号的注册与使用不重要，
为什么不重要，这个仅仅是 项目所会依赖到的环境
因为客观原因（网速慢，无法现场演示），
详细教程参考文档与视屏。


真正的核心是项目本身。

该项目它一些精华的地方，重要性逐步降低：
1. 它用到队列任务机制，实现一个一步一步的路由，相当于是一个状态机。
2.
进度条插件的使用，用了第三方插件：Pace.js
3.
我们用到手势库的框架 hammer.js --->进行手势的操作
4.
用到了canvas,进行一些操作
5. 
其他的就是css布局上的一些操作

第二个摊煎饼，核心项目设计

核心路由模块： 

任务队列
var taskQuene = ['首页', '锅底页', '胡面', '打鸡蛋', '把鸡蛋摊开', '涂酱', '画番茄酱','撒葱花','包煎饼', '进入分享页']； 核心路由模块

var taskQueneMap = {
	//核心路由模块的映射存储列表
	'首页': homeModule,
	'锅底页': potModule,
	'胡面': panModule,
	'打鸡蛋': eggModule
}

'首页' ---> homeModule
'锅底页' ---> potModule
'胡面' --> panModule
'打鸡蛋' -- > eggModule
....
...
..
homeModule = {
	enter: function(){
		this.ready();//该模块以及准备好了
	},
	leave:function(){

	},
	ready: function(){

	}
}

potModule = {
	enter: function(){
		this.ready();//该模块以及准备好了
	},
	leave:function(){

	},
	ready: function(){

	}
}

//---》  代码设计至此告一段落，之后进行具体实现

具体实现： ---》
第一步： 实现一个加载进度条

可以利用很多第三方插件去实现，但是要找一个最好：简单、方便、可配置

Pace  --> 很好用的进度条插件
