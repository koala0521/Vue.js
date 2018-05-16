// 投资者关系 > 联系我们
<style scoped>

    .content{
        width: 900px;
        margin: 0 auto;
    }
    .title{
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

</style>

<template>
    <div class="cont-width" >
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

        <div class="content contact-us" >
            <Card
                :bordered="false"
                dis-hover 
                class="cotent-item last" 
            >
                <p slot="title" class="mb10" >
                    {{ localData.title }}                     
                </p>
                <div class="card-cont" v-html="localData.html" >

                </div>

            </Card>
        </div>
    </div>
</template>
<script>
    import { Breadcrumb , BreadcrumbItem } from 'iview';
    import { Card , Icon } from 'iview';

    export default{
        components:{
            Breadcrumb,
            BreadcrumbItem,
            Card
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
                localData : this.$t("content")[0].contactUs,

            }
        }

    };
    
</script>