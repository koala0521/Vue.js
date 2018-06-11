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
        transform: translateY(-50%) translateY(-50%);
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
                <div>{{ item.totalNum }}</div>
 
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
                        :loading="chartLoading"
                ></ve-line>
                </div>
            </Card>            
        </div>
        <div class="table mb30 relative">
            <Table 
                stripe 
                :columns="columns" 
                :data="tableData"             
            ></Table>

            <div class="table-spin" >
                <Spin class="center" >
                    <div class="loader">
                        <Icon type="load-c" size=40 class="table-spin-icon-load"></Icon>
                    </div>               
                </Spin>
            </div>
        </div>
        <div class="page mb30 tar" >
            <Page 
                show-total show-elevator show-sizer
                placement="top"
                :total="total" 
                :page-size="pageSize"
                @on-change="changePage"
                @on-page-size-change="changeSize"
                :page-size-opts="pageSizeOpts"
            ></Page>
        </div>
    </div>
    
</template>

<script>
    import { Row , Col , Poptip, Icon , Card , Dropdown, DropdownMenu , DropdownItem , Button , Table , Page , Spin } from 'iview';
    import VeLine from 'v-charts/lib/line'; 
    import util from '../../libs/util';

    export default {
        data(){

            this.chartSettings = {
                labelMap: {
                    new_comer_cnt:'新用户数',
                    page_cnt: '访问次数',
                    open_cnt: '打开次数',
                    visitor_cnt:'访问人数',
                    avg_stay_time:'次均停留时长',
                    bounce_rate:'跳出率',
                    date:'日期'
                },
                // 图表很坐标
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
                        width:5
                    },
                    animation:true
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
                            color: '#999999',//左边线的颜色
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
                            color:'#999999',
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
                range_time: util.getSomeDayFormat( 0 , '-' ),

                // 小计数据
                subtotalList:[
                    {
                        'title':'新用户数',
                        'name':'total_new_comer_cnt',
                        'selected':true,
                        'description':'首次访问小程序页面的用户数，同一用户多次访问不重复计；',
                        'totalNum':'--'
                    },{
                        'title':'访问人数',
                        'name':'total_visitor_cnt',
                        'selected':true,
                        'description':'访问小程序内所有页面的总用户数，同一用户多次访问不重复计；',
                        'totalNum':'--'                      
                    },{
                        'title':'访问次数',
                        'name':'total_page_cnt',
                        'selected':true ,
                        'description':'访问小程序内所有页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问；',
                        'totalNum':'--'                          
                    },{
                        'title':'打开次数',
                        'name':'total_open_cnt',
                        'selected':true,
                        'description':'打开小程序总次数，用户从打开小程序到主动关闭小程序或超时退出计为一次；' ,
                        'totalNum':'--'                            
                    },{
                        'title':'次均停留时长',
                        'name':'total_avg_stay_time',
                        'selected':true,
                        'description':'平均每次打开小程序停留在小程序页面的总时长，即小程序停留总时长/打开次数。',
                        'totalNum':'--'                           
                    },{
                        'title':'跳出率',
                        'name':'total_bounce_rate',
                        'selected':true,
                        'description':'只浏览了一个页面便离开了网站的访问次数占总的访问次数的百分比。',
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
                    },{
                        'title':'次均停留时长',
                        'name':'avg_stay_time',
                        'selected':false,
                        'disabled':false
                    },{
                        'title':'跳出率',
                        'name':'bounce_rate',
                        'selected':false,
                        'disabled':false
                    }   
                ],
                
                // 图表数据
                chartData:{
                    rows: [
                        {   
                            // 日期
                            'date': '2018-05-22',
                            // 新用户数
                            'new_comer_cnt':42311,
                            // 访问人数
                            'visitor_cnt':1000 , 
                            // 访问次数
                            'page_cnt':64534,
                            // 跳出率
                            'bounce_rate': 32371, 
                            // 次均停留时长
                            'avg_stay_time':'	00:00:30',
                            // 打开次数
                            'open_cnt': 19810 
                        },
                        { 'date': '2018-05-23', 'visitor_cnt':3000 , 'new_comer_cnt': 12328, 'open_cnt': 4398 },
                        { 'date': '2018-05-23', 'visitor_cnt':3000 , 'new_comer_cnt': 12328, 'open_cnt': 4398 },
                        { 'date': '2018-05-24', 'visitor_cnt':3000 ,  'new_comer_cnt': 92381, 'open_cnt': 52910 },
                        { 'date': '2018-05-25', 'visitor_cnt':2000 ,  'new_comer_cnt': 12328, 'open_cnt': 4398 },
                        { 'date': '2018-05-26', 'visitor_cnt':3000 ,  'new_comer_cnt': 92381, 'open_cnt': 62910 },
                        { 'date': '2018-05-27', 'visitor_cnt':3000 ,  'new_comer_cnt': 32371, 'open_cnt': 19810 },
                        { 'date': '2018-05-28', 'visitor_cnt':6000 ,  'new_comer_cnt': 12328, 'open_cnt': 4398 },
                        { 'date': '2018-05-29', 'visitor_cnt':9000 ,  'new_comer_cnt': 92381, 'open_cnt': 52910 },
                        { 'date': '2018-05-30', 'visitor_cnt':3000 ,  'new_comer_cnt': 12328, 'open_cnt': 4398 },
                        { 'date': '2018-05-31', 'visitor_cnt':5000 ,  'new_comer_cnt': 92381, 'open_cnt': 62910 },
                        { 'date': '2018-06-01', 'visitor_cnt':3000 ,  'new_comer_cnt': 12328, 'open_cnt': 4398 },
                                                
                    ],
                },

                // 图标颜色
                colorObj : {
                    new_comer_cnt:'#7bdde9',
                    page_cnt:'#4187f6',
                    open_cnt:'#fa9706',
                    visitor_cnt:'#5b4947',
                    avg_stay_time:'#ee6e73',
                    bounce_rate:'#feb2a5'

                },
                // 列表表头数据
                columns: [
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
                        title:'均次停留时长',
                        key: 'avg_stay_time'
                    },
                    {
                        title:'跳出率',
                        key: 'bounce_rate'
                    }
                ],

                // 表格数据
                tableData: [
                    {
                        "date":20180528, // 日期
                        "new_comer_cnt":0, // 新用户数
                        "visitor_cnt":0, // 访问人数
                        "page_cnt":0, // 访问次数
                        "open_cnt":0, // 打开次数
                        "avg_stay_time":"00:00:00", // 均次停留时长
                        "bounce_rate":"0%", // 跳出率
                    },{
                        "date":20180528, // 日期
                        "new_comer_cnt":0, // 新用户数
                        "visitor_cnt":0, // 访问人数
                        "page_cnt":0, // 访问次数
                        "open_cnt":0, // 打开次数
                        "avg_stay_time":"00:00:00", // 均次停留时长
                        "bounce_rate":"0%", // 跳出率
                    },{
                        "date":20180528, // 日期
                        "new_comer_cnt":0, // 新用户数
                        "visitor_cnt":0, // 访问人数
                        "page_cnt":0, // 访问次数
                        "open_cnt":0, // 打开次数
                        "avg_stay_time":"00:00:00", // 均次停留时长
                        "bounce_rate":"0%", // 跳出率
                    }, {
                        "date":20180528, // 日期
                        "new_comer_cnt":0, // 新用户数
                        "visitor_cnt":0, // 访问人数
                        "page_cnt":0, // 访问次数
                        "open_cnt":0, // 打开次数
                        "avg_stay_time":"00:00:00", // 均次停留时长
                        "bounce_rate":"0%", // 跳出率
                    },{
                        "date":20180528, // 日期
                        "new_comer_cnt":0, // 新用户数
                        "visitor_cnt":0, // 访问人数
                        "page_cnt":0, // 访问次数
                        "open_cnt":0, // 打开次数
                        "avg_stay_time":"00:00:00", // 均次停留时长
                        "bounce_rate":"0%", // 跳出率
                    },{
                        "date":20180528, // 日期
                        "new_comer_cnt":0, // 新用户数
                        "visitor_cnt":0, // 访问人数
                        "page_cnt":0, // 访问次数
                        "open_cnt":0, // 打开次数
                        "avg_stay_time":"00:00:00", // 均次停留时长
                        "bounce_rate":"0%", // 跳出率
                    },{
                        "date":20180528, // 日期
                        "new_comer_cnt":0, // 新用户数
                        "visitor_cnt":0, // 访问人数
                        "page_cnt":0, // 访问次数
                        "open_cnt":0, // 打开次数
                        "avg_stay_time":"00:00:00", // 均次停留时长
                        "bounce_rate":"0%", // 跳出率
                    },{
                        "date":20180528, // 日期
                        "new_comer_cnt":0, // 新用户数
                        "visitor_cnt":0, // 访问人数
                        "page_cnt":0, // 访问次数
                        "open_cnt":0, // 打开次数
                        "avg_stay_time":"00:00:00", // 均次停留时长
                        "bounce_rate":"0%", // 跳出率
                    },                    
                ],                
                //分页相关
                total: 8,
                pageSize: 20,
                current: 1,
                pageSizeOpts: this.$store.getters.pageSizeOpts,

                // loadings                
                chartLoading: true    
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
                util.ajax.get('/report/daily_count' ,{
                    params:{
                        range_time: this.range_time,
                        channel:this.$store.getters.activeVendor
                    }    
                })
                .then(req=>{
                    console.log('===============req=====================');
                    console.log(req);
                    console.log('================req====================');
                    _this.subtotalList.forEach(item=>{
                        if( obj[ item.name ] || obj[ item.name ] === 0 ){
                            item.totalNum = obj[ item.name ];
                            return
                        }                    
                        item.totalNum = '--';
                    });                    
                })
                .catch(err=>{
                    console.log( 'err' , err );                
                });                
            },

            // 请求图表数据
            getChartData(){
                let _this = this;
                util.ajax.get('/report/daily_chart' ,{
                    params:{
                        range_time: this.range_time,
                        channel:this.$store.getters.activeVendor
                    }    
                })
                .then(req=>{
                    console.log('===============req=====================');
                    console.log(req);
                    console.log('================req====================');
                    let data = req.data;
                    if( data.error_code === 0 ){
                        _this.chartData.rows = data.list;
                    }
                })
                .catch(err=>{
                    console.log( 'err' , err );                
                });  


            },

            // 请求封装 >> 列表数据
            getListData(){
                
                console.log( '请求列表数据' );
                
                util.ajax.get('/report/daily_list',{
                    params:{
                        range_time: this.range_time,
                        pn: this.current,
                        rn: this.pageSize,
                        channel:this.$store.getters.activeVendor
                    }
                })
                .then(req=>{
                    console.log('===============req=====================');
                    console.log(req);
                    console.log('================req====================');
                })
                .catch(err=>{
                    console.log( 'err' , err );                
                });                
            },

            // 导出数据
            exportData(){

                console.log( '导出数据' );
                
                util.ajax.get('/report/daily_list',{
                    params:{
                        range_time: this.range_time,
                        channel:this.$store.getters.activeVendor,
                        export:1
                    }
                })
                .then(req=>{
                    console.log('===============导出数据=====================');
                    console.log('导出数据成功');
                    console.log('================导出数据====================');
                })
                .catch(err=>{
                    console.log( 'err' , err );                
                });                 
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
                    'today': util.getSomeDayFormat( 0 , '-' ),
                    'lastday': util.getSomeDayFormat( -1  , '-' ) + ',' + util.getSomeDayFormat( 0, '-' ),
                    'sen_days': util.getSomeDayFormat( -7  , '-' ) + ',' + util.getSomeDayFormat( 0, '-' ),
                    'thirty_days': util.getSomeDayFormat( -30 , '-' ) + ',' + util.getSomeDayFormat( 0 , '-' )
                };
                this.range_time = range_timeObj[ val ] || val || '';
                
                this.getListData();  
            }
        },
        created(){   

            let _this = this;

            setTimeout(()=>{

                // _this.chartLoading = false;

                let obj = {
                    'total_avg_stay_time':10023,
                    'total_new_comer_cnt':654
                };                
                _this.subtotalList.forEach(item=>{
                    if( obj[ item.name ] || obj[ item.name ] === 0 ){
                        item.totalNum = obj[ item.name ];
                        return
                    }                    
                    item.totalNum = '--';
                });
                _this.chartData.rows.push.apply( _this.chartData.rows , [
                    {   
                        // 日期
                        'date': '2018-05-22',
                        // 新用户数
                        'new_comer_cnt':42311,
                        // visitor_cnt
                        'visitor_cnt':1000 , 
                        // 访问次数
                        'page_cnt':64534,
                        // 跳出率
                        'bounce_rate': 32371, 
                        // 次均停留时长
                        'avg_stay_time':'	00:00:30',
                        // 打开次数
                        'open_cnt': 19810 
                    },
                    { 'date': '2018-05-23', 'visitor_cnt':3000 , 'new_comer_cnt': 12328, 'open_cnt': 4398 },
                    { 'date': '2018-05-23', 'visitor_cnt':3000 , 'new_comer_cnt': 12328, 'open_cnt': 4398 },
                    { 'date': '2018-05-24', 'visitor_cnt':3000 ,  'new_comer_cnt': 92381, 'open_cnt': 52910 },
                    { 'date': '2018-05-25', 'visitor_cnt':2000 ,  'new_comer_cnt': 12328, 'open_cnt': 4398 },
                    { 'date': '2018-05-26', 'visitor_cnt':3000 ,  'new_comer_cnt': 92381, 'open_cnt': 62910 },
                    { 'date': '2018-05-27', 'visitor_cnt':3000 ,  'new_comer_cnt': 32371, 'open_cnt': 19810 },
                    { 'date': '2018-05-28', 'visitor_cnt':6000 ,  'new_comer_cnt': 12328, 'open_cnt': 4398 },
                    { 'date': '2018-05-29', 'visitor_cnt':9000 ,  'new_comer_cnt': 92381, 'open_cnt': 52910 },
                    { 'date': '2018-05-30', 'visitor_cnt':3000 ,  'new_comer_cnt': 12328, 'open_cnt': 4398 },
                    { 'date': '2018-05-31', 'visitor_cnt':5000 ,  'new_comer_cnt': 92381, 'open_cnt': 62910 },
                    { 'date': '2018-06-01', 'visitor_cnt':3000 ,  'new_comer_cnt': 12328, 'open_cnt': 4398 },
                                    
                ]); 

            },3000)


            // 请求列表破数据
            this.getListData();
            // 请求合计数据
            this.getTotalData() 
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
            Spin
        }
    };
    

</script>

