Vue.component("custom-select",{
    template:`<div class="component" >	
                <h2>	
                    
                    <input 
                        type="text" 
                        v-model:value="value"
                        @input="showOption"
                    />
                    
                    <span> {{title}} </span>  
                
                </h2>
                <option-list 
                    v-bind:value="value" 
                    v-bind:list="list" 
                    v-show="showList" 
                    v-on:select="selectValue"
                ></option-list>      
            </div>`,
    data:function(){
        return (
            {
                value:"",
                showList:false
            }
        )
    },
    props:["title" , "list" ],
    methods:{
        showOption:function(){    
 
            if( this.value.trim() ){
                this.showList = true;
                return
            }
            
            this.showList = false;
        },
        selectValue:function(value) {

            this.value = value;
        }
    }
});

Vue.component( "option-list" , {
    template:`<ul class="list" >
                                    
            <li v-for= "value of list" v-on:click="changeParentVal(value)"  >{{value}}</li>
            
        </ul>`,
    props:[ "value" , "list"],
    methods:{
        changeParentVal:function(val) {
            this.$emit( "select" , val );
        }
    }
});


new Vue({
    el:"#app",
    data:{

        list1:[ "a" , "b" , "c" ],
        list2:["1","2","3"]
    }
});