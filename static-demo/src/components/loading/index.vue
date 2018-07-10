<style scoped>
    .table-spin{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-color: hsla(0,0%,100%,.8);
    }

    .table-spin .center{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .table-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }    
    .table-spin .loader{
        width: 42px;
        height: 42px;
    }
</style>

<template>

    <div class="table-spin" v-show="loading" >
        <Spin class="center" >
            <div class="loader">
                <Icon type="load-c" size=40 class="table-spin-icon-load"></Icon>
            </div>               
        </Spin>
    </div>

</template>
<script>
    import { Spin , Icon } from 'iview';
    export default {
        props:['loading'],
        components:{
            Spin , Icon 
        }
    };

    
</script>