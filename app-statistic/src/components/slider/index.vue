<style>
    .slider-menu{
        background: none;
        overflow-y: scroll;
    }
</style>

<template>
    <Sider :style="{background: '#e4e4e4',width:'200px'}" >
        <Menu 
            class="slider-menu"  
            active-name="1" 
            :style="{background: '#e4e4e4',width:'200px'}"              
            @on-select="changeMenu"
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
    </Sider>
</template>

<script>
import { Sider , Menu , MenuGroup, MenuItem , Icon } from 'iview';
    export default {
        components:{
            Sider,
            Menu,
            MenuGroup,
            MenuItem,
            Icon
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
        }
    };

</script>