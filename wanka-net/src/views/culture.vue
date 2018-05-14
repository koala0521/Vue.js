// 企业文化

<style scoped >

   .wrap{
       padding-top: 30px;
   }
   .item-title{
	   line-height: 2em;
	   font-size: 1.1em;
   }
   .item-summary{
	   line-height: 2.2em;
	   font-size: 1.1em;
	   padding-bottom: 0.5em;
   }
   .item-text{
	   line-height: 1.8em;
   }
   .ofset{
	   margin-left: 5.833334%;
   }

</style>

<template>
	<div class="wrap cont-width" >  
		<sider-menu :list="siderMenuData.list"  :mainTitle="siderMenuData.mainTitle"  ></sider-menu>
		<div class="sub_cont" >
			<Card 
			 	:bordered="false"
				dis-hover 
				class="cotent-item pb30" 
			>
				<p slot="title">
					<Icon type="ios-film-outline"></Icon>
					{{ coreIdea.title }}
				</p>

				<div class="card-cont" >
					<Row >
						<Col span="11" class="item-col" >  
							<img class="wfull" src="../assets/img/idea_1.jpg" alt="" />
							<div>
								<h4  class="item-title" > 
									{{ coreIdea.list[0].title }} 
								</h4>
								<p class="item-summary" >

									{{ coreIdea.list[0].summary }}

								</p> 
								<p class="breakword item-text" >

									{{ coreIdea.list[0].text }}
								</p>
							</div>
						</Col>
						<Col span="11" offset="2" class="item-col" >  
							<img  class="wfull" src="../assets/img/idea_2.jpg" alt=""/>
							<div>
								<h4  class="item-title" > 
									{{ coreIdea.list[1].title }} 
								</h4>
								<p class="item-summary" >

									{{ coreIdea.list[1].summary }}

								</p> 
								<p class="breakword item-text" >

									{{ coreIdea.list[1].text }}
								</p>
							</div>
						</Col>
						
					</Row>
					<Row>
						<Col span="11" class="item-col last" >  
							<img class="wfull" src="../assets/img/idea_3.jpg" alt=""/>
							<div>
								<h4  class="item-title" > 
									{{ coreIdea.list[2].title }} 
								</h4>
								<p class="item-summary" >

									{{ coreIdea.list[2].summary }}

								</p> 
								<p class="breakword item-text" >

									{{ coreIdea.list[2].text }}
								</p>
							</div>
						</Col>
						<Col span="11"  offset="2" class="item-col last" >  
							<img class="wfull" src="../assets/img/idea_4.jpg" alt=""/>
							<div>
								<h4  class="item-title" > 
									{{ coreIdea.list[3].title }} 
								</h4>
								<p class="item-summary" >

									{{ coreIdea.list[3].summary }}

								</p> 
								<p class="breakword item-text" >

									{{ coreIdea.list[3].text }}
								</p>
							</div>
						</Col>
					</Row>

				</div>
			</Card>

			<!-- <card-list class="cotent-item last"  title="员工活动" ></card-list> -->

			<Card 
			 	:bordered="false"
				dis-hover 
				class="cotent-item last" 
			>
				<p slot="title">
					<Icon type="ios-film-outline"></Icon>
					{{ coreIdea.title }}
				</p>

				<div class="card-cont" >
					<Row>
						<Col span="7" class="item-col last" >  
							<img class="wfull" src="../assets/img/act_1.jpg" alt=""/>
							<div>
								<h4  class="item-title" > 
									{{ coreIdea.list[2].title }} 
								</h4>
								<p class="item-summary" >

									{{ coreIdea.list[2].summary }}

								</p> 
								<p class="breakword item-text" >

									{{ coreIdea.list[2].text }}
								</p>
							</div>
						</Col>

						<Col span="7" class="item-col last ofset" >  
							<img class="wfull" src="../assets/img/act_2.jpg" alt=""/>
							<div>
								<h4  class="item-title" > 
									{{ coreIdea.list[2].title }} 
								</h4>
								<p class="item-summary" >
									{{ coreIdea.list[2].summary }}
								</p> 
								<p class="breakword item-text" >
									{{ coreIdea.list[2].text }}
								</p>
							</div>
						</Col>

						<Col span="7" class="item-col last ofset" >  
							<img class="wfull" src="../assets/img/act_3.jpg" alt=""/>
							<div>
								<h4  class="item-title" > 
									{{ coreIdea.list[3].title }} 
								</h4>
								<p class="item-summary" >

									{{ coreIdea.list[3].summary }}

								</p> 
								<p class="breakword item-text" >

									{{ coreIdea.list[3].text }}
								</p>
							</div>
						</Col>
					</Row>

				</div>
			</Card>

		</div>
	</div>

</template>
<script>
import cardList from "../components/card";
import siderMenu from "../components/siderMenu";
import { Card , Icon , Row , Col } from 'iview';

export default {
	components:{
		siderMenu,
		cardList,
		Card,
		Icon,
		Row,
		Col
	},
	data() {
		return {
			// 左侧菜单数据
			siderMenuData: this.$t("content")[0].CULTURE.siderMenu,

			// 核心理念
			coreIdea:this.$t("content")[0].CULTURE.core
                
		};
	}
};
</script>
