//var list = [
//	{
//		title:"吃饭打豆豆",
//		isChecked:false //状态为false，为不选中  任务未完成
//	},
//	{
//		title:"妙味课堂",
//		isChecked:true   //状态为true，为选中    任务完成
//	}
//];

var store = {	//数据保存到 localstorage 中，不需要写假数据
	
	save(key,value){
		
		localStorage.setItem( key,JSON.stringify(value) );
		
	},
	
	fetch(key){

		return JSON.parse( JSON.parse(localStorage.getItem(key)) ) || [];

	}
	
}

var list = store.fetch("todo-list");

var filter = {	//根据hash值筛选数据

	all:function( list ){

		return list;
	},

	finished:function( list ){

		return list.filter(function( item ){

			return item.isChecked;
		})
	},

	unfinished:function( list ){

		return list.filter(function( item ){

			return !item.isChecked;
		})

	}			
}


var vm = new Vue({
	
	el:".main",	
	
	data:{
		
		list:list,
		todo:"",
		edtorTodos:"", //记录正在编辑的数据
		boforeTitle:"",
		visibility:"all"
	},
	
	watch:{
		
		list:{
			
			handler:function(){
				
				store.save("todo-list",JSON.stringify(this.list) );
			},
			
			deep:true
		}
		
	},
	computed:{ 	//计算属性
		
		noCheckedLength:function(){

			return this.list.filter(function(item){
            		
            			return !item.isChecked
            	
            		}).length;
		},

		filterList:function(){  //过滤数据函数

			filter[this.visibility] ? filter[this.visibility] : this.visibility = "all";

			return filter[this.visibility](list);	

		}
		
	},
	methods:{
				
		addTodo(ev){  //添加任务

			//事件处理函数中的this指向当前跟实例

			if( !this.todo.trim()  ){


				return alert("请输入内容");

			}				

			this.list.push({	//向list添加一条数据
				
				title:this.todo,
				isChecked:false
			});
			
			this.todo = "";
		},
		
		removeTodo(todo){  //删除数据
			
			var index = list.indexOf(todo);
			list.splice(index,1); //这里的splice()方法不是原生的方法，是vue自己定义的，可以触发视图跟新，包括push，pop,sort,shuift,unshift,reverse
		},		
		edtorTodo(todo){ //编辑任务
			this.boforeTitle = todo.title;
			this.edtorTodos = todo;
		},
		changeTodo(todo){ //编辑成功
			
			this.edtorTodos ="";
		},		
		cancleTodo(todo){ //取消编辑
			
			todo.title = this.boforeTitle;
			this.boforeTitle = "";
			this.edtorTodos ="";
		}
		
	},
	
	directives:{	//自定义指令
		
		"focus":{
			
			update(el,binding){ //钩子函数

				if( binding.value ){
					
					el.focus();
				}
				
			}
		}
	}
});

function watchHash(){

	var hash = window.location.hash.substring(1);

	vm.visibility = hash;

}

watchHash();

window.addEventListener("hashchange", watchHash );




