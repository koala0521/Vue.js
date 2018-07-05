<template>
    <div>
        <div class="left">
            <h3>left-menu</h3>
            <router-link to="/charts">趋势分析</router-link>
            <router-link to="/charts/day">今日概况</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
