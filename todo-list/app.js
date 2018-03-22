
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
		todo:""
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
				isChecked:false
			});
			this.todo = "";
		}

	}
});


