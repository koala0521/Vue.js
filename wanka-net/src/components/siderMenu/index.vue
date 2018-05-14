<style scoped >
    .sub-sider{
        position: fixed;
        top: 94px;
        width: 200px;
        text-align: right;
    }
    .menu-title{
       padding: 14px 24px;
       border-color: transparent;
   }
   a{
       color: #495060;
   }
</style>
<template>
    <div class="sub-sider" >
        <div class="menu-title ivu-card-head" >
            <p>{{ mainTitle }}</p>
        </div>
        <Menu 
            :active-name="cName"
            :style="{ width:'100%' }"
            @on-select="changeMenu"
            ref="siderMenu" 
        > 
            <MenuItem 
                v-for="( item , index ) in list"
                :name="index"
                :key="item.name"
            >
                {{ item.title }}
            </MenuItem>
        </Menu>  
    </div>
</template>

<script>
    import { scrollToTar } from '../../libs/util';

    import { MenuItem ,Menu } from 'iview';

    export default {
        components:{
            MenuItem ,Menu
        },
        props:["list",'mainTitle'],
        data(){
            return {
                cName:0,
                contItems:null
            }
        },
        computed:{

        },
        methods:{
            changeMenu(name){
                
                let cItem = this.contItems[name];
                if( !cItem ) return;

                let elTop = cItem && cItem.getBoundingClientRect().top;
                if( this.cName === name || !cItem ) return;            
                this.cName = name;
                scrollToTar( 600 , elTop - 65 );
            },
            updateActiveName(){            

                this.$nextTick(()=>{
                    this.$refs.siderMenu.updateActiveName();
                });
            }
        },
        mounted(){
            this.contItems = document.querySelectorAll('div.cotent-item');

        }
    };
    
</script>
