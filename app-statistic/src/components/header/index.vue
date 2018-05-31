<template>
    <Header class="header" :style="{position: 'fixed', width: '100%'}" >
        <Row>
            <Col span="20" >
                <Menu theme="primary" mode="horizontal" active-name="1" class="nav-wrap"  >                                
                    <div class="layout-logo"
                        @click="toHome"
                    >
                        <img src="../../assets/img/logo.png" alt="logo">
                    </div>  
                    <div class="layout-nav clear-both">
                        <MenuItem name="home" class="ml40" >
                            <a class="link" href="#">开发者中心首页</a>
                        </MenuItem>
                        <MenuItem name="document" >
                            <a class="link" href="#">开发文档</a>
                        </MenuItem>     
                        <MenuItem name="SDK" >
                            <a class="link" href="#">SDK下载</a>
                        </MenuItem>     
                        <MenuItem name="forum" >
                            <a class="link" href="#">开发者论坛</a>
                        </MenuItem>
                    </div>     
                </Menu>            
            </Col>
            <Col span="4" class="tar prl20" >
                <span class="placard prl20" >
                    <Icon type="android-notifications-none"></Icon>
                </span>
                
                <Dropdown trigger="click" placement="bottom-end" class="dropdown-wrap" >
                    <a class="dropdown-btn" href="javascript:void(0)">
                        菜单(左)
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>

    </Header>
</template>
<style scoped >
.link , .dropdown-btn{
    color: #FFF;
}
.placard{
    color: #FFF;
    font-size: 16px;
}
.header{
    width: 100%;
    background: #2d8cf0;
    /* padding: 0; */
}
.dropdown-wrap{
    font-size: 14px;
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
.layout-nav{
    margin-left: 200px;
}

</style>


<script>
    
    import { Header , Menu , MenuItem , Row , Col ,Dropdown , DropdownMenu, DropdownItem , Icon } from 'iview';

    export default {
        components:{
            Header , Menu ,MenuItem, Row , Col , Dropdown , DropdownMenu , DropdownItem, Icon
        },
        methods:{
            toHome(){
                // this.$router.push({
                //     name:'today'
                // });
                console.log('点击logo');
                
            }
        }
    };

</script>
