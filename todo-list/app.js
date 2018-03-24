
var list = [
	// {
	// 	title:"吃饭打豆豆",
	// 	isChecked:false //状态为false，为不选中  任务未完成
	// },
	// {
	// 	title:"吃饭",
	// 	isChecked:false //状态为false，为不选中  任务未完成
	// },
	// {
	// 	title:"妙味课堂",
	// 	isChecked:true   //状态为true，为选中    任务完成
	// }
];

let VM = new Vue({
	el:".main",
	data:{
		list,
		show:"all",
		todo:"",
		edittingId:null
	},
	methods:{
		unCompleted:function(){
			
			let unCompletedList = this.list.filter((item)=>{
				return item.isChecked ===  false
			});

			return unCompletedList.length
		},

		addTodo:function(ev) {
			this.list.push({
				title:this.todo,
				isChecked:false,
				id:Math.random()
			});
			this.todo = "";
		},
		removeTodo(item){
			var index = this.list.indexOf( item );
			this.list.splice( index , 1 );
			
		},
		editTodo(item){
			console.log( item );
			
			this.edittingId = item.id;
		},
		edited(){
			this.edittingId = "";
		}
			

	},
	// 自定义指令
	directives:{

		"focus":{
			update( el , binding ){ 
				console.log( el , binding );
				binding.value && el.focus();				
			}

		}
	}
});

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

*/


