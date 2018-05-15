<style scoped >
   .wrap{
       padding-top: 30px;
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
   .item-title{
        line-height: 2em;
        font-size: 1.1em;
        font-weight: bold;
        padding-right: 20px;
   }
   .item-summary{
	   line-height: 2.2em;
	   font-size: 1em;
	   padding-bottom: 0.5em;
   }
   .item-text{
	   line-height: 2em;
   }
   .team-item{
       border-bottom: 1px solid #e9eaec;
       padding: 10px 0;
   }
</style>

<template>
    <div class="wrap cont-width" > 

        <siderMenu :list="siderMenuData.list" :mainTitle="siderMenuData.mainTitle" ></siderMenu>
        <div class="sub_cont" >
            <!-- 公司动态 -->
            <cardList 
                :title="news.title" 
                :btntext="news.btnText" 
                :url="trendUrl"
                :list="news.list"
                class="cotent-item"
            >
            </cardList>

            <!-- 时间轴 -->
            <Card 
			 	:bordered="false"
				class="cotent-item" 
				dis-hover 
			>

                <p slot="title">
					<!-- <Icon type="ios-film-outline"></Icon> -->
					{{ TimelineData.title }}
                    
				</p>
                <div class="card-cont" > 
                    <Timeline>

                        <TimelineItem class="line-top" >  
                        </TimelineItem>

                        <TimelineItem 
                            v-for="item , index in TimelineData.list"
                            :class="{ int : !!item.time }"
                            :key="index"
                        >  
                            <p v-if=" !!item.time " class="time">{{ item.time }}</p>
                            <p v-if=" !!item.content "  class="content">{{ item.content }}</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </Card>

            <Card

                :bordered="false"
				dis-hover 
				class="cotent-item last" 
            >
                <p slot="title">
					<!-- <Icon type="ios-film-outline"></Icon> -->
					{{ team.title }}
                    
				</p>
                <div class="card-cont" > 
                    <p>
                        <span class="item-title" >{{ team.leader }} </span> 
                        <span class="item-summary" >{{ team.JobTitle }}</span>
                    </p>
                    <p class="item-text team-item">
                        {{ team.description }}
                    </p>
                    <ul>
                        <li 
                            class="team-item" 
                            v-for="item , index in team.leaderList"
                            :key="index"
                        >
                            <span class="item-title" >{{ item.name }} </span> 
                            <span class="item-summary" >{{ item.JobTitle }}</span>
                        </li>
                    </ul>
                </div>

            </Card>

        </div>          
    </div>
</template>

<script>
    import cardList from '../components/card';
    import siderMenu from '../components/siderMenu';    
    import { Timeline , TimelineItem , Card , Icon } from 'iview';

    export default {
        data(){
            return {

                // 左侧菜单数据
                siderMenuData : this.$t("content")[0].ABOUT.siderMenu,
                // 公司动态静态数据
                news : {                    
                    title : this.$t("content")[0].ABOUT.news.title,
                    btnText : this.$t("content")[0].ABOUT.news.btnText,
                    list:[
                        {
                            "title": "玩咖公布2018第四季度及全年业绩",
                            "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                            "ctime": "1525342411"
                        },
                        {
                            "title": "玩咖公布2018第三季度业绩",
                            "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                            "ctime": "1525342411"
                        },
                        {
                            "title": "玩咖公布2018第二季度及中期业绩",
                            "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                            "ctime": "1525342411"
                        },{
                            "title": "玩咖公布2018第四季度及全年业绩",
                            "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                            "ctime": "1525342411"
                        },
                        {
                            "title": "玩咖公布2018第三季度业绩",
                            "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                            "ctime": "1525342411"
                        }
                    ]

                },
                // 发展历程
                TimelineData : this.$t("content")[0].ABOUT.Timeline,
                // 管理团队
                team : this.$t("content")[0].ABOUT.team,
            }
        },
        components:{
            cardList,
            siderMenu,
            Timeline , 
            TimelineItem,
            Card,
            Icon
        },
        computed:{
            trendUrl(){
                console.log( this.$route.path );
                
                return this.$route.path + '/trend';
            }
        }
    };
    
</script>