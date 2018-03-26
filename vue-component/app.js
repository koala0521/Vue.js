Vue.component("my-button",{
    template:`<button @click="clickFn(text , callBack )" >{{ massage }}</button>`,
    data:function(){
        return (
            {
                text:"确定"
            }
        )
    },
    props:["massage" , "callBack" ],
    methods:{
        clickFn( text , callBack ){
            console.log( this );

            callBack && callBack();          
        }
    }
});


new Vue({
    el:"#app"
});