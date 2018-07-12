<style scoped>
    .page-title{
        padding: 20px 0;
        /* color: #a7a7a9; */
        font-size: 14px;
        font-weight: 500;
    }
    .page-title .title{
        line-height: 32px;
        height: 32px;
    }
    .add-btn{
        background: #4286f5;
    }
</style>

<template>
    <div>
        <div class="page-title row-flex row-flex-space-between" >
            <div class="title" >
               <span class="level-II-title">快应用中心</span>            
                <Poptip 
                    trigger="hover" 
                    placement="bottom-start" 
                    width="300"
                    class="poptip-wrap"                
                >
                    <Icon type="ios-help-outline"></Icon>   
                    <div slot="content" >
                        <p>
                            指定时间内，用户对您快应用的访问情况，及时了解快应用的实时运营效果
                        </p>
                        <p class="mt10" >
                            更新频率： 今日数据，每10分钟更新一次；昨天以前数据，每天9点后出数据，每天更新一次
                        </p>
                    </div>
                </Poptip>  
            </div>
            <div class="add-btn-wrap">                 
                <Button class="add-btn" type="primary" icon="plus" >创建快应用</Button>
            </div> 
        </div>

        <!-- <Steps :current="1">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps> -->
        <div class="app-list-wrap" >
            <m-tbale :columns="column" :tableData="list" ></m-tbale>
        </div>
                
    </div>
</template>
<script>
    import { Steps , Step , Poptip , Icon , Button } from 'iview';
    import mTbale from '../components/table';

    export default {
        components:{
            Steps , Step , mTbale , Poptip , Icon , Button
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
                    },{
                        title: '操作',
                        key: 'do',
                        render: (h, params) => {
                            console.log('params' , params );
                            
                            return h('router-link', {
                                    props: {
                                        to: '/charts/trend',
                                    },
                                    attrs:{
                                       class:'look-more' 
                                    }
                                },'查看详情');
                        }
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