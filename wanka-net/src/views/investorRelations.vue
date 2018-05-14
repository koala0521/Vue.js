//  投资者关系
// 企业文化

<style scoped >

   .wrap{
       padding-top: 30px;
   }

</style>

<template>
	<div class="wrap cont-width" >  
		<sider-menu :list="siderMenuData.list"  :mainTitle="siderMenuData.mainTitle"  ></sider-menu>
		<div class="sub_cont" >
			<card-list class="cotent-item"  title="核心理念" ></card-list>
			<card-list class="cotent-item"  title="员工活动" ></card-list>
		</div>
	</div>

</template>
<script>
import cardList from "../components/card";
import siderMenu from "../components/siderMenu";

export default {
	components:{
		siderMenu,
		cardList
	},
	data() {
		return {
			// 左侧菜单数据
			siderMenuData: this.$t("content")[0].INVESTOR.siderMenu
                
		};
	}
};
</script>
