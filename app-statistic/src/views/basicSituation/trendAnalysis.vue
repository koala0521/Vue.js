<!-- // 趋势分析 -->
<style scoped>

    .selet-time .active{
        background: #4c84ff;
        color: #fff;
    }
    .subtotal-wrap{
        display: flex;
        height: 114px; 
        background: #fff;       
    }
    .subtotal-wrap .space{
        width: 100px;
    }
    .subtotal-wrap .total-item{
        flex: 1;
        padding: 20px 0;
    }  
    .total-item > div{
        padding-left: 20px;
    }  
    .total-item>div:nth-of-type(1){
        font-size: 12px;
        color: #666;
        line-height: 28px;
        border-left: 1px solid #f3f3f3;
    }
    .total-item>div:nth-of-type(2){
        font-size: 26px;
        line-height: 26px;
        font-weight: 600;
        padding-top: 8px;
        color: #333;
        border-left: 1px solid #f3f3f3;
        /* margin-top: 10px; */
    }    

    /* 图表 */
    .chart{
        height: 470px;
        padding: 0 30px;
        background: #fff;
    }
    /* 图表 > 下拉菜单 */
    .select{
        width: 175px;
    }
</style>

<template>

    <div class="content-cont-width prl30">
        <div class="ptb10" >
            <span class="level-II-title" >
                {{ title }}
            </span>
            <Poptip 
                trigger="hover" 
                placement="bottom-start" 
                width="300"
                class="poptip-wrap"
            
            >
                <Icon type="ios-help-outline"></Icon>   
                <div slot="content" >
                    <p>
                        提供快应用今日整体运营情况，包括各时间段维度相关指标的趋势、渠道分布、入口页面等数据分析
                    </p>
                    <p class="mt10" >
                        更新频率： 每1小时更新一次
                    </p>
                </div>
            </Poptip>            
        </div>
        <Row class="mb24" >
            <Col span="20" >
                <div class="selet-time">
                    <Button 
                        v-for="item in timeList" 
                        :key="item.name" 
                        :class="{ active: activeTime === item.name }"
                        @click="activeTime = item.name"
                        class="mr12"
                        type="ghost"
                    > 
                        {{ item.title }}
                    </Button>
                </div>
            </Col>
            <Col span="4" class="tar" >
                <Button type="primary" icon="ios-download-outline" >导出数据</Button>
            </Col>            
            
        </Row>
        <div class="subtotal-wrap mb30">
            <div class="space" ></div>
            
            <div v-for="item in subtotalList" :key="item.name" class="total-item" >                                
                <div>
                    <span>{{ item.title }}</span>
                    <Poptip trigger="hover" placement="bottom-start"  width="200" class="poptip-wrap">                        
                        <Icon type="ios-help-outline"></Icon>    
                        <div slot="content" >
                            <div>
                                {{ item.description }}
                            </div>
                        </div>
                    </Poptip> 
                </div>
                <div>1111</div>
 
            </div>            
        </div>
        <div class="chart">
            <Card shadow >
                <div slot="title" >
                    <span class="title-text">趋势图</span>
                    <Dropdown 
                        style="margin-left: 20px"
                        trigger="click"
                        @on-click="changeSelect"
                        placement="bottom-end"                                        
                    >
                        <Button >
                            选择显示数据（可多选）
                            <Icon type="arrow-down-b"></Icon>
                        </Button>
                        <DropdownMenu slot="list" class="select" >

                            <DropdownItem 
                                v-for="item in chartDropList" 
                                :key="item.name"
                                :selected="item.selected === true"
                                :name="item.name"
                                divided
                            >
                                <span class="lf" >{{ item.title }}</span>
                                <span class="fr" >
                                    <Icon type="checkmark-round" class="ml" ></Icon>
                                </span> 
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <!-- 选择展示 -->
                    <div class="inline-block ml20" >
                        <span class="mr16" 
                            v-for="item in selectedDrop"
                            :key="item.name"
                        >
                            {{ item.title }} 
                            <Icon type="ios-close-empty"></Icon>
                        </span>

                        <!-- <span class="mr16">
                            访问人数 
                            <Icon type="ios-close-empty"></Icon>
                        </span>
                        <span class="mr16">
                            访问人数
                            
                            <Icon type="ios-close-empty"></Icon>
                        </span> -->
                    </div>
                    
                </div>
            </Card>            
        </div>
    </div>
    
</template>

<script>
    import { Row , Col , Poptip, Icon , Card , Dropdown, DropdownMenu , DropdownItem , Button } from 'iview';
    
    export default {
        data(){
            
            return {                
                title : this.$route.meta.title,
                timeList:[
                    {
                        'title':'今日',
                        'name' : 'today'
                    },{
                        'title':'昨日',
                        'name' : 'lastday'
                    },{
                        'title':'7日',
                        'name' : 'sen_days'
                    },{
                        'title':'30日',
                        'name' : 'thirty_days'
                    },
                ],
                activeTime:'today',
                // 小计数据
                subtotalList:[
                    {
                        'title':'新用户数',
                        'name':'new_users',
                        'selected':true,
                        'description':'首次访问小程序页面的用户数，同一用户多次访问不重复计；'
                    },{
                        'title':'访问人数',
                        'name':'visitorPeoples',
                        'selected':true,
                        'description':'访问小程序内所有页面的总用户数，同一用户多次访问不重复计；'                        
                    },{
                        'title':'访问次数',
                        'name':'visitorTimes',
                        'selected':true ,
                        'description':'访问小程序内所有页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问；'                          
                    },{
                        'title':'打开次数',
                        'name':'openTimes',
                        'selected':true,
                        'description':'打开小程序总次数，用户从打开小程序到主动关闭小程序或超时退出计为一次；'                             
                    },{
                        'title':'次均停留时长',
                        'name':'stayDuration',
                        'selected':true,
                        'description':'平均每次打开小程序停留在小程序页面的总时长，即小程序停留总时长/打开次数。'                           
                    },{
                        'title':'跳出率',
                         'name':'jumpOut',
                        'selected':true,
                        'description':'只浏览了一个页面便离开了网站的访问次数占总的访问次数的百分比。'                           
                    }
                ],
                // 图表下拉选数据
                chartDropList:[
                   {
                       'title':'访问人数',
                       'name':'visitorPeoples',
                       'selected':true
                   },{
                       'title':'访问次数',
                       'name':'visitorTimes',
                       'selected':true
                   },{
                       'title':'打开次数',
                       'name':'openTimes',
                       'selected':false
                   },{
                       'title':'次均停留时长',
                       'name':'stayDuration',
                       'selected':false
                   }  
                ]
            }
        },
        computed:{
            selectedDrop(){
                return this.chartDropList.filter(item=>{
                    return item.selected === true
                });
            }
        },
        methods:{
            changeSelect(name){
                this.chartDropList.forEach(item=>{
                    if( item.name === name ){
                        item.selected = !item.selected;
                    }
                });              
            },
        },
        components:{
            Poptip,
            Icon,
            Button,
            Row, 
            Col,
            Card , 
            Dropdown,
            DropdownMenu , 
            DropdownItem
        }
    };
    

</script>

