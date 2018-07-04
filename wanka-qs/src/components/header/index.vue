<style scoped >
.link , .dropdown-btn{
    color: #323232;
}
.new-tag{
    padding: 0 22px;
}
.new-tag:hover{
    color: #2d8cf0;    
}
.ivu-menu-item-active .link{

    color: #4385f6;
}

.placard{
    /* color: #FFF; */
    font-size: 16px;
}
.header{
    width: 100%;
    background: #fff;
    /* padding: 0; */
    z-index: 999;
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
    display: flex;
    justify-content: flex-end;
    height: 100%;
    line-height: 74px;
    padding-right: 110px;
}
.time{
    border-left: 1px solid #dddee1;
}

.header-menu{
    width: 912px;
}

.user-info{
    width: 288px;
}
.user-info , .user-info .select{
    height: 74px;
}
.user-info .select{
    width: 126px;
    padding: 22px 0;
    line-height: 32px;
}
.selet-chanel{
    /* color: #4a84ff; */
}

.layout-nav .ivu-menu-item.ivu-menu-item-active, 
.layout-nav .ivu-menu-item.ivu-menu-item:hover{
    color:#2d8cf0;
    border-bottom: 2px solid transparent;
}
.layout-nav .ivu-menu-item{
    padding: 0 22px;
}

.ivu-menu-item:hover .link{
    color: inherit;
}

</style>

<template>
    <Header class="header" :style="{position: 'fixed', width: '100%'}" >
        <Row class="content-width" > 
            <div span="18" class="fl header-menu" >
                <Menu 
                    theme="light" 
                    mode="horizontal" 
                    :active-name="currentNav" 
                    class="nav-wrap"
                    @on-select="menuChange"  
                
                >                                
                    <div class="layout-logo"
                        @click="toHome"
                    >
                        <img src="../../assets/img/logo.png" alt="logo">
                    </div>  
                    <div class="layout-nav clear-both">

                            <MenuItem name="trend" class="ivu-menu-item" >
                                快应用统计首页
                            </MenuItem>
                        <a class="link new-tag" target="_blank" href="https://www.quickapp.cn/myCenter/appManage/appList">开发者中心</a> 

                        <a class="link new-tag" target="_blank" href="https://bbs.quickapp.cn/">开发者论坛</a>
                            <MenuItem name="document" class="ivu-menu-item"  >                                
                                开发文档
                            </MenuItem>                       
                    </div>     
                </Menu>            
            </div>
            <div span="6" class="tar user-info fr" >
                <div>
                    <div span="12" class="select fl mr30" v-show="showChannel"  >
                        <div>
                            <Select v-model="activeVendor" placeholder="选择厂商" class="tac selet-chanel" style="width:126px">
                                <Option 
                                    v-for="item in vendorList" 
                                    :value="item.name" 
                                    :key="item.name"
                                >                                
                                    {{ item.title }}
                                </Option>
                            </Select>
                        </div>                 
                    </div>
                    <div span="12" class="select fr"  >
                        <div>
                            <span class="placard mr20 ml20" 
                                @click="showPlacard"
                                v-if="false"
                            >
                                <Icon type="android-notifications-none"></Icon>
                            </span>
                            
                            <Dropdown 
                                trigger="click" 
                                placement="bottom-end" 
                                class="dropdown-wrap" 
                                v-if="!!userName"
                                @on-click="dropdownFn"
                            >
                                <a 
                                    class="dropdown-btn" 
                                    href="javascript:void(0)"
                                    :title="userInfo.email ? userInfo.email : ''"
                                >
                                    {{ userName }}
                                    <Icon type="person"></Icon>
                                </a>
                                
                                <!-- <<DropdownMenu slot="list">
                                    <DropdownItem name="logout" >退出</DropdownItem>
                                    DropdownItem>修改资料</DropdownItem>
                                    <DropdownItem>修改帐号邮箱</DropdownItem>
                                    <DropdownItem>修改密码</DropdownItem>
                                    <DropdownItem>退出</DropdownItem>
                                </DropdownMenu> -->
                                
                            </Dropdown>     
                            <a v-if="!userName" href="https://www.quickapp.cn/" target="_blank" >请登录</a>                         
                        </div>                    
                    </div>
                </div>    
            </div>
        </Row>
        <Modal
            title="系统公告"
            v-model="showModal"
            class="header-modal"
        >
                <Collapse v-model="panel1">
                    <Panel name="1">
                        <span >史蒂夫·乔布斯</span> 
                        <span class="fr prl10 time" >2018-05-31</span>      
                        <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                    </Panel>
                    <Panel name="2">
                        <span >史蒂夫·乔布斯</span> 
                        <span class="fr prl10 time" >2018-05-31</span>    
                        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                    </Panel>
                    <Panel name="3">
                        <span >乔纳森·伊夫</span> 
                        <span class="fr prl10 time" >2018-05-31</span>    
                        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                    </Panel>
                </Collapse>
        </Modal>
    </Header>
</template>


<script>
    
    import { Header , Menu , MenuItem , Row , Col ,Dropdown , DropdownMenu, DropdownItem , Icon ,Modal ,Collapse,Panel , Button, Select , Option  } from 'iview';
    import util from '../../libs/util';
    
    export default {
        components:{
            Header , 
            Menu, 
            MenuItem, 
            Row , 
            Col , 
            Dropdown , 
            DropdownMenu , 
            DropdownItem, 
            Icon,
            Modal,
            Collapse,
            Panel,
            Button,
            Select , 
            Option
        },
        data(){
            return{
                showModal: false,
                panel1: '1',
                vendorList: [
                    {
                        'title':'请选择厂商',
                        'name':'0' 
                    },
                    {
                        'title':'小米',
                        'name':'xiaomi' 
                    },{
                        'title':'中兴',
                        'name':'zhongxing' 
                    },{
                        'title':'华为',
                        'name':'huawei' 
                    },{
                        'title':'金立',
                        'name':'jingli' 
                    },{
                        'title':'联想',
                        'name':'lianxiang' 
                    },{
                        'title':'魅族',
                        'name':'meizu' 
                    },{
                        'title':'努比亚',
                        'name':'nubiya' 
                    },{
                        'title':'oppo',
                        'name':'oppo' 
                    },{
                        'title':'vivo',
                        'name':'vivo' 
                    },{
                        'title':'一加',
                        'name':'yijia' 
                    }
                ],
                activeVendor:'0',
                currentNav: this.activeNav
            }
        },
        computed:{
            userName(){
                let info = this.$store.getters.userInfo || '';
                let name = info ? info.email : '';
                let len = 11;
                return (name.length > len ? util.textClip( name , len ) : name);
            },
            userInfo(){
                return this.$store.getters.userInfo || {};
            },
            showChannel(){

                return this.currentNav  === 'trend'
            }
        },
        props:[ 'activeNav' ],
        methods:{
            toHome(){
                // this.$router.push({
                //     name:'today'
                // });
                console.log('点击logo');                
            },
            showPlacard(){
                this.showModal = true;
            },
            menuChange( name ){

                if( name === 'SDK' || name === 'forum' ){
                    return
                }else{
                    this.$router.push({
                        name
                    });
                }

            },
            dropdownFn( name ){
                console.log( '退出' );
                util.ajaxToNet.post( '/api/login/logout' )
                .then(result=>{
                    console.log( 'result' , result );
                })
                .catch(err=>{
                    console.log( 'err' , err );
                });                
            }
        },
        watch:{
            // 选择厂商
            activeVendor( val ){
                this.$store.dispatch({
                    type:'selectVendor',
                    activeVendor:val
                });                
            }
        }
    };

</script>
