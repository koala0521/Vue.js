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
        
        <!-- <div class="sub_sider" >
            <div class="menu-title ivu-card-head" >
                <p>公司信息</p>
            </div>
            <Menu active-name="1-1" :style="{ width:'100%' }" > 
                <MenuItem name="1-1">
                    <a href="#company_charity">公司动态</a>
                </MenuItem>
                <MenuItem name="1-2">
                    <a href="#company_dev">发展历程</a>    
                
                </MenuItem>
                <MenuItem name="1-3">
                    <a href="#company_board">管理团队</a>
                </MenuItem> 
            </Menu>  
        </div> -->
        <siderMenu></siderMenu>
        <div class="sub_cont" >
            <cardList title="文章管理" ></cardList>
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
    export default {
        data(){
            return {

            };
        },
        components:{
            cardList,
            siderMenu
        }
    };
    
</script>