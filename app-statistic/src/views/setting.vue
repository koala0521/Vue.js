<!-- // 设置 -->
<template>

    <div>
        <header>
            <router-link to="/index">首页</router-link>
            <router-link to="/setting">设置</router-link>
            <a href="#" @click="logout" >退出</a>
        </header>        
        <p>设置页面</p>
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
    };    

</script>

