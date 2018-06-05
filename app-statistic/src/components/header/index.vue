<style scoped >
.link , .dropdown-btn{
    color: #999999;
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
    margin-left: 150px;
}
.time{
    border-left: 1px solid #dddee1;
}

</style>

<template>
    <Header class="header" :style="{position: 'fixed', width: '100%'}" >
        <Row>
            <Col span="20" >
                <Menu theme="light" mode="horizontal" active-name="home" class="nav-wrap"  >                                
                    <div class="layout-logo"
                        @click="toHome"
                    >
                        <img src="../../assets/img/logo.png" alt="logo">
                    </div>  
                    <div class="layout-nav clear-both">
                        <MenuItem name="home" class="" >
                            <a class="link" href="#">快应用统计首页</a>
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
                <span class="placard mr20 ml20" 
                    @click="showPlacard"
                >
                    <Icon type="android-notifications-none"></Icon>
                </span>
                
                <Dropdown trigger="click" placement="bottom-end" class="dropdown-wrap" >
                    <a class="dropdown-btn" href="javascript:void(0)">
                        koala
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
    
    import { Header , Menu , MenuItem , Row , Col ,Dropdown , DropdownMenu, DropdownItem , Icon ,Modal ,Collapse,Panel  } from 'iview';

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
            Panel 
        },
        data(){
            return{
                showModal:false,
                panel1:'1'
            }
        },
        methods:{
            toHome(){
                // this.$router.push({
                //     name:'today'
                // });
                console.log('点击logo');
                
            },
            showPlacard(){
                this.showModal =true;
            }
        }
    };

</script>
