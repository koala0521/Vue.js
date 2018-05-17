// 公司信息 > 公司动态
<style scoped>

    .content{
        width: 900px;
        margin: 0 auto;
    }

</style>

<template>
  <div  class="cont-width" >
        <div class="ptb20" >
            <Breadcrumb separator=">" >

                <BreadcrumbItem 
                    v-for="(item , index) in BreadcrumbList"
                    :key="index"
                    :to="item.path"
                >
                    {{ localData.BreadcrumbList[index].title }}
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="content" >
            <time-line-card :list="list" :title="localData.title" ></time-line-card>

            <!-- 加载按钮 -->
            <div v-show="hasMore" class="mb40" >
                <Button 
                    type="ghost"  
                    long
                    @click="loadMore"
                >
                    {{ clickMoreLocal }}
                </Button>
            </div>

        </div>
        <Spin size="large" fix v-if="loading"></Spin>    
  </div>
</template>
<script>
    import { Breadcrumb , BreadcrumbItem , Card , Tooltip , Button ,  Spin } from 'iview';
    import { formatDate } from '../libs/util';
    import timeLineCard from '../components/timeLineCard';

    export default{
        components:{
            Breadcrumb,
            BreadcrumbItem,
            Card,
            Tooltip,
            Button,
            Spin,
            timeLineCard
        },
        data(){
            return {
                // 面包屑数据
                BreadcrumbList : [
                    {
                        path:'/infos'
                    },
                    {
                        path:''
                    }
                ],

                list:[
                    {
                        year:'2018',
                        list:[
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第四季度及全年业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                                "ctime": "1462590847"
                            },
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第三季度业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                                "ctime": "1462590847"
                            },
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第一季度业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                                "ctime": "1462590847"
                            }                    
                        ]
                    },
                    {
                        year:'2017',
                        list:[
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第二季度业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                                "ctime": "1462590847"
                            },
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第一季度业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                                "ctime": "1462590847"
                            }  
                        ]
                    }
                ],
                // 记录页码
                cPage:1,

                // 是否显示查看更多
                hasMore:true,
                // 加载中
                loading:false,

                // 语言包
                localData : this.$t("content")[0].companyTrend,

                // 点击查看更多语言包
                clickMoreLocal : this.$t("clickToSeeMore")                
            }
        },
        methods:{
            formatTime(ctime){
                let time = ctime*1000;
                return formatDate(time , '/' ).split(' ')[0]
            },
            loadMore(){
                ++this.cPage;
                this.list.push({
                    year:'2016',
                    list:[
                        {
                            "child_programa_name": "",
                            "child_programa_id": "",
                            "title": "玩咖公布第二季度业绩",
                            "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                            "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                            "ctime": "1462590847"
                        },
                        {
                            "child_programa_name": "",
                            "child_programa_id": "",
                            "title": "玩咖公布第一季度业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩",
                            "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                            "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                            "ctime": "1462590847"
                        }  
                    ]
                });
               
                this.loading = true;

                setTimeout(()=>{
                    this.loading = false;
                },2000)
            
                
            }
        }
    };
    
</script>