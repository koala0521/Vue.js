// 投资者关系 > 财务新闻稿
<style scoped>
.content {
    width: 900px;
    margin: 0 auto;
}

.container {
    padding-top: 2em;
    position: relative;
    border-left: 1px solid #dddee1;
}
.container .list-wrap {
    /* border-left: 1px solid #dddee1; */
    padding-left: 5em;
}
.list-title {
    padding-left: 5em;
    text-indent: -14px;
}
.container .header {
    position: absolute;
    top: 0px;
    left: 0px;
    background: #fff;
    transform: translateX(-50%) translateY(-50%);
    line-height: 4em;
    width: 6em;
    text-align: center;
}
.container.first {
    padding-top: 0;   
}
.container .list {
    border-bottom: 1px solid #e4e0e0;
    padding: 1em 0 3em 0;
}
.container .list.last {
    border-bottom: none;
    padding-bottom: 0;
}
.item_time {
    float: right;
}
a.txt {
    float: left;
    line-height: 30px;
    color: #5e6267;
    font-size: 14px;
    text-decoration: none;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    max-width: 500px;
    height: 30px;
}
a.txt:hover {
  color: #2d8cf0;
}
.small-title {
    font-weight: 600;
    padding: 10px 0;
}
</style>

<template>
<div  class="cont-width" >
    <div class="ptb20" >
        <Breadcrumb separator=">" >

            <BreadcrumbItem 
                v-for="(item , index) in BreadcrumbList"
                :key="index"
                :to="item.path"
            >
                {{ localData.BreadcrumbList[index].title }}
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
    <div class="content" >
        <Card
            :bordered="false"
            dis-hover 
            class="ptb20" 
        >
            <p slot="title" class="list-title" >
                {{ localData.title }} 
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
						<!-- 业绩新闻 -->
						<div v-if=" !!filterList(item.list , 1).length " >
							<p class="small-title" >{{ localData.listType[1] }}</p>
							<ul>
								<li 
									class="clear-both" 
									v-for="val in filterList(item.list , 1)" 
									:key="val.id"                                 
								>
									<a 
										class="txt" 
										target="_blank" 
										:href="val.url" 
										:title="val.title" 
									>
										{{ textClip(val.title , 32) }}
									</a>
									<span class="item_time" >
										{{ formatTime(val.ctime) }}
									</span>
								</li>
							</ul>							
						</div>
						<!-- 其他新闻 -->
						<div 
							:class="{ last: index === list.length - 1 }" 
							class="list" 
							v-if=" !!filterList(item.list , 2).length " 
						>
							<p class="small-title" >{{ localData.listType[2] }}</p>
							<ul>
								<li 
									class="clear-both" 
									v-for="val in filterList(item.list , 2)" 
									:key="val.id"                                 
								>
									<a 
										class="txt" 
										target="_blank" 
										:href="val.url" 
										:title="val.title" 
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
            </div>
        </Card>

        <!-- 加载按钮 -->
        <div v-show="hasMore" class="mb40" >
            <Button 
                type="ghost"  
                long
                @click="loadMore"
            >
                {{ clickMoreLocal }}
            </Button>
        </div>

    </div>
    <Spin size="large" fix v-if="loading"></Spin>    
</div>
</template>
<script>
import { Breadcrumb, BreadcrumbItem, Card, Tooltip, Button, Spin } from "iview";
import { formatDate, textClip } from "../libs/util";
// import timeLineCard from '../components/timeLineCard';

export default {
  components: {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Tooltip,
    Button,
    Spin
  },
  data() {
    return {
      // 面包屑数据
      BreadcrumbList: [
        {
          path: "/investor"
        },
        {
          path: ""
        }
      ],

      list: [
        {
          year: "2018",
          list: [
            {
              child_programa_name: "",
              child_programa_id: "",
              title: "玩咖公布第四季度及全年业绩",
              img:
                "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
              url: "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
              ctime: "1462590847",
              type: 1
            },
            {
              child_programa_name: "",
              child_programa_id: "",
              title: "玩咖公布第三季度业绩",
              img:
                "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
              url: "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
              ctime: "1462590847",
              type: 1
            },
            {
              child_programa_name: "",
              child_programa_id: "",
              title: "玩咖公布第一季度业绩",
              img:
                "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
              url: "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
              ctime: "1462590847",
              type: 2
            }
          ]
        },
        {
          year: "2017",
          list: [
            {
              child_programa_name: "",
              child_programa_id: "",
              title: "玩咖公布第二季度业绩",
              img:
                "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
              url: "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
              ctime: "1462590847",
              type: 2
            },
            {
              child_programa_name: "",
              child_programa_id: "",
              title:
                "玩咖公布第一季度业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩",
              img:
                "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
              url: "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
              ctime: "1462590847",
              type: 1
            }
          ]
        }
      ],
      // 记录页码
      cPage: 1,

      // 是否显示查看更多
      hasMore: true,
      // 加载中
      loading: false,

      // 语言包
      localData: this.$t("content")[0].FinanceNews,

      // 点击查看更多语言包
      clickMoreLocal: this.$t("clickToSeeMore")
    };
  },
  methods: {
    formatTime(ctime) {
      let time = ctime * 1000;
      return formatDate(time, "/").split(" ")[0];
    },
    // 文字溢出处理
    textClip: textClip,

    // 按照数据类型查分数组
    filterList(list, type) {
      list = list || [];
      return list.filter(item => {
        return item.type === type;
      });
    },

    loadMore() {
      ++this.cPage;
      this.list.push({
        year: "2016",
        list: [
          {
            child_programa_name: "",
            child_programa_id: "",
            title: "玩咖公布第二季度业绩",
            img:
              "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
            url: "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
            ctime: "1462590847",
            type: 2
          },
          {
            child_programa_name: "",
            child_programa_id: "",
            title:
              "玩咖公布第一季度业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩玩咖公布第四季度及全年业绩",
            img:
              "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
            url: "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
            ctime: "1462590847",
            type: 2
          }
        ]
      });

      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
};
</script>