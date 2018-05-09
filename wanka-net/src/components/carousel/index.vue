<style>
.swiper-slide , swiper-container{
    width: 100%;
}
.pagination {
  position: absolute;
  z-index: 20;
  bottom: 10px;
  width: 100%;
  text-align: center;
}
.swiper-pagination-switch {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #555;
  margin: 0 5px;
  opacity: 0.9;
  border: 1px solid #fff;
  cursor: pointer;
}
.swiper-active-switch {
  width: 35px;
  background: #fff;
  opacity: 1;
  transition: width .4s ease-in;
}

</style>

<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
                v-for="(item , index ) in imgList"
                :key="index"
                class="swiper-slide"
            
            > 
                <img :src="item.src" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="pagination"></div>
        
        <!-- 如果需要导航按钮
        <div class="swiper-button swiper-button-prev"></div>
        <div class="swiper-button swiper-button-next"></div> -->
    </div>
</template>
<script>

import Swiper from '../../libs/swiper/js/idangerous.swiper.min';
import '../../libs/swiper/css/idangerous.swiper.css';

    export default {
        data () {
            return {
                value1: 0
            }
        },
        props:['imgList'],
        mounted(){
            let mySwiper = new Swiper('.swiper-container',{
                loop: true,
                autoplay : 5000,
                autoResize : false,
                pagination : '.pagination',   
                paginationClickable :true, 
                onSlideChangeStart: function(swiper){
                    console.log('图片切换了：', swiper );
                    
                    //some code
                }
                //其他设置
            });  
        }
    }
</script>
