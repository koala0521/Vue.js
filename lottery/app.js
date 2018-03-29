Vue.component("lottery-demo",{
    template:`
        <div class="warp" >
            <div class="lottery-warp" >
                <img 
                    class="content-img" 
                    v-bind:class="{ move: isMove }" 
                    src="img/item.png" 
                    ref="content"
                /> 
            </div>    
            <img v-on:click="startMove"  class="btn" src="img/btn.png" />

            <button v-on:click="reset" > 重置 </button> 
        </div>
    `,
    methods:{
        startMove(){
            if(this.hasLottery) return
            this.isMove = true;
            this.hasLottery = true; 
            setTimeout(() => {
                
                this.stopMove();

            }, 2000);
        },
        stopMove(){

            // 模拟后台请求到的结果
            const result = Math.floor(Math.random() * (this.map.length - 1) );

            let content = this.$refs.content;     
                this.isMove = false;
                this.isSlow = true;    


            let endDeg = (this.map[ result ].min + this.map[ result ].max)/2;                 
        
            content.style.transform = "rotate("+ endDeg +"deg)";  
            setTimeout(() => {
                alert( this.map[ result ].text );
            }, 1000);

        },
        reset(){
            let content = this.$refs.content;
            this.isMove = false;
            this.isSlow = true;   
            this.hasLottery = false;
            content.style.transition = "none";
            // content.style.transform = "rotate(0deg)";           
        }
    },
    data:function() {
        return({
            isMove:false,
            isSlow:false,
            hasLottery : false,
            deg:55,
            map:[
                {
                    text:"一等奖",
                    min:0,
                    max:50
                },  
                {
                    text:"二等奖",
                    min:51,
                    max:102                   
                },
                {
                    text:"三等奖",
                    min:102,
                    max:153                   
                },    
                {
                    text:"四等奖",
                    min:153,
                    max:204                   
                },    
                {
                    text:"五等奖",
                    min:204,
                    max:255                   
                },      
                {
                    text:"六等奖",
                    min:255,
                    max:306                   
                },   
                {
                    text:"再接再厉",
                    min:306,
                    max:360                   
                }
            ]
        })
    }
});


new Vue({
    el:"#app"
});

