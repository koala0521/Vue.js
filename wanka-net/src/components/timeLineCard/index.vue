<style scoped>

    .container{
        padding-top: 2em;
        position: relative;
        border-left: 1px solid #dddee1;
    }
    .container .list-wrap{
        /* border-left: 1px solid #dddee1; */
        padding-left: 5em;
    }
    .list-title{
        padding-left: 5em;
        text-indent: -14px;
    }
    .container .header{
        position: absolute;
        top: 0px;
        left: 0px;
        background: #fff;
        transform: translateX(-50%) translateY(-50%);
        line-height: 4em;
        width: 6em;
        text-align: center;
    }
    .container.first{
        padding-top: 0;
    }
    .container .list{
        border-bottom: 1px solid #e4e0e0;
        padding: 1em 0 3em 0;
    }
    .container .list.last{
        border-bottom: none;
        padding-bottom: 0;
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
  
    <Card
        :bordered="false"
        dis-hover 
        class="ptb20" 
    >
        <p slot="title" class="list-title" >
            {{ title }} 
        </p>
        <div class="card-cont mt20">

            <div 
                class="container" 
                v-for="(item , index) in list"
                :key="item.id"
                :class="{ first: index === 0 }"
            >
                <div class="header">{{ item.year }}</div>
                <div class="list-wrap">
                    <ul 
                        class="list" 
                        :class="{ last: index === list.length - 1 }" 
                    >
                        <li 
                            class="clear-both" 
                            v-for="val in item.list " 
                            :key="val.id"                                 
                        >
                            <a 
                                class="txt" 
                                target="_blank"
                                :title="val.title"
                                @click="toDetail(val)" 
                            >
                                {{ textClip(val.title , 32) }}
                            </a>
                            <span class="item_time" >
                                {{ formatTime(val.ctime) }}
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </Card>

</template>
<script> 
    import { Card  } from 'iview';
    import { formatDate } from '../../libs/util';

    export default{
        components:{
            Card,
        },
        props:['list' , 'title'],
        data(){
            return {           
            }
        },
        methods:{
            // 格式化时间
            formatTime(ctime){
                let time = ctime*1000;
                return formatDate(time , '/' ).split(' ')[0]
            },
            // 文字溢出处理
            textClip( text , len ){
                len  = len || text.length;
                if( len && text.length <= len ){
                    return text
                }
                return text.substr( 0 , len ) + '...'
            },
            // 跳转详情页
            toDetail(item){

                // PDF文件跳转新页面
                if( item.url ){
                    window.open( item.url , '_blank' )
                    return
                }

                this.$router.push({

                    path: this.$route.path + '/detail',
                    query:{
                        id:item.id || 0
                    }
                });
            }
        }
    };

</script>