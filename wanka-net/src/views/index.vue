// 首页
<style scoped lang="less" >
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
        min-width: 1200px;
        height: 400px;
        overflow: hidden;
        margin-bottom: 60px;
        position: relative;
    }
    .banner-wrap .banner-cont{
        height: 100%;
    }
    .part , .video-img-wrap{

        padding: 0 10px;
    }
    .video-img-wrap{
        position: relative;
        width: 100%;
        overflow: hidden;
        padding: 0;
    }
    .bg-video , .part img{
        width: 100%;
        height: 175px;
    }
    #icon-play{
        top: 50%;  
        left: 50%;
        margin-left: -39px;
        margin-top: -15px;
        width: 78px;
        height: 78px;
        background: url(../assets/img/ico_play.png) no-repeat;
        cursor: pointer;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        z-index: 5;
        position: absolute;
    }
    .part .item:not(.last){
        padding-right: 40px;
    }
    .news-list .swiper-active-switch{
        background:#df3235;
    }
    .news-list .title-wrap{
        text-align: right;
    }
    .ofset{
	   margin-left: 6.25%;
   }

</style>
<template>
    <div>
        <Row>
            <Col span="24" >                
                <WCarousel  
                    class="banner-wrap" 
                    :banner="banner"
                >                
                </WCarousel>  
            </Col>  
        </Row>
        <Row class="cont-width part">  

            <!-- 简介 -->
            <Col span="7" class="item" >
                <Card :bordered="false" :shadow="false" >
                    <p slot="title"> {{ localData.aboutUs.title }} </p>
                    <p>
                        {{ localData.aboutUs.text }}
                    </p>
                    <a href="#" slot="extra" >                            
                        <router-link to="/index/introduce" >
                            {{ localData.aboutUs.more }} 
                            <Icon type="ios-arrow-forward"></Icon>
                            <Icon type="ios-arrow-forward"></Icon>                            
                        </router-link>     

                    </a>
                </Card>                             
            </Col>

            <!-- 愿景 -->
            <Col span="7"  class="ofset"  >
                <Card :bordered="false" :shadow="false" >
                    <p slot="title">
                        {{ localData.ourVision.title }}
                    </p>
                    <p>
                        {{ localData.ourVision.text }}
                    </p>
                </Card>                             
            </Col>
            <Col span="7" class="ofset"  >
                <Card :bordered="false" :shadow="false" >
                    <p slot="title">
                        {{ localData.videoTitle }}
                    </p>

                    <img class="bg-video" src="../assets/img/bg-video.jpg" alt=""/>
                    <span id="icon-play"  @click="showPlayer"  ></span>
                </Card>                
            </Col>                                                
        </Row>
        <Row class="cont-width part">
            <Col span="7" :class="{ofset: (index !== 0) }" v-for="item ,index in thumb" :key="item.id" >
                <a :href="item.url" target="_blank" >
                    <Card :bordered="false" :shadow="false" >
                        <p slot="title">{{ item.title }}</p>
                        <img class="bg-video" :src="item.img" />
                    </Card>         
                </a>           
            </Col>  
            <Col span="7" class="ofset"  >
                <ListCard  :list="pageList" class="news-list" >
                    <div slot="titles" class="title-wrap" >
                        <i 
                            class="swiper-pagination-switch" 
                            :class="{'swiper-active-switch': cPage==item }" 
                            v-for="item in pages"
                            :key="item"
                            @click="cPage = item"
                        ></i>
                    </div>   
                </ListCard>          
            </Col>              

        </Row>

        <div v-if="isLoadPlayer" >
            <Modal
                v-model="isShowPlayer"
                class-name="vertical-center-modal video-wrap"
                width="860"
                @on-visible-change="visibleChange"                
            >
                <video-player 
                    class="vjs-custom-skin"
                    :options="playerOptions"                     
                    ref="playerWrap"
                    @ended="onPlayerEnded($event)"
                 >
                    
                </video-player> 
                <div slot="footer"> </div>
            </Modal>
        </div>
    </div>

