<style scoped>
    .header{
        padding: 0 30px;
        height: 60px;
        line-height: 60px;
        box-shadow: #eaeaea 0 0 1px 1px;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        border-radius: 3px;
        position: relative;
        top: 15px;
        float: left;
    }
    .layout-logo img{
        width: 100%;
        height: 100%;
        vertical-align: top;
    }    
    .header .user-info{
        border-left: 1px solid #eaeaea;
    }
    .header .ivu-menu-item.ivu-menu-item-active, 
    .header .ivu-menu-item.ivu-menu-item:hover{
        color:#fff;
        background: #4286f5;
        /* border-bottom: 2px solid transparent; */
    }    
    .header .user-name{
        color: #333333;
    }
    .header .select-app{
        margin-left: 56px;
    }
    .header .select{
        width: 140px;
    }

</style>

<template>
    <div class="header">
        <Row type="flex" justify="space-between" >
            <Col span="8">
                <div class="layout-logo">
                    <img src="../../assets/img/logo.png" alt="logo">
                </div>
                <div class="select-app inline-block">
                    <Select class="select" v-model="appid" >
                        <Option v-for="item in appList" :value="item.value" :key="item.value">
                            {{ item.label }}
                        </Option>
                    </Select>
                </div>            
            </Col>
            <Col span="8" class="tac f-hide" >
                <Menu 
                    theme="light" 
                    mode="horizontal"
                    class="row-flex row-flex-center" 
                    :active-name="currentItem" 
                    @on-select="menuChange"  
                >                                 

                    <MenuItem name="list" class="ivu-menu-item" >
                        主页
                    </MenuItem>

                    <MenuItem name="trend" class="ivu-menu-item"  >                                
                        报表
                    </MenuItem>    
                </Menu> 
            </Col>
            <Col span="8" >
                <div class="clear-both hfull" >
                    <div class="user-info fr pl30 hfull" >
                        <Dropdown @on-click="onDropMenu" >
                            <a href="javascript:void(0)" class="user-name" >
                                {{ userName }}
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name="login" >退出</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div 
                        class="ivu-menu-item fr mr30 prl20 hfull" 
                        @click="toDocouemnt"  
                        :class="{'ivu-menu-item-active': currentItem === 'doc' }"
                    >
                        文档</div>
                </div>            
            </Col>
        </Row>
    </div>
</template>
<script>
    import { Menu , MenuItem , Row , Col , Dropdown , DropdownMenu , DropdownItem , Select , Option , Icon } from 'iview';
    import util from '../../libs/util.js';
    export default {
        components:{

            Menu , MenuItem , Row , Col , Dropdown , DropdownMenu , DropdownItem , Select , Option , Icon
        },
        computed:{
            userName(){
                let name = this.userInfo.name || '';
                return util.textClip( name , 10 );
            },
            // appid(){
            //   return this.$store.getters.appId;  
            // },
            appList(){
                return this.$store.getters.appList;
            }

        },
        data(){
            return {
                currentItem: this.$router.currentRoute.name,
                userInfo: this.$store.getters.userInfo || {},
                appid: this.$store.getters.appId
            }
        },
        watch:{
            'appid'(val , oldVal){

                this.$store.dispatch('undateAppId',{
                    appId : val
                });
            },
            //  监听路由变化
            '$route'( to , from ){                
                this.currentItem = to.name;
            }
        },
        methods:{
            menuChange(name){
                this.$router.push({
                    name
                });
            },
            toDocouemnt(){
                this.$router.push({
                    path: '/doc'
                });
            },
            onDropMenu( name ){

                if( !name ) return              
                this.$router.push({
                    name
                });
            }
        }
    };
</script>
