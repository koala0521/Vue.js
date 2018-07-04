<template>
    <div>
        <div class="ptb20 tac" >
            <router-link class="prl30" to="/home">主页</router-link>
            <router-link class="prl30" to="/charts">报表</router-link>
            <router-link class="prl30" to="/doc">文档</router-link>
            <button @click="logout" class="fr mr30" >退出</button>
        </div>
        <hr>
        <div class="prl30" >
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
