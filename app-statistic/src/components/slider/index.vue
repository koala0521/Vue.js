<style>
    .slider-menu{
        background: none;
        overflow-y: scroll;
    }
</style>

<template>
    <Sider :style="{background: '#e4e4e4',width:'200px'}" >
        <Menu class="slider-menu"  active-name="1" :style="{background: '#e4e4e4',width:'200px'}"  >
            <!-- <MenuGroup title="内容管理">
                <MenuItem name="0">
                    <Icon type="document-text"></Icon>                    
                    <router-link tag="span" to="">今日概况</router-link>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="chatbubbles"></Icon>                    
                    <router-link tag="span" to="">趋势分析</router-link>
                </MenuItem>
                <MenuItem name="1">
                    <Icon type="document-text"></Icon>                    
                    <router-link tag="span" to="">用户活跃度</router-link>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="chatbubbles"></Icon>                    
                    <router-link tag="span" to="">用户留存</router-link>
                </MenuItem>                
            </MenuGroup>
            <MenuGroup title="渠道分析">
                <MenuItem name="2">
                    <Icon type="chatbubbles"></Icon>                    
                    <router-link tag="span" to="">手机厂商</router-link>
                </MenuItem>  

            </MenuGroup>
            <MenuGroup title="页面分析">
                <MenuItem name="4">
                    <Icon type="heart-broken"></Icon>        
                    <router-link tag="span" to="">受访页</router-link>
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="用户画像">
                <MenuItem name="3">
                    <Icon type="heart"></Icon>                    
                    <router-link tag="span" to="">地域分析</router-link>
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="heart-broken"></Icon>                    
                    <router-link tag="span" to="">终端分析</router-link>
                </MenuItem>
                
            </MenuGroup>   -->

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
                    <li @click="changeMenu( value.routerName )" >
                        <Icon type="document-text"></Icon>    
                        {{ value.title }}  
                    </li>
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
            console.log( this.menu );
            
        }
    };

</script>