// 投资者关系 > 投资者关系动态 > 详情页
<style scoped>

    .content{
        width: 900px;
        margin: 0 auto;
        min-height: 800px;
    }
    .detail-cont p {
        line-height: 2em;
        margin: .5em 0;
        color: #5e6267;
    }
    .detail-title{
        font-size: 1.6em;
    }
    .detail-cont{
        font-size: 1.2em;
    }
    .detail-img-wrap{
        height: 200px;
        margin: 20px auto;
        width: 100%;
    }
    .detail-img-wrap img{
        width: 100%;
        height: 100%;
    }
    i{
        font-style: normal;
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
                    {{ item.title }}
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="content" >
            <Row class="detail-title" >
                <Col span="4" class="tar pr30" >
                    {{ formatTime( detail.ctime ) }}
                </Col>
                <Col span="20" >
                    {{ detail.title }}
                </Col>
            </Row>
            <Row class="detail-cont" > 
                <Col span="20" offset="4" >
                    <div class="detail-img-wrap" >
                        <img src="http://filemha.wankacn.com/20170712/68a7a04e06a182486dcc497be1a1ecc4.jpg" alt="">
                    </div>
                    <p>
                        <i>[ </i>
                        <i v-html="localData.time" ></i>
                        <i> ]</i>
                    </p>

                    <p>2018-03-22</p>

                    <p>
                        <i>[ </i>
                        <i v-html="localData.theme" ></i>
                        <i> ]</i>
                    </p>

                    <p>腾讯控股有限公司2017年第四季度及全年业绩香港路演</p>

                    <p>
                        <i>[ </i>
                        <i v-html="localData.content" ></i>
                        <i> ]</i>                        

                    <p>腾讯的管理层成员在香港会见投资者</p>

                    <p>
                        <i>[ </i>
                        <i v-html="localData.address" ></i>
                        <i> ]</i>                            
                    </p>

                    <p>香港</p>

                    <p>
                        <i>[ </i>
                        <i v-html="localData.company" ></i>
                        <i> ]</i>                     
                    </p>

                    <p>瑞士銀行</p>
                </Col>
            </Row>

        </div>
        <Spin size="large" fix v-if="loading"></Spin>    
  </div>
</template>
<script>
    import { Breadcrumb , BreadcrumbItem ,  Spin , Row , Col } from 'iview';
    import { formatDate } from '../libs/util';

    export default{
        components:{
            Breadcrumb,
            BreadcrumbItem,
            Row , 
            Col,
            Spin
        },
        data(){
            return {
                // // 面包屑数据
                // BreadcrumbList : [
                //     {
                //         path:'/investor'
                //     },
                //     {
                //         path:''
                //     }
                // ],
                detail:{
                    "child_programa_name": "",
                    "child_programa_id": "",
                    "title": "玩咖公布2018第四季度及全年业绩",
                    "id": Math.random() ,
                    "ctime": "1462590847"
                },
                // 加载中
                loading:false,

                // 语言包
                localData : this.$t("content")[0].detailPage,              
            }
        },
        computed:{

            // 面包屑数据
            BreadcrumbList (){
                let arr = this.$route.path.split('/').slice(1);
                let path = '';
                let routes = arr.map( (item ,index) =>{
                    return {
                        path:path += '/' + item,
                        title: this.localData.BreadcrumbList[index].title
                    }
                });
                routes[ routes.length - 1 ].path = '';
                routes[ routes.length - 1 ].title = this.detail.title;

                return routes
                
            },
        },
        methods:{
            formatTime(ctime){
                let time = ctime*1000;
                return formatDate(time , '.' ).split(' ')[0]
            },
        }
    };
    
</script>