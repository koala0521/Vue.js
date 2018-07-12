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
        min-width: 980px;
    }
    #content-warp{
        background: #f7f8fa;
        margin-top: 60px;
    }
</style>

<template>
    <div>
        <div id="header" class="tac" >
            
            <Header></Header>

            <!-- 
            <div class="notice">提醒广大开发者，获取快应用统计数据前，需先集成快应用统计SDK，具体请参阅开发者文档</div> 
            -->
        </div>
        <!-- 关闭提示信息时， 增加类命 hide-notice 即可-->
        <div id="content-warp" class="prl30 content-warp ptb10" >
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Header from '../components/header';

    export default {
        components:{
            Header
        },
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
