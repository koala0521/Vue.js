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
			<card-list class="cotent-item"  title="业务体系1" ></card-list>
			<card-list class="cotent-item"  title="业务体系2" ></card-list>
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
			siderMenuData: this.$t("content")[0].PRODUCTS.siderMenu
                
		};
	}
};
</script>
