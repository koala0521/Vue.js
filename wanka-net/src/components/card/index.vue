<style scoped >

.news_sub_list{
    height: auto;
}
.news_sub_list li{
    overflow: hidden;
}
.item_time{
    float: right;
}
a.txt{
    float: left;
    line-height: 30px;
    color: #5e6267;
    font-size: 14px;
    text-decoration: none;
    -webkit-transition: color .3s;
    transition: color .3s;
    max-width: 500px;
    height: 30px;
}
a.txt:hover{
    color: #2d8cf0;
}
</style>

<template>
    <Card :bordered="false" dis-hover >
        <p slot="title" >
            {{  title }}            
            <slot name="titles" ></slot>
        </p>
        <router-link v-if="!!btntext" slot="extra" :to="url" >
            <!-- <Icon type="ios-loop-strong"></Icon> -->
            {{ btntext }}
        </router-link>

        <ul class="news_sub_list" >
            <li v-for="item in list " :key="item.id" >
                <a 
                    class="txt" 
                    :href="item.url" 
                    target="_blank"
                    @click="toDetail(item)"
                >
                    {{ item.title }}
                </a>
                <span class="item_time" >
                    {{ formatTime(item.ctime) }}
                </span>
            </li>
        </ul>
    
    </Card>
  
</template>
<script>
    import { Card , Icon } from 'iview';
    import { formatDate } from '../../libs/util';

    let dataList = [
        {
            title: '肖申克的救赎',
            url: 'https://movie.douban.com/subject/1292052/',
            ctime: '2018/03/21'
        },
        {
            title: '这个杀手不太冷',
            url: 'https://movie.douban.com/subject/1295644/',
            ctime: '2018/03/21'
        },
        {
            title: '霸王别姬',
            url: 'https://movie.douban.com/subject/1291546/',
            ctime: '2018/03/21'
        },
        {
            title: '阿甘正传',
            url: 'https://movie.douban.com/subject/1292720/',
            ctime: '2018/03/21'
        },
        {
            title: '美丽人生',
            url: 'https://movie.douban.com/subject/1292063/',
            ctime: '2018/03/21'
        },
        {
            title: '千与千寻',
            url: 'https://movie.douban.com/subject/1291561/',
            ctime: '2018/03/21'
        },
        {
            title: '辛德勒的名单',
            url: 'https://movie.douban.com/subject/1295124/',
            ctime: '2018/03/21'
        }
    ];
    export default {
        props:{
            title:String,
            btntext:{
                type: String,
                default: ''
            },
            list:{
                type:Array,
                default:[]
            },
            url:{
                type: String,
                default: '#'
            }
        },
        components:{
            Card , Icon
        },
        methods:{
            formatTime(ctime){
                let time = ctime*1000;
                return formatDate(time , '/' ).split(' ')[0]
            },
            // 跳转详情页
            toDetail(item){

                // PDF文件跳转新页面
                if( item.url ){
                    window.open( item.url , '_blank' )
                    return
                }

                this.$router.push({
                    // 跳转详情页
                    path: this.url + '/detail',
                    query:{
                        id:item.id || 0
                    }
                });
            }
        }
    };
    
</script>