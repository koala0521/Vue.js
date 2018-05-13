<style scoped >
    .layout{
        border: 1px solid #d7dde4;
        background: #fff;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .cont-width{
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
    }
    .ivu-layout{
        background: #fff;
    }
    .ivu-layout-content{
        width: 100%;
        overflow-x: hidden;
    }
</style>

<template>
    <div class="layout">
        <Layout> 
            <wHeader  class="cont-width"  ></wHeader>
            <Content class="" :style="{margin: '64px auto', minHeight: '500px'}" >

                <router-view></router-view>
            
            </Content>
            <wFooter></wFooter>
        </Layout>
    </div>
</template>
<script>
    import wHeader from './components/header/index';
    import wFooter from './components/footer/index';
    import { Layout , Content } from 'iview';



    export default {
        components:{
            wHeader,
            wFooter,
            Layout,
            Content
        },
        computed:{
            // lan(){
            //     return this.$store.getters.lan;
            // }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            // 内容区元素
            this.contItems = document.querySelectorAll('div.cotent-item');
        },
        beforeDestroy() {

        },
        methods: {
            handleScroll(){
                console.log('页面滚动了');
                
            }
        }
    };
</script>