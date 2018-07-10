<!-- // 趋势分析 -->
<style scoped>

    .selet-time .active{
        background: #4c84ff;
        color: #fff;
    }
    .selet-time .btn{
        padding: 2px 10px;
    }
    .subtotal-wrap{
        display: flex;
        height: 114px; 
        background: #fff;       
    }
    .subtotal-wrap .space{
        width: 78px;
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
    .subtotal-wrap .total-item:nth-of-type(2) > div{
        border-color: transparent;
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
    .export-btn{
        background-color: #4286f5;
        padding: 5px 13px;
    }

    /* 图表 */
    .chart{
        height: 470px;
        padding: 0 30px;
        background: #fff;
        color: #333333;
        font-size: 14px;
        z-index: 1;
    }
    .btn{
        color: #333333;
        background-color: #f9f9f9;
        padding: 0;
    }
    .btn .iocn-wrap{
        width: 16px;
    }
    /* 图表 > 下拉菜单 */
    .select{
        width: 175px;
    }
</style>

<template>
    <div class="content-cont-width pl30">
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
                        指定时间内，用户对您快应用的访问情况，及时了解快应用的实时运营效果

                    </p>
                    <p class="mt10" >
                        更新频率： 今日数据，每10分钟更新一次；昨天以前数据，每天9点后出数据，每天更新一次
                    </p>
                </div>
            </Poptip>            
        </div>
        <!-- 时间选择 -->
        <Row class="mb24" >
            <Col span="20" >
                <div class="selet-time pt6">
                    <Button 
                        v-for="item in timeList" 
                        :key="item.name" 
                        :class="{ active: activeTime === item.name }"
                        @click="activeTime = item.name"
                        class="mr12 btn"
                        type="ghost"
                    > 
                        {{ item.title }}
                    </Button>
                </div>
            </Col>
            <Col span="4" class="tar" >
                <Button class="export-btn" @click="exportData" type="primary" icon="ios-download-outline" >导出数据</Button>
            </Col>            
            
        </Row>
        <!-- 统计数据 -->
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
                <div>{{ item.totalNum }}</div>
 
            </div>            
        </div>
        <div class="chart mb30 relative">
            <Card shadow class="hfull" >
                <div slot="title" >
                    <span class="title-text">趋势图</span>
                    <Dropdown 
                        style="margin-left: 20px"
                        trigger="click"
                        @on-click="changeSelect"
                        placement="bottom-end"                                        
                    >
                        <Button class="btn" >
                            选择显示数据（可多选）
                            <span class="iocn-wrap" >
                                <Icon type="arrow-down-b"></Icon>
                            </span>
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
                    >
                    </ve-line>
                </div>
            </Card>             
            <Loading :loading="chartLoading" ></Loading>           
        </div>
        <div class="mb30 relative">
            <myTable
                :columns="columns" 
                :tableData="tableData" 
                :loading="tableLoading"   
            ></myTable>  
            <Loading :loading="tableLoading" ></Loading>    
        
        </div> 
        <div class="page mb30 tar" >
            <Page 
                show-total show-elevator show-sizer
                size="small" 
                placement="top"
                :total="total" 
                :page-size="pageSize"
                @on-change="changePage"
                @on-page-size-change="changeSize"
                :page-size-opts="pageSizeOpts"
                :current="current"
            ></Page>
        </div>
        
    </div>
    
</template>

<script>
    import { Row , Col , Poptip, Icon , Card , Dropdown, DropdownMenu , DropdownItem , Button , Table , Page , Spin } from 'iview';
    import VeLine from 'v-charts/lib/line'; 
    import util from '../libs/util';
    import myTable from '../components/table';
    // import loginVue from '../login.vue';      
    import Loading from '../components/loading';

    export default {
        data(){

            this.chartSettings = {
                labelMap: {
                    'new_comer_cnt':'新用户数',
                    'page_cnt': '访问次数',
                    'open_cnt': '打开次数',
                    'visitor_cnt':'访问人数',
                    // avg_stay_time:'次均停留时长',
                    // bounce_rate:'跳出率',
                    'date':'日期'
                },
                // 图表横坐标
                dimension :['date'],
                // 图表默认展示的数据
                metrics : ['new_comer_cnt','visitor_cnt']
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
                        width:3
                    },
                    animation:true,
                    // 隐藏折线图坐标小圆点 ，如果 false 则只有在 tooltip hover 的时候显示。
                    showSymbol: false
                },
                xAxis: {
                    type: 'category',                    
                    boundaryGap: true,// 两侧留白
                    splitLine:{show: false},//去除网格线
                    // splitArea : {show : true},//保留网格区域 
                    axisLine: {
                        show:true,
                        lineStyle: {
                            // type: 'solid',
                            color: '#999999',//左边线的颜色
                            // width:'2'//坐标线的宽度
                        }
                    },
                    // 刻度线设置
                    axisTick:{
                        show:true,
                        inside:true
                    },
                    // 坐标轴文字设置
                    nameTextStyle:{
                        align: 'center'
                    }
                },
                yAxis :{
                    type : 'value',
                    splitLine:{show: false},//去除网格线
                    axisLine: {
                        show:true,
                        lineStyle: {
                            color:'#999999',
                        }
                    }, 
                    axisTick:{
                        show:true,
                        inside:true
                    },
                    // min:0,
                    max: function(value) {
                        return Math.max(value.max , 10);
                    },
                    minInterval: 1                                   
                },
                tooltip:{
                    axisPointer:{
                        lineStyle:{
                        type:'dashed'
                        }
                    }
                }
            }

            return {                
                // 标题
                title : this.$route.meta.title,
                // 时段选择
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

                activeTime: 'today',

                // 选择时间段
                range_time: util.getSomeDayFormat( 0 , '-' ) + ',' + util.getSomeDayFormat( 0 , '-' ) ,

                // 小计数据
                subtotalList:[
                    {
                        'title':'新用户数',
                        'name':'total_new_comer_cnt',
                        'selected':true,
                        'description':'指定时间段内，首次访问快应用页面的用户数，同一用户多次访问不重复计',
                        'totalNum':'--'
                    },{
                        'title':'访问人数',
                        'name':'total_visitor_cnt',
                        'selected':true,
                        'description':'指定时间段内，访问快应用内所有页面的总用户数，同一用户多次访问不重复计',
                        'totalNum':'--'                      
                    },{
                        'title':'访问次数',
                        'name':'total_page_cnt',
                        'selected':true ,
                        'description':'指定时间段内，访问快应用内所有页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问',
                        'totalNum':'--'                          
                    },{
                        'title':'打开次数',
                        'name':'total_open_cnt',
                        'selected':true,
                        'description':'指定时间段内，打开快应用的总次数，用户从打开快应用到主动关闭计为一次' ,
                        'totalNum':'--'                            
                    },{
                        'title':'次均停留时长',
                        'name':'total_avg_stay_time',
                        'selected':true,
                        'description':'指定时间段内，平均每次打开快应用停留在页面的总时长，即快应用停留总时长/打开次数',
                        'totalNum':'--'                           
                    },{
                        'title':'跳出率',
                        'name':'total_bounce_rate',
                        'selected':true,
                        'description':'指定时间段内，只浏览了一个页面便离开了的访问次数占总的访问次数的百分比',
                        'totalNum':'--'                          
                    }
                ],

                // 图表下拉选数据
                chartDropList:[
                    {
                        'title':'新用户数',
                        'name':'new_comer_cnt',
                        'selected':true,
                        'disabled':false
                    },
                    {
                        'title':'访问人数',
                        'name':'visitor_cnt',
                        'selected':true,
                        'disabled':false
                    },{
                        'title':'访问次数',
                        'name':'page_cnt',
                        'selected':false,
                        'disabled':false
                    },{
                        'title':'打开次数',
                        'name':'open_cnt',
                        'selected':false,
                        'disabled':false
                    }
                    // ,{
                    //     'title':'次均停留时长',
                    //     'name':'avg_stay_time',
                    //     'selected':false,
                    //     'disabled':false
                    // },{
                    //     'title':'跳出率',
                    //     'name':'bounce_rate',
                    //     'selected':false,
                    //     'disabled':false
                    // }   
                ],
                
                // 图表数据
                chartData:{
                    columns:['date','new_comer_cnt','visitor_cnt','page_cnt','page_cnt'],
                    rows: [],
                },

                // 图表折线颜色
                colorObj : {
                    new_comer_cnt:'#7bdde9',
                    page_cnt:'#f99503',
                    open_cnt:'#feb2a5',
                    visitor_cnt:'#4286f3',
                    avg_stay_time:'#ee6e73',
                    bounce_rate:'#feb2a5'

                },
                // chartVisible: true,
                // 列表表头数据
                columns: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '日期',
                        key: 'date'
                    },
                    {
                        title: '新用户数',
                        key: 'new_comer_cnt'
                    },
                    {
                        title: '访问人数',
                        key: 'visitor_cnt'
                    },{
                        title:'访问次数',
                        key: 'page_cnt'
                    },{
                        title:'打开次数',
                        key: 'open_cnt'
                    },{
                        title:'次均停留时长',
                        key: 'avg_stay_time'
                    },
                    {
                        title:'跳出率',
                        key: 'bounce_rate'
                    }
                ],
                // 表格数据
                tableData: [],                
                //分页相关
                total: 0,
                pageSize: 40,
                current: 1,
                pageSizeOpts: this.$store.getters.pageSizeOpts,

                // loadings                
                chartLoading: true,
                tableLoading:true    
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
            },     
            // 渠道数据   
            channel(){
                return this.$store.getters.activeVendor
            },
        },
        methods:{
            // 图表下拉选项选择
            changeSelect(name){
                
                this.chartDropList.forEach(item=>{
                    if( item.name === name && !item.disabled ){
                        item.selected = !item.selected;
                    }
                });   
                
                let selectedLen = this.chartDropList.filter(item=>{
                    return item.selected
                }).length;
                
                // 限制多选
                if( selectedLen === 4 ){
                    this.chartDropList.forEach(item=>{
                        if( item.selected === false ){
                            item.disabled = true;
                        }
                    });                                       
                }else{
                    this.chartDropList.forEach(item=>{
                        if(  item.disabled === true ){
                            item.disabled = false;
                        }
                    }); 
                }
            },
            // 切换页码
            changePage( page ){
                this.current = page;
                this.getListData();  
            },
            // 切换显示条数
            changeSize( size ){
                this.pageSize = size;
                this.getListData();                
            },

            // 请求合计数据
            getTotalData(){
                let _this = this;
                let args = {
                    range_time: this.range_time,
                    channel:this.$store.getters.activeVendor,
                    info:this.$store.getters.getInfo
                };

                util.ajax.get('/report/daily_count' ,{
                    params: args   
                })
                .then(req=>{
                    let data = req.data;
                    if( data.error_code === 0 ){
                        let totalData = data.data || {};
                        _this.subtotalList.forEach(item=>{
                            if( totalData[ item.name ] || totalData[ item.name ] === 0 ){
                                item.totalNum = totalData[ item.name ];
                                return
                            }                    
                            item.totalNum = '--';
                        });
                    }                    
                })
                .catch( err => {

                    let { data , status } =  err.response || {};
                    if( status === 403 && data.error_code === 6 ){
                        util.backHome();                  
                    }else{
                        console.log( "请求失败" );
                    }  

                });                
            },

            // 请求图表数据
            getChartData(){
                this.chartLoading = true;

                let _this = this;
                let args = {
                    range_time: this.range_time,
                    channel:this.$store.getters.activeVendor,
                    info:this.$store.getters.getInfo
                } 

                util.ajax.get('/report/daily_chart' ,{
                    params: args   
                })
                .then(req=>{
                    let data = req.data;
                    if( data.error_code === 0 ){
                        _this.chartData.rows = data.data;
                    }                
                    _this.chartLoading = false;
                })
                .catch(err=>{

                    _this.chartLoading =false;  

                    let { data , status } =  err.response || {};
                    if( status === 403 && data.error_code === 6 ){
                        util.backHome();                  
                    }else{
                        console.log( "请求失败" );
                    }              
                });  
            },

            // 请求列表数据
            getListData(){

                this.tableLoading = true;
                let _this = this;                    
                let args = {
                    range_time: this.range_time,
                    pn: this.current,
                    rn: this.pageSize,
                    channel:this.$store.getters.activeVendor,
                    info:this.$store.getters.getInfo
                };

                util.ajax.get('/report/daily_list',{
                    params: args
                })
                .then(req=>{
                    
                    _this.tableLoading = false;
                    let data = req.data;
                    if( data.error_code === 0 ){

                        let list = data.data.list;
                        let total = data.data.totalCnt;
                        _this.tableData = list || [];
                        _this.total = total || 0;
                    }
                })
                .catch(err=>{
     
                    _this.tableLoading = false;     
                    let { data , status } =  err.response || {};
                    if( status === 403 && data.error_code === 6 ){  
                        util.backHome();                  
                    }else{
                        console.log( "请求失败" );
                    }  
                        
                });                
            },

            // 导出数据
            exportData(){

                let params = {
                        range_time: this.range_time,
                        channel:this.$store.getters.activeVendor,
                        export:1,
                        info:this.$store.getters.getInfo
                    };

                let path = util.baseURL + '/report/daily_list?' + util.toQueryString( params );
                
                util.exportFile( path );

            }

        },
        watch:{
            //  图表选项
            selectedDrop:{
                deep:true,
                handler(val, oldVal){                            
                    this.chartSettings.metrics = this.selectdName || [];
                }
            },
            // 切换选择的时间段
            activeTime(val, oldVal){

                let range_timeObj = {
                    'today': util.getSomeDayFormat( 0 , '-' ) + ',' + util.getSomeDayFormat( 0, '-' ),
                    'lastday': util.getSomeDayFormat( -1  , '-' ) + ',' + util.getSomeDayFormat( -1 , '-' ),
                    'sen_days': util.getSomeDayFormat( -7  , '-' ) + ',' + util.getSomeDayFormat( -1, '-' ),
                    'thirty_days': util.getSomeDayFormat( -30 , '-' ) + ',' + util.getSomeDayFormat( -1 , '-' )
                };
                this.range_time = range_timeObj[ val ] || '';                   
                this.current = 1;      

                if( this.activeTime === 'lastday' || this.activeTime === 'today' ){
                    
                    this.pageSize = 40;
                }else{
                    this.pageSize = 20;
                }                   
                       
                // 请求合计数据
                this.getTotalData(); 
                this.getListData();  
                this.getChartData();
            },
            // 监听渠道变化
            channel(val, oldVal){
                 
                this.current = 1;     
                this.activeTime = 'today'; 

                // 请求列表破数据
                this.getListData();
                // 请求合计数据
                this.getTotalData(); 
                // 图表数据
                this.getChartData();
            }
        },
        mounted(){   
            // // 请求列表破数据
            // this.getListData();
            // // 请求合计数据
            // this.getTotalData(); 
            // // 图表数据
            // this.getChartData();
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
            Table,
            Page,
            Spin,
            myTable,
            Loading
        }
    };
    

</script>

