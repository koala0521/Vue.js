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
    .show-notice .slider-menu{
        top:126px;
    }    
</style>

<template >
    <Sider class="slider-menu" :style="{background: '#fff',width:'200px'}" >
        <happy-scroll resize size="5" class="pb20" >
            <Menu 
                :active-name="active" 
                width="195px"
                @on-select="changeMenu"
                mode="vertical"
                :open-names="openArr"
            >

                <MenuGroup   
                    v-for="( item , index ) in menu" 
                    :key="index" 
                    :name="index"
                    :title="item.title"
                >
                    <!-- <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        {{ item.title }}
                    </template> -->
                    <MenuItem 
                        v-for="( value ) in item.list"
                        :key="value.routerName"
                        :name="value.routerName"
                    >
                        <Icon type="document-text"></Icon>    
                        {{ value.title }}  
                    </MenuItem>
                </MenuGroup  >

            </Menu>
        </happy-scroll>

    </Sider>
</template>

<script>
import { Sider , Menu , Submenu , MenuItem, MenuGroup  , Icon } from 'iview';
import { HappyScroll } from 'vue-happy-scroll';
    export default {
        data(){
            return {
                active:this.$route.name
            }
        },
        computed:{
            openArr(){
                return this.menu.map( (item , index) =>{
                    return index
                });
            }
        },
        components:{
            Sider,
            Menu,
            Submenu ,
            MenuItem,
            Icon,
            HappyScroll,
            MenuGroup 
        },
        props:['menu'],
        methods:{
            changeMenu(name){
                console.log( name );
                
                this.$router.push({
                    name
                });
            }
        },
        mounted(){
           console.log('=========this.$route.name===========================');
           console.log( this.$route.name );
           console.log('==========this.$route.name==========================');
        }
    };

</script>