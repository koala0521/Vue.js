# Vue

标签（空格分隔）： vue

---
#### **一个用数据来操控视图的js工具**

 **vue使用:**

     1 . 先引入 vue.js;
     
     2 . 创建一个Vue实例( new Vue() );
     
     3 . 实例需要传入一个对象;

```
{
	el:"#list",  // 作用区域，在某个元素内部
	
	data:{		 // 要用到数据，需要是一个对象
		list:list
	},
	methods:{	 // 使用到函数必须放在这个对象里面
		fn:function(a){
			alert(a);
		}	
 	}
``` 

    4 . 指令：需要写在作用的元素行间或者内部；
        	v-for(for循环)=""，v-on:"事件名" = "函数", v-model = ""(可以监控表单元素的属性值变化),v-bind:onoff = false 绑定行间属性
     
**v-bind 动态的绑定数据**

	响应的数据绑定  当数据发生变化的时候，视图会自动更新
	
	vue会把data中的数据，放在根实例上 ;	
	
```	
	var vm = new Vue({
		el:"#box",
		data:{
			mes:"aaa"
		}
	});
	console.log( vue._data )  //  { mes : "aaa" }
	
```
    添加class
	v-bind:class="{class名字:一个表达式}"

	class是否添加到这个元素上，取决于对应的表达式是true还是fasle

	v-bind: 简写为 :
	v-on:   简写为  @
	
**绑定事件处理程序 v-on:   简写为  @**
    
    事件处理程序统一的写在选项项的methods中
    
    事件修饰符
    	利用修饰符，methods 只有纯粹的数据逻辑，而不是去处理 DOM 事件细节
    
    	@click.stop
    
    	.stop 阻止冒泡修饰符
    
    在绑定事件处理程序的时候
    	@click="事件名"
    	@click="事件名($event)" // $event为事件对象参数，固定写法，不可改

**v-if  / v-show**
驱动元素的现实和隐藏

    v-if = "布尔值 / 可解析为布尔值的表达式"
    v-show = "布尔值 / 可解析为布尔值的表达式"
    
    v-if 操作dom元素删除 / 添加 达到显示和隐藏的目的;
    v-show 是控制 css 的 display 来达到元素显示或者隐藏的目的;
    
**计算属性 computed**

    模板不建议放过多的逻辑，不利于阅读和维护，所以引入一个计算属性；
    
    优点：computed 会动态的把计算的属性值，缓存起来，如果还需要再用，直接会从内存拿，不需要在调用函数
```
<div id = "box" >
    <span> {{ val }} </span>  //  a
</div>


var a = 1;
new Vue（{
    el:"#box",
    data:{
        massage:"abc"
    },
    computed：{
        "val":function(){
            return a
        }
    }
}）

computed 只写一个函数默认为取值，需要设置，要用到set；

computed{
    "val"{
        get(){
            rerurn a
        },
        set(){
        
        }
    
    }
}

```

生命周期