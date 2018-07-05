<template>
    <div>
        <h3>app 列表</h3>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <Steps :current="1">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content=""></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
                
    </div>
</template>

<script>
    import { Steps , Step } from 'iview';
    export default {
        components:{
            Steps , Step
        }
    };
</script>