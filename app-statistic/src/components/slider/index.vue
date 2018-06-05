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
                :open-names="openArr"
            >

                <Submenu  
                    v-for="( item , index ) in menu" 
                    :key="index" 
                    :name="index"
                >
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        {{ item.title }}
                    </template>
                    <MenuItem 
                        v-for="( value ) in item.list"
                        :key="value.routerName"
                        :name="value.routerName"
                    >
                        <Icon type="document-text"></Icon>    
                        {{ value.title }}  
                    </MenuItem>
                </Submenu >

            </Menu>
        </happy-scroll>

    </Sider>
</template>

<script>
import { Sider , Menu , Submenu , MenuItem , Icon } from 'iview';
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