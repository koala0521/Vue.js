<template>
    <div>
        <header>
            <router-link to="/index">首页</router-link>
            <router-link to="/setting">设置</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>