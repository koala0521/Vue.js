<style scoped >
    .ivu-layout-header{
        background: #fff;
        border: 1px solid #dddee1;
    }
    .layout-logo{
        width: 300px;
        height: 60px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 0px;
        left: 0px;
        cursor: pointer;
    }
    .layout-logo img{
        width: 100%;
        height: 100%;
    }
    .ivu-menu{
        border:none;
    }
    .layout-ceiling-main{
        float: right;
    }
    .layout-ceiling-main span{
        cursor: pointer;
    }
    .layout-ceiling-main .active{
        color: #2d8cf0;
    }
    .cont-width{
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
    }
    .ivu-layout-header ul:after{
        height: auto;
    }
    .layout-logo .ivu-menu-item-active , .layout-logo .ivu-menu-item-active:hover{
        border: none
    }
</style>

<template>
    <Header :style="{position: 'fixed', width: '100%', top:'0',zIndex:999}">
        <Menu 
            class="cont-width"  
            mode="horizontal" 
            theme="light" 
            :active-name="name"  
            @on-select="changeRouter" 
            ref="header_menu"
        >
            <div class="layout-logo" @click="tohome" >
                <!-- <img src="../../assets/img/logo.png" alt="玩咖"> -->
                <Logo></Logo>
            </div>
           
            <div class="layout-nav">
                <MenuItem name="infos">
                    <Icon type="stats-bars"></Icon>
                    <!-- 公司信息             -->
                    {{ menu[0] }}            
                </MenuItem>
                <MenuItem name="culture">
                    <Icon type="stats-bars"></Icon>
                    <!-- 企业文化 -->
                    {{ menu[1] }}            

                </MenuItem>
                <MenuItem name="system">
                    <Icon type="stats-bars"></Icon>
                    <!-- 业务体系 -->
                    {{ menu[2] }}            
                </MenuItem>

                <MenuItem name="investor">
                    <Icon type="stats-bars"></Icon> 
                    <!-- 投资者关系           -->
                    {{ menu[3] }}              
                </MenuItem>
            </div>
            <div class="layout-ceiling">
                <div class="layout-ceiling-main">
                    <span @click="changeLan('zh-CN')" :class="{ active : isCN }" >简</span> |
                    <span  @click="changeLan('zh-TW')" :class="{ active : isTW }">繁</span> |
                    <span  @click="changeLan('en-US')" :class="{ active : isEN }">EN</span> 
                </div>
            </div>

        </Menu>
    </Header>
</template>
<script>

    import Logo from '../logo';
    export default{
        data(){
            return {
                'menu':this.$t('menu')
            };
        },
        components:{
            Logo
        },
        computed:{            
            name(){
                let pathArr = this.$route.path.split("/");
                return pathArr[1] || '';
            },
            lan(){
                return this.$store.getters.lan;
            },
            isCN(){
                return this.lan === 'zh-CN'
            },
            isTW(){
                return this.lan === 'zh-TW'
            },
            isEN(){
                return this.lan === 'en-US'
            }
        },
        methods:{
            // 跳转路由
            changeRouter(name){

                this.$router.push({
                    name
                });
            },
            tohome(){

                this.$router.push({
                    name:'index'
                });

                // 更新导航菜单选中状态
                this.$nextTick(() => {
                    this.$refs.header_menu.updateActiveName();
                });
            },
            // 切换语言
            changeLan( lan ){
                localStorage.setItem('language',lan);
                window.location.reload();
            }
        }
    };
</script>