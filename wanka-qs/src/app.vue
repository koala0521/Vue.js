<style scoped>
    .my-layout{
        height: 100%;
        background: #f9fafc;
    }
</style>

<template>

    <Layout class="my-layout" >
        <router-view></router-view>
    </Layout>

</template>
<script>
    import { Layout , Message } from 'iview';
    import util from './libs/util';
    export default {
        data() {
            return {

            };
        },
        components:{
            Layout,
            Message
        },
        created(){
            
        },
    };
</script>