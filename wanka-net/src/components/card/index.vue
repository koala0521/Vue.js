<style>

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
    width: 500px;
    height: 30px;
}

</style>

<template>
    <Card :bordered="false" dis-hover >
        <p slot="title" >{{  title }}</p>
        <a v-if="!!btntext" href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            {{ btntext }}
        </a>
        <ul class="news_sub_list" >
            <li v-for="item in list ">
                <a class="txt" :href="item.url" target="_blank">{{ item.name }}</a>
                <span class="item_time" >
                    {{ item.time }}
                </span>
            </li>
        </ul>
    
    </Card>
  
</template>
<script>

    var dataList = [
        {
            name: '肖申克的救赎',
            url: 'https://movie.douban.com/subject/1292052/',
            time: '2018/03/21'
        },
        {
            name: '这个杀手不太冷',
            url: 'https://movie.douban.com/subject/1295644/',
            time: '2018/03/21'
        },
        {
            name: '霸王别姬',
            url: 'https://movie.douban.com/subject/1291546/',
            time: '2018/03/21'
        },
        {
            name: '阿甘正传',
            url: 'https://movie.douban.com/subject/1292720/',
            time: '2018/03/21'
        },
        {
            name: '美丽人生',
            url: 'https://movie.douban.com/subject/1292063/',
            time: '2018/03/21'
        },
        {
            name: '千与千寻',
            url: 'https://movie.douban.com/subject/1291561/',
            time: '2018/03/21'
        },
        {
            name: '辛德勒的名单',
            url: 'https://movie.douban.com/subject/1295124/',
            time: '2018/03/21'
        }
    ];
    export default {
        props:{
            title:String,
            btntext:{
                type: String,
                default: '查看更多'
            },
            list:{
                type:Array,
                default:()=> dataList
            }
        },
        methods:{
            changeLimit(){

            }
        }
    };
    
</script>