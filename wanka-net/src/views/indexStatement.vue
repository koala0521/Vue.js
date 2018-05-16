// 首页 > 免责声明
<style scoped>

    .content{
        width: 900px;
        margin: 0 auto;
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
                    {{ introduce.BreadcrumbList[index].title }}
                </BreadcrumbItem>

            </Breadcrumb>
        </div>

        <div class="content" >
            <Card
                :bordered="false"
                dis-hover 
                class="cotent-item last" 
            >
                <p slot="title" >
                    {{ introduce.title }} 
                    
                </p>
                <div class="card-cont" v-html="introduce.html" >

                </div>

            </Card>
        </div>
    </div>
</template>
<script>

    import { Breadcrumb , BreadcrumbItem } from 'iview';
    import { Card , Icon } from 'iview';

    export default {
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
                        path:'/'
                    },
                    {
                        path:''
                    }
                ],
                // 语言包
                introduce : this.$t("content")[0].indexStatement,

            }
        }
    };
    
</script>