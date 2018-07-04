
<template>
    <div class="table mb30 relative">
        <Table 
            stripe 
            :columns="columns" 
            :data="tableData"             
        ></Table>
    </div>

</template>

<script>
    import { Table } from 'iview';
    export default {
        props:['columns' , 'tableData' ],
        components:{
            Table , 
        }
    };
</script>
