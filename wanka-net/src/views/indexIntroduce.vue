// 首页 > 公司介绍
<style scoped>

.content{
    width: 900px;
    margin: 0 auto;
}

</style>

<template>
    <div class="cont-width" >
        <div class="ptb20" >
            <Breadcrumb separator=">">
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem>公司介绍</BreadcrumbItem>
            </Breadcrumb>
        </div>

        <div class="content" >
            <Card
                :bordered="false"
                dis-hover 
                class="cotent-item last" 
            >
                <p slot="title" >
                    <!-- {{ contactUs.title }}  -->
                    公司信息
                </p>
                <!-- <div class="card-cont" v-html="contactUs.html" ></div> -->
                    <p class="pb20" > 45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九</p>
                    <p> 45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九</p>

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
        computed:{
            breadcrumbList(){
                return this.$route.matched
            }
        },
        mounted(){
            let arr = this.$route.path.split('/');
            arr.shift();
            let router = '';
            let list = arr.map(item=>{
                router += '/' +item;
                return  router;
             });
        }
    };
    
</script>
