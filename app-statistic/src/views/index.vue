<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
<div>
    <ul>
        <li><router-link :to="{name:'today'}"> today </router-link></li>
        <li><router-link :to="{name:'trend'}"> trend </router-link></li>
        <li></li>
        <li></li>
    </ul>
    <router-view></router-view>
</div>
</template>
<script>
    export default {

    };
</script>