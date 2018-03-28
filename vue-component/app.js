Vue.component("my-button",{
    template:`<button @click="clickFn( type )" >{{ massage }}</button>`,
    data:function(){
        return (
            {
                text:"确定"
            }
        )
    },
    props:["massage" , "type" ],
    methods:{
        clickFn( type ){                   
        }
    }
});


new Vue({
    el:"#app"
});