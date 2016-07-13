window.Tool = {
	store: function(namespace, data, remove){
		//存储内容
		//namespace: 命名空间
		//data： 存储的数据对象
		//利用多态去处理
		if(arguments.length > 2) {
			localStorage.removeItem(namespace);
		}else if(arguments.length > 1){
			localStorage.setItem(namespace, JSON.stringify(data));
		}else {
			var strobj = localStorage.getItem(namespace);
			return (strobj && JSON.parse(strobj)) || {};
		}
	}

}
/*
localStorage.setItem('person', data);


localStorage.getItem('person');

function setData(key, data){
	localStorage.setItem(key, data);
}

function getData(key){
	localStorage.getItem(key);
}

setData('person', data);

getData('person');

store(1, 2) //--?存数据
store(1) //--?取数据
//现在我们学到的编程中的一些高大上的概念：
//1.继承，2.面向对象。 3.重载

//现在我们即将引入另外一个非常高大上的概念： 
//编程中的多态性

//多态： 用同一个api，去实现不同方法*/

