<!-- // 登录页面 -->
<template>

    <div>
        <router-link to="/index">首页</router-link>
        <router-link to="/setting">设置</router-link>
        <p>登陆页面</p>
        <button @click="login" > 登陆 </button>
    </div>
    
</template>

<script>
    export default {
        methods:{
            login(){
                this.$store.dispatch('login');
                this.$router.push({
                    name:'today'
                });
            }
        }
    };

</script>
