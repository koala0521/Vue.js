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
        <div class="chart mb30">
            <Card shadow class="hfull" >
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
                                :disabled="item.disabled"
                                :name="item.name"
                                divided
                            >
                                <span class="lf" >{{ item.title }}</span>
                                <span class="fr" >
                                    <Icon v-show="item.selected" type="checkmark-round" class="ml" ></Icon>
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
                            <span @click="item.selected=false" class="p6 pointer" >
                                <Icon type="ios-close-empty"></Icon>
                            </span> 
                        </span>
                    </div>
                    
                </div>
                <div>
                    <ve-line 
                        :data="chartData" 
                        height="360px" 
                        :judge-width="true" 
                        :clipOverflow="false"
                        :settings="chartSettings"
                        :extend="chartExtend"
                        :colors="colorList"
                ></ve-line>
                </div>
            </Card>            
        </div>
        <div class="table mb30">
            <Table stripe :columns="columns" :data="data1" ></Table>
        </div>
    </div>
    
</template>

<script>
    import { Row , Col , Poptip, Icon , Card , Dropdown, DropdownMenu , DropdownItem , Button , Table  } from 'iview';
    import VeLine from 'v-charts/lib/line'; 

    export default {
        data(){

            this.chartSettings = {
                labelMap: {
                    visitorTimes: '访问次数',
                    openTimes: '打开次数',
                    visitorPeoples:'访问人数',
                    stayDuration:'次均停留时长',
                    date:'日期'
                },
                dimension :['date'],
                metrics : ['visitorPeoples' ,'visitorTimes' ]
            }

            // 配置参数
            this.chartExtend = {

                // 指标按钮控制
                legend:{
                    // show:false
                    bottom : 10
                },
                // 控制整个图表
                grid:{
                    top:20
                },
                series: {
                    type:'line', // 图表类型必须配置
                    smooth: false,   // 是否平滑过渡
                    lineStyle:{
                        width:5
                    },
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    splitLine:{show: false},//去除网格线
                    // splitArea : {show : true},//保留网格区域 
                    axisLine: {
                        show:true,
                        lineStyle: {
                            // type: 'solid',
                            color: '#e5e5e5',//左边线的颜色
                            // width:'2'//坐标线的宽度
                        }
                    },
                    axisTick:{
                        show:true,
                        inside:true
                    }
                },
                yAxis :{
                    type : 'value',
                    splitLine:{show: false},//去除网格线
                    // splitArea : {show : true},//保留网格区域    
                    axisLine: {
                        show:true,
                        lineStyle: {
                            color:'#e5e5e5',
                        }
                    }, 
                    axisTick:{
                        show:true,
                        inside:true
                    }                                   
                }
            }

            return {                
                // 标题
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
                        'selected':true,
                        'disabled':false
                    },{
                        'title':'访问次数',
                        'name':'visitorTimes',
                        'selected':true,
                        'disabled':false
                    },{
                        'title':'打开次数',
                        'name':'openTimes',
                        'selected':false,
                        'disabled':true
                    },{
                        'title':'次均停留时长',
                        'name':'stayDuration',
                        'selected':false,
                        'disabled':false
                    }  
                ],
                chartData:{
                    rows: [
                        { 'date': '2018-05-22', 'visitorPeoples':1000 , 'visitorTimes': 32371, 'openTimes': 19810 },
                        { 'date': '2018-05-23', 'visitorPeoples':3000 , 'visitorTimes': 12328, 'openTimes': 4398 },
                        { 'date': '2018-05-24', 'visitorPeoples':3000 ,  'visitorTimes': 92381, 'openTimes': 52910 },
                        { 'date': '2018-05-25', 'visitorPeoples':2000 ,  'visitorTimes': 12328, 'openTimes': 4398 },
                        { 'date': '2018-05-26', 'visitorPeoples':3000 ,  'visitorTimes': 92381, 'openTimes': 62910 },
                        { 'date': '2018-05-27', 'visitorPeoples':3000 ,  'visitorTimes': 32371, 'openTimes': 19810 },
                        { 'date': '2018-05-28', 'visitorPeoples':6000 ,  'visitorTimes': 12328, 'openTimes': 4398 },
                        { 'date': '2018-05-29', 'visitorPeoples':9000 ,  'visitorTimes': 92381, 'openTimes': 52910 },
                        { 'date': '2018-05-30', 'visitorPeoples':3000 ,  'visitorTimes': 12328, 'openTimes': 4398 },
                        { 'date': '2018-05-31', 'visitorPeoples':5000 ,  'visitorTimes': 92381, 'openTimes': 62910 },
                        { 'date': '2018-06-01', 'visitorPeoples':3000 ,  'visitorTimes': 12328, 'openTimes': 4398 },
                    ],
                    loading: true    
                },
                colorObj : {
                    visitorTimes:'#4187f6',
                    openTimes:'#fa9706',
                    visitorPeoples:'#5b4947',
                    stayDuration:'#ee6e73'
                },
                // 列表数据
                columns: [
                    {
                        title: '日期',
                        key: 'name'
                    },
                    {
                        title: '新用户数',
                        key: 'age'
                    },
                    {
                        title: '访问人数',
                        key: 'address'
                    },{
                        title:'访问次数',
                        key: 'address'
                    },{
                        title:'打开次数',
                        key: 'address'
                    },
                    {
                        title:'跳出率',
                        key: 'address'
                    }
                ],
                data1:[]
            }
        },
        computed:{
            // 当前选中的数据
            selectedDrop(){
                return this.chartDropList.filter(item=>{
                    return item.selected === true
                });
            },
            // 当前选中的 name 
            selectdName(){
                return this.selectedDrop.map(item=>{
                    return item.name
                });
            },
            // 颜色数组
            colorList(){
                return this.selectdName.map(item=>{
                    return this.colorObj[ item ]
                });
            }            
        },
        methods:{
            changeSelect(name){
                this.chartDropList.forEach(item=>{
                    if( item.name === name && !item.disabled ){
                        item.selected = !item.selected;
                    }
                });          
            },
        },
        watch:{
            selectedDrop:{
                deep:true,
                handler(val, oldVal){                            
                    this.chartSettings.metrics = this.selectdName || [];

                }
            }
        },
        created(){

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
            DropdownItem,
            VeLine,
            Table 
        }
    };
    

</script>

