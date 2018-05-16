// 投资者关系 > 企业管制
<style scoped>

    .content{
        width: 900px;
        margin: 0 auto;
    }
    .cotent-item{
        margin-bottom: 0;
    }
</style>

<template>
  <div  class="cont-width" >
        <div class="ptb20" >
            <Breadcrumb separator=">" >

                <BreadcrumbItem 
                    v-for="item , index in BreadcrumbList"
                    :key="index"
                    :to="item.path"
                >
                    {{ localData.BreadcrumbList[index].title }}
                </BreadcrumbItem>
            </Breadcrumb>
        </div>    

        <div class="content" >
            <!-- 股东 -->
            <Card
                :bordered="false"
                dis-hover 
                class="cotent-item last" 
            >
                <p slot="title" >
                    {{ localData.shareholder.title }} 
                </p>
                <div class="card-cont" v-html="localData.shareholder.html" > </div>
            </Card>

            <!-- 董事会 -->
            <Card
                :bordered="false"
                dis-hover 
                class="cotent-item last" 
            >
                <p slot="title" >
                    {{ localData.boardDirectors.title }} 
                </p>
                <div class="card-cont" v-html="localData.boardDirectors.html" > </div>
            </Card>
            
            <!-- 董事会 -->
            <Card
                :bordered="false"
                dis-hover 
                class="cotent-item last" 
            >
                <p slot="title" >
                    {{ localData.BoardMember.title }} 
                </p>
                <div class="card-cont" v-html="localData.BoardMember.html" > </div>
            </Card>

        </div>
  </div>
</template>
<script>
    import { Card , Breadcrumb , BreadcrumbItem } from 'iview';

    export default{

        components:{
            Card,
            Breadcrumb,
            BreadcrumbItem
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
                // 语言包
                localData : this.$t("content")[0].ctrl,

            }
        }

    };
    
</script>