<style>
    .slider-menu{
        /* background: none;
        overflow-y: scroll; */
    }
</style>

<template>
    <Sider  :style="{background: '#fff',width:'200px'}" >
        <happy-scroll resize size="5" >
            <Menu 
                class="slider-menu"  
                :active-name="active" 
                width="195px"
                @on-select="changeMenu"
                mode="vertical"
            >

                <MenuGroup 
                    v-for="( item , index ) in menu" 
                    :key="index" 
                    :title="item.title"
                >
                    <MenuItem 
                        v-for="( value ) in item.list"
                        :key="value.routerName"
                        :name="value.routerName"
                    >
                        <Icon type="document-text"></Icon>    
                        {{ value.title }}  
                    </MenuItem>
                </MenuGroup>

            </Menu>
        </happy-scroll>

    </Sider>
</template>

<script>
import { Sider , Menu , MenuGroup, MenuItem , Icon } from 'iview';
import { HappyScroll } from 'vue-happy-scroll';
    export default {
        data(){
            return {
                active:this.$route.name
            }
        },
        components:{
            Sider,
            Menu,
            MenuGroup,
            MenuItem,
            Icon,
            HappyScroll
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