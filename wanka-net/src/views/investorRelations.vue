//  投资者关系
<style scoped >

   .wrap{
       padding-top: 30px;
   }
	.news-sub-list{
		height: auto;
	}
	.news-sub-list li{
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
	.small-title{
		font-weight: 600;
		padding: 10px 0;
	}

</style>

<template>
	<div class="wrap cont-width" >  
		<sider-menu :list="siderMenuData.list"  :mainTitle="siderMenuData.mainTitle"  ></sider-menu>
		<div class="sub_cont" >

			<!-- 企业管制 -->
			<Card
				:bordered="false"
				dis-hover 
				class="cotent-item" 
			>
				<p slot="title" >
					{{ ctrl.title }} 
				</p>
				<div class="card-cont" v-html="ctrl.html" > </div>
			</Card>
			<!-- 财务新闻稿 -->

			<Card
				:bordered="false"
				dis-hover 
				class="cotent-item"
			>
				<p slot="title" >
					{{ financeNews.title }} 
				</p>
				<router-link :to="toFinanceNews" slot="extra" >
					{{ SeeMore }} 
				</router-link>
				<div class="card-cont">
					<p  class="small-title"  > {{ financeNews.SecondaryTitle[1] }} </p>
					<ul class="news-sub-list" >
						<li v-for="(item , index) in PerformanceNews " :key="index" >
							<a class="txt" :href="item.url" target="_blank">{{ item.title }}</a>
							<span class="item_time" >
								{{ formatTime(item.ctime) }}
							</span>
						</li>
					</ul>
					<p class="small-title" > {{ financeNews.SecondaryTitle[2] }} </p>
					<ul class="news-sub-list" >
						<li v-for="(item , index) in otherNews " :key="index" >
							<a class="txt" :href="item.url" target="_blank">
								{{ item.title }}
							</a>
							<span class="item_time" >
								{{ formatTime(item.ctime) }}
							</span>
						</li>
					</ul>					

				</div>
			</Card>
			<!-- 公司公告  -->
			<card-list 
				class="cotent-item"  
				:title="compNews.title" 
				:btntext="SeeMore"
				:list="compNews.list"
				:url="toCompNews"
			>
			</card-list>

			<!-- 财务报告 -->
			<Card
				:bordered="false"
				dis-hover 
				class="cotent-item"
			>
				<p slot="title" >
					{{ financeReport.title }} 
				</p>
				<router-link :to="toFinanceReport" slot="extra" >
					{{ SeeMore }} 
				</router-link>
				<div class="card-cont">
					<!-- financeReport -->
					<Row>
						<Col 
							class="tac prl10" 
							span="6" 
							v-for="(item , index) in financeReport.list"
							:key="index"
						>
						<a :href="item.url" target="_blank" :title="item.title" >
							<img class="pdf-img" :src="item.img" alt="" srcset="">
							<p class="pdf-title" >{{ textClip(item.title , 10 ) }}</p>						
						</a>
						</Col>
					</Row>
				</div>
			</Card>

			<!-- 投资者关系动态 -->
			<card-list 
				class="cotent-item"  
				:title="contactTrend.title" 
				:btntext="SeeMore"
				:list="contactTrend.list"
				:url="toContactTrend"
			>
			</card-list>
			
			<!-- 联系我们 -->
			<Card
				:bordered="false"
				dis-hover 
				class="cotent-item last" 
			>
				<p slot="title" >
					{{ contactUs.title }} 
				</p>
				<div class="card-cont" v-html="contactUs.html" ></div>
			</Card>

		</div>
	</div>

</template>
<script>
import cardList from "../components/card";
import siderMenu from "../components/siderMenu";
import { Card , Row ,Col } from 'iview';

import { formatDate , textClip } from '../libs/util';

export default {
	components : {
		siderMenu,
		cardList,
		Card,
		Row ,
		Col
	},
	data() {
		return {
			// 左侧菜单数据
			siderMenuData : this.$t("content")[0].INVESTOR.siderMenu,
			// 企业管制
			ctrl : this.$t("content")[0].INVESTOR.control,	
			// 财务新闻稿
			financeNews : {
				title : this.$t("content")[0].INVESTOR.financeNews.title,
				SecondaryTitle : this.$t("content")[0].INVESTOR.financeNews.SecondaryTitle,
				list : [
					{
						"child_programa_name": "业绩新闻",
						"child_programa_id": "400",
						"title": "玩咖公布2018第四季度及全年业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847",
						"type" : 1
					},
					{
						"child_programa_name": "业绩新闻",
						"child_programa_id": "400",
						"title": "玩咖公布2018第三季度业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847",
						"type" : 1
					},
					{
						"child_programa_name": "其他新闻",
						"child_programa_id": "420",
						"title": "玩咖公布2018第二季度及中期业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847",
						"type" : 2
					},
					{
						"child_programa_name": "业绩新闻",
						"child_programa_id": "400",
						"title": "玩咖公布2018第一季度业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847",
						"type" : 1
					},
					{
						"child_programa_name": "其他新闻",
						"child_programa_id": "420",
						"title": "玩咖公布2017第四季度及全年业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847",
						"type" : 2
					}
				]
			},
			//公司公告
			compNews : {
				title: this.$t("content")[0].INVESTOR.compNews.title,
				list : [
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布2018第四季度及全年业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布2018第三季度业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布2018第二季度及中期业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布2018第一季度业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布2017第四季度及全年业绩",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf",
						"ctime": "1462590847"
					}					
				]
			},
			// 财务报告
			financeReport : {
				title: this.$t("content")[0].INVESTOR.financeReport.title,
				list : [
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布第四季度及全年业绩",
						"img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布第三季度业绩",
						"img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布第二季度业绩",
						"img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布第一季度业绩",
						"img": "http://filemha.wankacn.com/20180402/77f17e87897efb73457d42071b34d820.jpg",
						"url": "http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf"
					}
				]				
			},
			// 投资者关系动态
			contactTrend : {
				title: this.$t("content")[0].INVESTOR.contactTrend.title,
				list : [
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布2018第四季度及全年业绩",
						"id": Math.random() ,
						"ctime": "1462590847"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布2018第三季度业绩",
						"id": Math.random() ,
						"ctime": "1462590847"
					},
					{
						"child_programa_name": "",
						"child_programa_id": "",
						"title": "玩咖公布2018第二季度及中期业绩",
						"id": Math.random() ,
						"ctime": "1462590847"
					}
				]
			},
			// 联系我们
			contactUs : this.$t("content")[0].INVESTOR.contactUs,
			// 查看更多
			SeeMore : this.$t("SeeMore"),

		};
	},
	computed : {

		// 跳转财务新闻稿
		toFinanceNews(){
			return this.$route.path + '/financenews'
		},
		// 跳转公司公告
		toCompNews(){
			return this.$route.path + '/news'
		},
		// 跳转财务报告
		toFinanceReport(){
			return this.$route.path + '/financereport'
		},
		// 跳转投资者关系动态
		toContactTrend(){
			return this.$route.path + '/investortrend'
		},		
		
		// 业绩新闻
		PerformanceNews(){
			
			return this.financeNews.list.filter(item=>{
				return item.type === 1
			});
		},
		// 其他新闻
		otherNews(){
			return this.financeNews.list.filter(item=>{
				return item.type === 2
			});
		}		
	},
	methods:{

		formatTime(ctime){
			let time = ctime*1000;
			return formatDate(time , '/' ).split(' ')[0]
		},
		// 文字超出处理
		textClip:textClip
	}
};
</script>
