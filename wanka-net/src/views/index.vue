<style scoped>
    .cont-width{
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }

    .banner-wrap{
        height: 300px;
        width: 100%;
        overflow: hidden;
        margin-bottom: 60px;
    }
    .banner-wrap img{
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <div>
        <div class="banner-wrap" > 
            <img src="../assets/img/bg.jpg" alt="玩咖">
        </div>
            <div class="cont-width">        
                <Row>
                    <i-col span="6" >
                    <Card title="标题" :bordered="false" :shadow="false" >
                        <p slot="title">腾讯简介</p>
                        <p>
                            腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。
                            成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，
                            为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。
                            2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。
                        </p>
                        <a href="#" slot="extra" >
                            更多
                            <Icon type="ios-arrow-forward"></Icon>
                            <Icon type="ios-arrow-forward"></Icon>
                        </a>
                    </Card>                             
                </i-col>

                    <i-col span="6"  offset="3" >
                    <Card title="标题1"  :bordered="false" :shadow="false" >
                        <p slot="title">腾讯简介</p>
                        <p>
                            腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。
                            成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，
                            为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。
                            2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。
                        </p>
                        <a href="#" slot="extra" >
                            更多 >>
                        </a>
                    </Card>                             
                </i-col>
                    <i-col span="6" offset="3" >
                    <Card title="标题2"  :bordered="false" :shadow="false" >
                        <p slot="title">
                            <Icon type="ios-film-outline"></Icon>
                            Classic film
                        </p>
                        <a href="#" slot="extra" >
                            <Icon type="ios-loop-strong"></Icon>
                            Change
                        </a>
                    </Card>                             
                </i-col>                                                
            </Row>
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            title(){
                return this.$t('title');
            },
            lan(){
                return this.$store.getters.lan;
            },
            isCN(){
                return this.lan === 'zh-CN'
            },
            isTW(){
                return this.lan === 'zh-TW'
            },
            isEN(){
                return this.lan === 'en-US'
            }
        },
        methods: {
            // 切换语言
            changeLan( lan ){
                localStorage.setItem('language',lan);
                window.location.reload();
            }
        }
    };
</script>