// 投资者关系 > 财务报告
<style scoped>

    .content{
        width: 900px;
        margin: 0 auto;
    }
    .pdf-item{
        width: 20%;
        text-align: center;
        display: inline-block;
    }
    .pdf-item img{
        width: 112px;
        height: 145px;
        margin: 0 auto;
    }
    .list-title{
        border-bottom: 1px solid #dddee1;
    }
    .item-title{
        line-height: 2em;
        font-weight: 600;
        padding-right: 10px;
        width: 60px;
        display: inline-block;
   }
   .item-summary{
	   line-height: 2.2em;
	   font-size: 1em;
	   padding-bottom: 0.5em;
   }
   .items{
       border-bottom: 1px solid #dddee1;
   }
   .report-list li{
       float: left;
   }

</style>

<template>
    <div class="cont-width" >
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
            <Card
                :bordered="false"
                dis-hover 
                class="cotent-item last" 
            >
                <p slot="title" class="mb10" >
                    {{ localData.title }}                     
                </p>
                <div class="card-cont" >

                    <div 
                        class="report-list"  
                        v-for=" (value , key) in list" 
                        :key="key"
                    >
                        <p class="list-title pb10" >
                            {{ value.year }}
                        </p>
                        <ul class="ptb20 clear-both" >
                            <li 
                                class="pdf-item p10" 
                                v-for=" (item) in value.list"
                                :key="item.child_programa_id" 
                            >
                                <a :href="item.url" target="_blank" :title="item.title" >
                                    <img :src="item.img" alt="" srcset="">
                                    <p>
                                        <!-- <Tooltip :content="item.title" >
                                            {{ textClip( item.title , 8 ) }}
                                        </Tooltip> -->
                                        {{ textClip( item.title , 8 ) }}
                                    </p>

                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- 加载按钮 -->
                    <div v-show="hasMore" >
                        <Button 
                            type="ghost"  
                            long
                            @click="loadMore"
                        >
                            {{ clickMoreLocal }}
                        </Button>
                    </div>
                </div>

            </Card>
        </div>
    </div>
</template>
<script>
    import { Breadcrumb , BreadcrumbItem , Card , Tooltip , Button  } from 'iview';

    export default{
        components:{
            Breadcrumb,
            BreadcrumbItem,
            Card,
            Tooltip,
            Button
        },
        data(){
            return {
                // 面包屑数据
                BreadcrumbList : [
                    {
                        path:'/investor'
                    },
                    {
                        path:''
                    }
                ],
                // 记录页码
                cPage:1,

                // 是否显示查看更多
                hasMore:true,
                
                // 列表数据
                list:[
                    {
                        year:'2018',
                        list:[
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第四季度及全年业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
                            },
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第三季度业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
                            },
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第一季度业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
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
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
                            },
                            {
                                "child_programa_name": "",
                                "child_programa_id": "",
                                "title": "玩咖公布第一季度业绩",
                                "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                                "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
                            }  
                        ]
                    }
                ],

                // 语言包
                localData : this.$t("content")[0].financeReport,

                // 点击查看更多语言包
                clickMoreLocal : this.$t("clickToSeeMore")

            }
        },
        methods:{
            // 文字溢出处理
            textClip( text , len ){
                len  = len || text.length;
                if( len && text.length <= len ){
                    return text
                }
                return text.substr( 0 , len ) + '...'
            },
            loadMore(){
                ++this.cPage;
                console.log( this.cPage  );
                
            }
        }

    };
    
</script>