</template>
<script>
    import WCarousel from '../components/carousel';
    import { Row ,Col ,Card , Icon , Modal } from 'iview';
    import 'video.js/dist/video-js.css';
    import { videoPlayer } from 'vue-video-player';
    import ListCard from '../components/card';
    import util from '../libs/util';

    export default {
        components:{
            WCarousel,
            Row , Col , Card , Icon , videoPlayer , Modal ,ListCard
        },
        data(){
            return {
                // 轮播列表
                banner:[
                    {src: require('../assets/img/1.jpg')},
                    {src:require('../assets/img/2.png')},
                    {src:require('../assets/img/3.jpg')}
                ],
                thumb:[
                    {
                        "title": "玩咖公布第四季度及全年业绩",
                        "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
                    },
                    {
                        "title": "玩咖公布第三季度业绩",
                        "img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
                    }
                ],
                list:[
                    {
                        "title": "玩咖公布2018第四季度及全年业绩",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                        "ctime": "1525342411"
                    },
                    {
                        "title": "玩咖公布2018第三季度业绩",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                        "ctime": "1525342411"
                    },
                    {
                        "title": "玩咖公布2018第二季度及中期业绩",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                        "ctime": "1525342411"
                    },
                    {
                        "title": "玩咖公布2018第一季度业绩",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                        "ctime": "1525342411"
                    },
                    {
                        "title": "玩咖公布2017第四季度及全年业绩",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                        "ctime": "1525342411"
                    },
                    {
                        "title": "玩咖公布2017第三季度业绩",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                        "ctime": "1525342411"
                    },
                    {
                        "title": "玩咖公布2017第三季度业绩",
                        "url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
                        "ctime": "1525342411"
                    }
                ],
                cPage:1,
                size:6,
                // 播放器配置参数
                playerOptions: {
                    // videojs options
                    // 是否静音
                    muted: false,
                    language: 'zh-CN',
                    sources: [{
                        type: 'video/mp4',
                        src: 'http://vjs.zencdn.net/v/oceans.mp4'
                    }],
                    poster: require('../assets/img/bg-video.jpg'),
                },
                // 是否加载视频组件
                isLoadPlayer:false,
                // 是否显示播放
                isShowPlayer:false,
                // 是否可滚动
                scrollable:false,
                // 语言包
                localData:this.$t("content")[0].HOME,
            }
        },
        computed:{
            title(){
                return this.$t('title');
            },
            lan(){
                return this.$store.getters.lan;
            },
            isCN(){
                return this.lan === 'zh-CN';
            },
            isTW(){
                return this.lan === 'zh-TW';
            },
            isEN(){
                return this.lan === 'en-US';
            },
            player(){
                return this.$refs.playerWrap.$refs.video;
            },
            // 计算分页数量
            pages(){
                let arr = [];
                let len = Math.ceil(this.list.length / this.size);
                for (let i = 0; i < len; i++) {
                    arr.push( i + 1 );                    
                }
                return arr;
            },
            // 当前页码对应的数据
            pageList(){
                return this.list.filter( (item ,index) =>{
                    let cIndex = this.size * (this.cPage -1 );
                    return index >= cIndex && index < (this.size * this.cPage);
                });
            }
        },
        methods: {
            // 切换语言
            changeLan( lan ){
                localStorage.setItem('language',lan);
                window.location.reload();
            },
            showPlayer(){
                // 加载播放器组件
                this.isLoadPlayer = true;
                // 显示播放器
                this.isShowPlayer = true;
            },
            // 弹框状态切换时
            visibleChange(state){
                // 关闭弹框时，暂停播放
                !state && this.player.pause();                
            },
            onPlayerEnded(player) {
                console.log('播放结束了', player);
                player.currentTime(0);
            }
        },
        created(){
            
            // 数据请求
            
            console.log( '声明周期created' );
            // setTimeout(() => {
            //     this.banner.push(
            //         {src:require('../assets/img/2.png')},
            //     );

            // }, 500);

            util.ajax.get(`v1/topics?page=${ 1 }&tab=${ 'good' }&limit=15`)
            
            .then(( res )=>{
                console.log( '请求成功' , res );
                
                
            })
            .catch(( err )=>{
                console.log( '请求失败' , res );
                
            })

        }
    };
</script>