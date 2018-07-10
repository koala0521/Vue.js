<style scoped >
    .slider-menu{
        position: fixed;
        top: 76px;
        /* height: 100%; */
        background: #e4e4e4;
        bottom: 0;
        padding-bottom: 190px;
        border-top: 2px solid #f9fafc;
    }
    .slider-menu .menu-item{
        padding: 11px 0;
        text-align: center;
    }
    .show-notice .slider-menu{
        top:126px;
    }    

    .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
       background: #4c84ff;
       color: #fff;
    }   
    .slider-menu .ivu-menu-item-group-title{
        text-align: center;
    } 
    .menu-wrap{
        padding-top: 42px;
        text-align: center;
    }
    .menu-item{
        cursor: pointer;
    }
    .menu-item-active{
       background: #4c84ff;
       color: #fff;
    }
    .menu-group-title{
        /* padding: 14px 0; */
        line-height: 48px;
        font-weight: normal;
        font-size: inherit;
    }

</style>

<template >
    <Sider class="slider-menu" :style="{ background: '#fff',width:'130px','min-width':'130px','max-width':'130px' }" >
        <!-- <happy-scroll resize size="5" class="pb20" >
            <Menu 
                :active-name="active" 
                width="125px"
                @on-select="changeMenu"
                mode="vertical"
            >
                <MenuGroup   
                    v-for="( item , index ) in menu" 
                    :key="index" 
                    :name="index"
                    :title="item.title"
                >
                    <MenuItem 
                        v-for="( value ) in item.list"
                        :key="value.routerName"
                        :name="value.routerName"
                        class="menu-item"
                    >
                        <Icon type="social-buffer-outline"></Icon>  
                        {{ value.title }}  
                    </MenuItem>
                </MenuGroup  >

            </Menu>
        </happy-scroll> -->
        <ul class="menu-wrap" >
            <li>
                <h3 class="menu-group-title" >                    
                    <Icon type="social-buffer-outline"></Icon> 
                    <span class="ml8" >快应用概况</span>
                </h3>
                <div class="menu-item menu-item-active" >趋势分析</div>
            </li>
        </ul>

    </Sider>
</template>

<script>
import { Sider , Icon } from 'iview';
// Menu , Submenu , MenuItem, MenuGroup
// import { HappyScroll } from 'vue-happy-scroll';
    export default {
        data(){
            return {
                active:this.$route.name
            }
        },
        computed:{
            // openArr(){
            //     return this.menu.map( (item , index) =>{
            //         return index
            //     });
            // }
        },
        components:{
            Sider,
            Icon,
            // Menu,
            // Submenu ,
            // MenuItem,
            // HappyScroll,
            // MenuGroup 
        },
        props:['menu'],
        methods:{
            changeMenu(name){
                this.$router.push({
                    name
                });
            }
        },
    };

</script>