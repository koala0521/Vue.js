<style scoped>
    #header{
        position: fixed;
        height: auto;
        left: 0;
        top: 0;
        width: 100%;
        transition: 300ms;
        z-index: 99;
        background: #fff;
    }
    #content-warp{

    }
    .content-warp{
        margin-top:91px;
    }
    .hide-notice{
        margin-top: 60px;
    }
    .notice{
        background: #090f29;
        color: #fff;
        line-height: 50px;
        width: 100%; 
        z-index: 100;
        /* display: none; */
    }
</style>

<template>
    <div>
        <div id="header" class="tac" >
            <div class="menu ptb10">
                <router-link class="prl30" to="/home">主页</router-link>
                <router-link class="prl30" to="/charts">报表</router-link>
                <router-link class="prl30" to="/doc">文档</router-link>
                <button @click="logout" class="fr mr30" >退出</button>
            </div>
            <div class="notice">提醒广大开发者，获取快应用统计数据前，需先集成快应用统计SDK，具体请参阅开发者文档</div>
        </div>
        <!-- 关闭提示信息时， 增加类命 hide-notice 即可-->
        <div id="content-warp" class="prl30 content-warp ptb20" >
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
      methods:{
          logout(){              
                this.$store.dispatch('loginOut');
                this.$router.push({
                    name:'login'
                });
          }
      }
    }
    
</script>
