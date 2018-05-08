<style scoped >
    .cont-width{
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
    }
    .footer-wrap{
        height: 200px;
        background: #fff;
    }
    .t-border{
        border-top:1px solid #dddee1;
        padding-top: 20px;
    }
    .footer-items{
        text-align: left;
    }
    .footer-items a{
        color:#495060;
    }
    .footer-items h4{
        padding: 10px 0;
    }
    .footer-items .items-infos {
        padding: 6px 0;
    }
    .footer-copyright-wrap{
        vertical-align: bottom;
    }
    .footer-copyright{
        text-align: right;
        position: absolute;
        right: 0;
        bottom: 20px;
    }
    .footer-copyright p{
        padding: 6px 0;
    }
    .footer-part{
        height: 160px;
    }
    .footer-content{
        padding: 0 10px;
    }
</style>

<template>
    
    <Footer class="layout-footer-center footer-wrap">
        <div  class="cont-width t-border"  >

            <Row class="footer-content" >
                <i-col span="12" class="footer-part" >
                    <Row>
                        <i-col span="8" >
                            <div class="footer-items" >
                                <h4>关注我们</h4>
                                <div  class="items-infos items-infos-legal">
                                    <Icon type="chatbubbles"></Icon>
                                    <a href="#">微信公众号</a>
                                </div>                             
                                <div  class="items-infos items-infos-legal">
                                    <Icon type="at"></Icon>
                                    <a href="#">腾讯微博</a>                                    
                                    </div>
                                <div  class="items-infos items-infos-legal">
                                    
                                    <Icon type="at"></Icon>
                                    <a href="#">新浪微博</a>
                                </div>
                            </div>
                        </i-col>

                        <i-col  span="8"  >
                            <div class="footer-items" >
                                <h4>联系我们</h4>
                                <div  class="items-infos items-infos-legal" >
                                    <router-link to="/investor/contact" >商业合作</router-link>
                                </div>                             
                                <div  class="items-infos items-infos-legal" >
                                    <router-link to="/investor/contact" >市场合作</router-link>                      
                                </div>
                            </div>
                        </i-col>
                        <i-col  span="8">
                            <div class="footer-items" >
                                <h4>法律信息</h4>
                                <div class="items-infos items-infos-legal" >
                                    <router-link to="/index/statement" >免责声明</router-link>     
                                </div>                             
                            </div>
                        </i-col>
                        
                    </Row>
                </i-col>

                <i-col span="12"   class="footer-part footer-copyright-wrap" >
                    <div class="footer-copyright" >
                        <p>Copyright © 1998 - 2018 Tencent. All Rights Reserved.玩咖公司 版权所有</p>
                        <p>京公网安备11010502027357</p>
                    </div>
                     
                </i-col>
            </Row>
        
        </div>
    </Footer>

</template>

<script>
    
    export default {

    };
    

</script>