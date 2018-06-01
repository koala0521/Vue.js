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
        height: 476px;
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
            <div class="item chart">
                
            </div>
        </div>

    </div>
    
</template>

<script>
    import { Row , Col , Poptip, Icon  } from 'iview';
    export default {
        data(){
            return {
                title : this.$route.meta.title
            }
        },
        components:{
            Row, Col , Poptip, Icon
        },
        mounted(){
            console.log(this.$route.meta.title);
        }
    };

</script>

