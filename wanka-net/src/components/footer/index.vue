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
                <Col span="12" class="footer-part" >
                    <Row>
                        <Col span="8" >
                            <div class="footer-items" >
                                <h4>{{ footerText.attention.title }}</h4>
                                <div  class="items-infos items-infos-legal">
                                    <Icon type="chatbubbles"></Icon>
                                    <a href="#">                                                                     
                                        {{ footerText.attention.list[0] }}   
                                    </a>
                                </div>                             
                                <div  class="items-infos items-infos-legal">
                                    <Icon type="at"></Icon>
                                    <a href="#">
                                        {{ footerText.attention.list[1] }}   
                                    </a>                                    
                                </div>
                                <div  class="items-infos items-infos-legal">
                                    
                                    <Icon type="at"></Icon>
                                    <a href="#">
                                        {{ footerText.attention.list[2] }}  
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col  span="8"  >
                            <div class="footer-items" >
                                <h4>{{ footerText.contact.title }}</h4>
                                <div  class="items-infos items-infos-legal" >
                                    <router-link to="/investor/contact" >                                
                                        {{ footerText.contact.list[0] }}                                    
                                    </router-link>
                                </div>                             
                                <div  class="items-infos items-infos-legal" >
                                    <router-link to="/investor/contact" >                                        
                                        {{ footerText.contact.list[1] }}
                                    </router-link>                      
                                </div>
                            </div>
                        </Col>
                        <Col  span="8">
                            <div class="footer-items" >
                                <h4>{{ footerText.legalInfo.title }}</h4>
                                <div class="items-infos items-infos-legal" >
                                    <router-link to="/index/statement" >
                                        {{ footerText.legalInfo.list[0] }}
                                    </router-link>     
                                </div>                             
                            </div>
                        </Col>
                        
                    </Row>
                </Col>

                <Col span="12"   class="footer-part footer-copyright-wrap" >
                    <div class="footer-copyright" >
                        <p>Copyright © 1998 - 2018 Tencent. All Rights Reserved.玩咖公司 版权所有</p>
                        <p>京公网安备11010502027357</p>
                    </div>
                     
                </Col>
            </Row>
        
        </div>
    </Footer>

</template>

<script>
    import { Row , Col , Icon } from 'iview';
    export default {
        data(){
            return {
                'footerText':this.$t('footerText')[0]
            };
        },
        components:{
            Row , Col , Icon
        }
    };
    

</script>