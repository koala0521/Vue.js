<template>
    <div>
        <h3>快应用中心</h3>

        <!-- <Steps :current="1">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps> -->
        <div class="app-list-wrap" >
            <mTbale :columns="column" :tableData="list" ></mTbale>
        </div>
                
    </div>
</template>
<script>
    import { Steps , Step } from 'iview';
    import mTbale from '../components/table';

    export default {
        components:{
            Steps , Step , mTbale
        },
        data(){
            return {
                'column':[
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                'list':[
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    };
</script>