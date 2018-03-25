
// var list = [
// 	{
// 		title:"吃饭打豆豆",
// 		isChecked:false //状态为false，为不选中  任务未完成
// 		,id:1
// 	},
// 	{
// 		title:"吃饭",
// 		isChecked:false //状态为false，为不选中  任务未完成
// 		,id:2
// 	},
// 	{
// 		title:"妙味课堂",
// 		isChecked:true   //状态为true，为选中    任务完成
// 		,id:3
// 	}
// ];

var store = {
	save( kye , value ){
		localStorage.setItem(kye , JSON.stringify( value ) );
	},
	fatch( kye ){
		return JSON.parse(localStorage.getItem( kye ));
	}
};

let VM = new Vue({
	el:".main",
	data:{
		list:store.fatch("todos") || [],
		// 当前展示的分类
		show:"all",
		// 创建todo时，输入的todo名称
		todo:"",
		// 当前编辑的todo的 id
		edittingId:null,
		// 保存编辑之前的title
		oldTitle:""
	},

	computed:{
		unCompleted:function(){
			
			let unCompletedList = this.list.filter((item)=>{
				return item.isChecked ===  false
			});

			return unCompletedList.length
		},
		filterTodos:function(){
			let list = this.list;
			let todos ={
				"all":function(){
					return list;
				},
				"finished":function(){
					return list.filter(item=>{
						return item.isChecked === true
					});
				},
				"unfinished":function(){
					return list.filter(item=>{
						return item.isChecked === false
					});
				}
			};
			let filterFn = todos[ this.show ] || todos.all;

			return filterFn();
		}

	},
	watch:{

		// 浅监控 ： list 数组每一项的内部属性改变无法监控
		// list:function(){
		// 	store.save( "todos" , this.list );
		// }
		list:{
			handler:function(){
				store.save( "todos" , this.list );
			},
			deep:true
		}
	},	

	methods:{

		addTodo:function(ev) {
			this.list.push({
				title:this.todo,
				isChecked:false,
				id:Math.random()
			});
			this.todo = "";
		},
		removeTodo:function(item){
			var index = this.list.indexOf( item );
			this.list.splice( index , 1 );
			
		},
		// 进入编辑状态
		editTodo:function(item){
			this.edittingId = item.id;
			this.oldTitle = item.title;			
		},
		// 编辑完成
		edited:function( item , isSave ){

			if( item.title.trim() === ""){
				isSave = false;
			}
			// 取消保存
			if(!isSave) item.title = this.oldTitle;

			// 退出编辑状态
			this.edittingId = "";
		}
			

	},
	// 自定义指令
	directives:{

		"focus":{
			update:function( el , binding ){ 
				if( binding.value ){
					el.focus();	
				}		
			}

		}
	}
});

function watchHashChange(){
	let hash = window.location.hash.substr(1);
	console.log( hash );
	VM.show = hash;
}

watchHashChange();

window.addEventListener("hashchange" ,  watchHashChange );

/*
	定义自定义指令：

		1.全局指令：

		// 注册一个全局自定义指令 `v-focus`
		Vue.directive('focus', {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function (el) {
			// 聚焦元素
			el.focus()
		}
		})

		2。局部指令
		directives: {
		focus: {
			// 指令的定义
			inserted: function (el) {
				el.focus()
			}
		}
		}

		3. 计算属性 ：computed：{} 根据已有状态，获取

		4.watch:{} 监听数据变化
			默认为浅监控，深度监控，需要配置 deep 属性为 true
*/


