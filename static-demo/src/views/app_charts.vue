<style scoped>
    .slider-menu{
        position: fixed;
        /* top: 60px; */
        /* height: 100%; */
        background: #e4e4e4;
        /* bottom: 0; */
        padding-bottom: 190px;
        border-top: 2px solid #f9fafc;
        width: 150px;
    }
    .page-content-cont{
        margin-left: 130px;
    }
</style>

<template>

    <div class="content-wrap content-width relative" >       
        <div class="slider-menu">
            <h3>left-menu</h3>
            <ul>
                <li>
                <router-link to="/charts">趋势分析</router-link>
            </li>
                <li>
                <router-link to="/charts/day">今日概况</router-link>
            </li>
            </ul>
        </div>
        <div class="page-content-cont"  >
            <router-view></router-view>
        </div>  
    </div>

</template>
