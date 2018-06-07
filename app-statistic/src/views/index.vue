<style scoped>
    .content-wrap{
        margin-top: 76px;
        height: 100%;
        position: relative;
        z-index: 10;
        margin-bottom: 190px;
    }
    .notice{
        margin-top: 76px;
        background: #3c3c3c;
        color: #fff;
        line-height: 50px;
        width: 100%;
        position: fixed;
        z-index: 100;
        display: none;
    }
    .show-notice .notice{
        display: block;
    }
    .show-notice .content-wrap{
        margin-top: 126px;
    }
    .close{
        font-size: 30px;
        line-height: 30px;
    }
</style>
<template>
<div class="relative hfull" :class="{'show-notice' : showNotice}"  >
    <Header></Header>
    <div class="notice tac">
        通知：啦啦啦啦啦啦啦啦啦啦
        
        <div class="fr p10 close" @click="closeNotice" >
            <Icon type="ios-close-outline"></Icon>
        </div>
    </div> 
    
    <Layout class="content-wrap content-width relative" >       
        <Slider 
            hide-trigger 
            :menu="sliderData"        
        >

        </Slider>
        <Layout class="page-content-cont"  >
           <Content>
                <router-view></router-view>
            </Content>         
        </Layout>  
    </Layout>
    <Footer></Footer>
</div>
</template>
<script>
    import Header from '../components/header';
    import Slider from '../components/slider';
    import Footer from '../components/footer';
    

    import { Content , Layout , Icon } from 'iview';
    export default {
        data(){
            return {
                sliderData:[
                    {
                        title:'快应用概况',
                        list:[
                            // {
                            //     title:'今日概况',
                            //     routerName:'today'
                            // },
                            {
                                title:'趋势分析',
                                routerName:'trend'
                            },
                            // {
                            //     title:'用户活跃度',
                            //     routerName:'activity'
                            // },
                            // {
                            //     title:'用户留存度',
                            //     routerName:'retention'
                            // },
                        ]
                    },
                    // {
                    //     title:'渠道分析',
                    //     list:[
                    //          {
                    //             title:'手机厂商',
                    //             routerName:'vendor'
                    //         }
                    //     ]
                    // },
                    // {
                    //     title:'页面分析',
                    //     list:[
                    //         {
                    //             title:'受访页',
                    //             routerName:'visitedPage'
                    //         }
                    //     ]
                    // },
                    // {
                    //     title:'用户画像',
                    //     list:[
                    //         {
                    //             title:'地域分析',
                    //             routerName:'areaAnalysis'
                    //         },
                    //         {
                    //             title:'终端分析',
                    //             routerName:'terminalAnalysis'
                    //         }
                    //     ]
                    // }
                ],
                showNotice:true
            }
        },
        components:{
            Header,
            Content,
            Slider,
            Layout,
            Footer,
            Icon
        },
        methods:{
            logout(){
                this.$store.dispatch('loginOut');
                this.$router.push({
                    name:'login'
                });
            },
            // 关闭提醒
            closeNotice(){
                this.showNotice =false;
            }
        }
    };
</script>