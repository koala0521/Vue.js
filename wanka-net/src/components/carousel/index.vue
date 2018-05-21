<style>
.swiper-slide , .swiper-container{
    width: 100%;
    height: 100%;
    position: relative;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.pagination {
  position: absolute;
  z-index: 20;
  bottom: 10px;
  width: 100%;
  text-align: center;
}
span.swiper-pagination-bullet{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #555;
  margin: 0 5px;
  opacity: 0.9;
  border: 1px solid #fff;
  cursor: pointer;
  outline: none;
}
span.swiper-pagination-bullet-active {
  width: 35px;
  background: #fff;
  opacity: 1;
  transition: width .4s ease-in;
}
.img-title{
    color: #fff;
    position: absolute;
    left: 50%;
    top:50%;
}

</style>

<template>
    <div class="swiper-container">

        <swiper :options="swiperOption" ref="mySwiper" >
            <swiper-slide 
                v-for="(item , index) in banner" 
                :key="index"            
                class="swiper-slide"
            >
                <img :src="item.img" :alt="item.description" draggable="false" >
                <!-- <p class="img-title" >{{ item.title }}</p> -->
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </div>
</template>
<script>

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
    export default {
        components:{
            swiper,
            swiperSlide
        },
        
        props:{
            'banner':{
                type:Array,
                default:[]
            }
        },

        data () {
            return {
                swiperOption:{
                    loop: true,
                    autoplay : 5000,
                    autoResize : true,
                    allowTouchMove: false,
                    pagination : {
                        el:'.swiper-pagination',
                        clickable:true
                    },   
                    paginationClickable :true, 
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper                   
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>
