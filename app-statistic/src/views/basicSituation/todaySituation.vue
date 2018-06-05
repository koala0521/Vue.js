<!--今日概况 -->
<style scoped >
    .item{
        /* border: 1px solid #e1e3e4; */
        background: #fff;
    }
    .total{
        display: flex;
        height: 114px;        
    }
    .total-item{
        flex: 1;
        padding: 10px 0;
    }
    .total-item > div{
        padding-left: 20px;
    }
    .total-item > div:nth-of-type(1){
        font-size: 12px;
        color: #666;
    }
    .total-item > div:nth-of-type(2):not(.first){
        font-size: 30px;
        line-height: 42px;
        height: 42px;
        font-weight: 600;
        color: #333;
        border-left: 1px solid #f3f3f3;
        /* margin-top: 10px; */
    }
    .total-item > div.empty{
        height: 21px;
    } 
    .total-item > div.first{
        line-height: 42px;
        height: 42px;
    }   
    .total-item > div:nth-of-type(3){
        font-size: 12px;
        color: #333;
    }
    .chart{
        height: 470px;
        padding: 0 20px;
    }
    .chart .chart-title{
        height: 85px;
        padding: 30px 0;
    }
    .chart .title-text{
        font-weight: 600;
    }
    .ivu-dropdown-item.active{
        color:#26c6da; 
    }

</style>

<template>

    <div class="content-cont-width" >
        <Row class="content-title"  > 
            <span>
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

        </Row>
        <div class="prl30" >
            <div class="item total" >
                <div class="total-item" >
                    <div class="empty" ></div>
                    <div class="first" >今日</div>
                    <div>昨日</div>
                </div>
                <div class="total-item" >
                    <div>
                        <span>新用户数</span>
                        <Poptip 
                            trigger="hover" 
                            placement="bottom-start" 
                            width="200"
                            class="poptip-wrap"                        
                        >                        
                            <Icon type="ios-help-outline"></Icon>   
                            <div slot="content" >
                                <div>
                                    首次访问快应用页面的用户数，同一用户多次访问不重复计；
                                </div>
                            </div>
                        </Poptip>
                    </div>
                    <div>131</div>
                    <div>1-3</div>
                </div>
                <div class="total-item" >
                    <div>                        
                        <span>访问人数</span>
                        <Poptip 
                            trigger="hover" 
                            placement="bottom-start" 
                            width="200"
                            class="poptip-wrap"                        
                        >                        
                            <Icon type="ios-help-outline"></Icon>   
                            <div slot="content" >
                                <div>
                                    首次访问快应用页面的用户数，同一用户多次访问不重复计；
                                </div>
                            </div>
                        </Poptip>                    
                    </div>
                    <div>341</div>
                    <div>1-3</div>
                </div>
                <div class="total-item" >
                    <div>
                        
                        <span>访问次数</span>
                        <Poptip 
                            trigger="hover" 
                            placement="bottom-start" 
                            width="200"
                            class="poptip-wrap"                        
                        >                        
                            <Icon type="ios-help-outline"></Icon>   
                            <div slot="content" >
                                <div>
                                    首次访问快应用页面的用户数，同一用户多次访问不重复计；
                                </div>
                            </div>
                        </Poptip>  
                    </div>
                    <div>3,997</div>
                    <div>1-3</div>                    
                </div>
                <div class="total-item" >
                    <div>                                                
                        <span>打开次数</span>
                        <Poptip 
                            trigger="hover" 
                            placement="bottom-start" 
                            width="200"
                            class="poptip-wrap"                        
                        >                        
                            <Icon type="ios-help-outline"></Icon>   
                            <div slot="content" >
                                <div>
                                    首次访问快应用页面的用户数，同一用户多次访问不重复计；
                                </div>
                            </div>
                        </Poptip>                         
                    </div>
                    <div>1,031</div>
                    <div>1-3</div>                    
                </div>
                <div class="total-item" >
                    <div>                        
                        <span>次均停留时长</span>
                        <Poptip 
                            trigger="hover" 
                            placement="bottom-start" 
                            width="200"
                            class="poptip-wrap"                        
                        >                        
                            <Icon type="ios-help-outline"></Icon>   
                            <div slot="content" >
                                <div>
                                    首次访问快应用页面的用户数，同一用户多次访问不重复计；
                                </div>
                            </div>
                        </Poptip>  
                    </div>
                    <div>00:02:09</div>
                    <div>1-3</div>                      
                </div>
                <div class="total-item" >
                    <div>
                        <span>跳出率</span>
                        <Poptip 
                            trigger="hover" 
                            placement="bottom-end" 
                            width="200"
                            class="poptip-wrap"                        
                        >                        
                            <Icon type="ios-help-outline"></Icon>   
                            <div slot="content" >
                                <div>
                                    首次访问快应用页面的用户数，同一用户多次访问不重复计；
                                </div>
                            </div>
                        </Poptip> 

                    </div>
                    <div>11.4%</div>
                    <div>1-3</div>  
                </div>
            </div>
        </div>
        <div class="prl30 mt30">
            <Card  
                class="item chart" 
                shadow
            >
                <div slot="title" >
                    <span class="title-text">趋势图</span>
                    <Dropdown 
                        style="margin-left: 20px"
                        trigger="click"
                        @click="changeSelect"
                    
                    >
                        <Button >
                            选择显示数据（可多选）
                            <Icon type="arrow-down-b"></Icon>
                        </Button>
                        <DropdownMenu slot="list" class="select" >
                            <DropdownItem class="active" >
                                驴打滚 
                                <Icon type="checkmark-round"></Icon>
                            </DropdownItem>
                            <DropdownItem>
                                炸酱面                                
                                <Icon type="checkmark-round"></Icon>
                            </DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem divided>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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
                selectList:[
                    {
                        'title':'新用户数',
                        'name':'new_users',
                        'selected':true
                    },{
                        'title':'访问人数',
                        'name':'visitors',
                        'selected':true                        
                    },{
                        'title':'访问人数',
                        'name':'visitors',
                        'selected':true                          
                    },{}
                ]
            }
        },
        components:{
            Row, Col , Poptip, Icon ,Card ,Dropdown, DropdownMenu , DropdownItem , Button 
        },
        methods:{
            changeSelect(name){

            }
        },
        mounted(){
            console.log(this.$route.meta.title);
        }
    };

</script>

