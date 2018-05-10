<style scoped >
   .wrap{
       padding-top: 30px;
   }
   .menu-wrap{
       /* text-align: right; */
   }
   .menu-title{
       padding: 14px 24px;
       border: none;
   }
    .page-content{
        padding-left: 30px;
    }
    .sub_sider{
        position: fixed;
        /* margin-left: 15px; */
        top: 94px;
        width: 200px;
        text-align: right;
    }
    .sub_cont{
        margin-left: 200px;
        padding-left: 30px;
    }
    .part{
        height: 500px;
    }
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>

<template>
    <div class="wrap cont-width" > 

        <siderMenu></siderMenu>
        <div class="sub_cont" >
            <cardList title="公司动态" :url="trendUrl" ></cardList>
            <cardList title="评论管理" ></cardList>
            <cardList title="举报管理" ></cardList>
            <!-- 时间轴 -->
            <Timeline>
                <TimelineItem>
                    <p class="time">1976年</p>
                    <p class="content">Apple I 问世</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">1984年</p>
                    <p class="content">发布 Macintosh</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2007年</p>
                    <p class="content">发布 iPhone</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2010年</p>
                    <p class="content">发布 iPad</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2011年10月5日</p>
                    <p class="content">史蒂夫·乔布斯去世</p>
                </TimelineItem>
            </Timeline>
        </div>          
    </div>
</template>

<script>
    import cardList from '../components/card';
    import siderMenu from '../components/siderMenu';    
    import { Timeline , TimelineItem } from 'iview';

    export default {
        data(){
            return {

            };
        },
        computed:{
            trendUrl(){
                console.log( this.$route.path );
                
                return this.$route.path + '/trend';
            }
        },
        components:{
            cardList,
            siderMenu,
            Timeline , TimelineItem 
        }
    };
    
</script>