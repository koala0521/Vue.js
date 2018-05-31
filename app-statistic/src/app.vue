<style scoped>
    .my-layout{
        height: 100%;
    }
</style>

<template>

    <Layout class="my-layout" >
        <router-view></router-view>
    </Layout>

</template>
<script>
    import { Layout } from 'iview';
    export default {
        data() {
            return {

            };
        },
        components:{
            Layout
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>