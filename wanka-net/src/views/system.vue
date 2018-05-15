// 业务体系
<style scoped >

   .wrap{
       padding-top: 30px;
   }

</style>

<template>
	<div class="wrap cont-width" >  
		<sider-menu :list="siderMenuData.list"  :mainTitle="siderMenuData.mainTitle"  ></sider-menu>
		
		<div class="sub_cont" >
			<!-- <card-list class="cotent-item"  title="业务体系1" ></card-list>
			<card-list class="cotent-item"  title="业务体系2" ></card-list> -->
			<Card

                :bordered="false"
				dis-hover 
				class="cotent-item" 
				v-for="item , index in content"
				:key="index"
				:class="{ last : (index === content.length - 1 ) }"
            >
                <p slot="title">
					<!-- <Icon type="ios-film-outline"></Icon> -->
					{{ item.title }}
                    
				</p>
                <div class="card-cont" v-html="item.text" > 

                </div>

            </Card>
		</div>
	</div>

</template>
<script>
import cardList from "../components/card";
import siderMenu from "../components/siderMenu";
import { Card , Icon } from 'iview';

export default {
	components:{
		siderMenu,
		cardList,
		Card,
		Icon
	},
	data() {
		return {
			// 左侧菜单数据
			siderMenuData: this.$t("content")[0].PRODUCTS.siderMenu,
			content : this.$t("content")[0].PRODUCTS.content
                
		};
	}
};
</script>
