<template>
    <div>
        登陆页
        <button @click="login" >登陆</button>
    </div>
</template>
<script>
    export default{
        methods:{
            login(){
                this.$store.dispatch('login');
                this.$router.push({
                    name:'list'
                });
            }
        }
    }
    
</script>