
如何快速启动一个本地服务器？

首先需要安装 node.js

在你项目文件夹内 建立一个新的目录——> node_modules

在你项目文件夹内 打开git，在里面输入：
npm install connect --save
npm install serve-static --save

下载完成之后 直接 node server.js

在移动端开发中，有很多事件，其中有点击事件，那么
移动端的点击事件与PC端的点击事件区别是什么呢？
移动端的点击事件 它有300ms的延迟

为了解决这个问题，引入了第三方插件--》 fastclick.js

在移动端中，新增了一些特殊事件--》专门针对手势移动的操作：
var initTouch_move;
var move_offset;
this.el.on('touchstart', function(event) {
	initTouch_move = event.touches[0].pageY;
    console.log('start', event.touches[0].pageY);
});
this.el.on('touchmove', function(event) {
	move_offset = event.touches[0].pageY;
    //console.log('move', event.touches[0].pageY);
});
this.el.on('touchend', function(event) {
	if(move_offset - initTouch_move > 0) {
		console.log('我在向下滑动');
	}else if(move_offset - initTouch_move < 0){
		console.log('我在向上滑动');
	}else {
		console.log('保存不动');
	}
    //console.log('end', event.touches[0].pageY);
});
touchstart --> 监听手势触摸开始时的那一瞬间
touchmove --> 监听手势移动的那一过程
touchend --> 监听手势结束移动的那一刻

在移动端开发中，遮罩是经常出现的一个需求；||||||| .r0
=======
如何快速启动一个本地服务器？

首先需要安装 node.js

在你项目文件夹内 建立一个新的目录——> node_modules

在你项目文件夹内 打开git，在里面输入：
npm install connect --save
npm install serve-static --save

下载完成之后 直接 node server.js

在移动端开发中，有很多事件，其中有点击事件，那么
移动端的点击事件与PC端的点击事件区别是什么呢？
移动端的点击事件 它有300ms的延迟

为了解决这个问题，引入了第三方插件--》 fastclick.js

在移动端中，新增了一些特殊事件--》专门针对手势移动的操作：

touchstart --> 监听手势触摸开始时的那一瞬间
touchmove --> 监听手势移动的那一过程
touchend --> 监听手势结束移动的那一刻





移动端中的表单提交---》无刷新的提交方式

因为传统表单提交，需要刷新整个页面，所以这个时候我们
需要利用ajax的方式去提交数据到后端


$('.submit').click(function(event){
		event.preventDefault();//阻止表单默认事件
		var dataObj = {
			name: $('#name').val(),
			age1: $("#age1").val()
		}
		//为了解决上方异常丑陋的代码，我们引入一个在表单
		/*提交数据中一个非常非常非常核心核心核心
		一个概念：
			表单序列化操作
		*/

		//serialize --> 序列化--》 序列化操作的目的：实现表单异步提交操作
		$dom.serialize()
		//标准的与后端传输数据的方式
		$.ajax({
			url: 'server/qunar.do',
			type: 'post',
			data: $(form).serialize(),
			success: function(){
				console.log('数据发送成功');	 	
			}
		})
})
