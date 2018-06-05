<style scoped>
    .content-wrap{
        margin-top: 64px;
        height: 100%;
        position: relative;
        z-index: 10;
    }
    .slider-menu{
        position: fixed;
        top: 64px;
        left: 0;
        height: 100%;
        background: #e4e4e4;
    }
    .notice{
        margin-top: 64px;
        background: #3c3c3c;
        color: #fff;
        line-height: 50px;
        width: 100%;
        position: fixed;
        z-index: 100;
    }
    .show-notice{
        margin-top: 104px;
    }
    .show-notice .slider-menu{
        top:104px;
    }
</style>
<template>
<div>
    <Header></Header>
    <div class="notice tac">
        通知：啦啦啦啦啦啦啦啦啦啦
    </div> 
    
    <Layout class="content-wrap show-notice" >       
        <Slider 
            class="slider-menu" hide-trigger 
            :menu="sliderData"        
        >

        </Slider>
        <Layout class="page-content-cont"  >
           <Content>
                <router-view></router-view>
            </Content>         
        </Layout>  
    </Layout>
</div>
</template>
<script>
    import Header from '../components/header';
    import Slider from '../components/slider';
    import { Content , Layout } from 'iview';
    export default {
        data(){
            return {
                sliderData:[
                    {
                        title:'快应用概况',
                        list:[
                            {
                                title:'今日概况',
                                routerName:'today'
                            },
                            {
                                title:'趋势分析',
                                routerName:'trend'
                            },
                            {
                                title:'用户活跃度',
                                routerName:'activity'
                            },
                            {
                                title:'用户留存度',
                                routerName:'retention'
                            },
                        ]
                    },
                    {
                        title:'渠道分析',
                        list:[
                             {
                                title:'手机厂商',
                                routerName:'vendor'
                            }
                        ]
                    },
                    {
                        title:'页面分析',
                        list:[
                            {
                                title:'受访页',
                                routerName:'visitedPage'
                            }
                        ]
                    },
                    {
                        title:'用户画像',
                        list:[
                            {
                                title:'地域分析',
                                routerName:'areaAnalysis'
                            },
                            {
                                title:'终端分析',
                                routerName:'terminalAnalysis'
                            },
                            {
                                title:'测试导航1',
                                routerName:'test1'
                            },
                            {
                                title:'测试导航2',
                                routerName:'test2'
                            },
                            {
                                title:'测试导航3',
                                routerName:'test3'
                            },
                            {
                                title:'测试导航4',
                                routerName:'test4'
                            },
                            {
                                title:'测试导航5',
                                routerName:'test5'
                            }
                        ]
                    }
                ]
            }
        },
        components:{
            Header,
            Content,
            Slider,
            Layout
        },
        methods:{
            logout(){
                this.$store.dispatch('loginOut');
                this.$router.push({
                    name:'login'
                });
            }
        }
    };
</script>