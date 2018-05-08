<style scoped >
    .sub-sider{
        position: fixed;
        top: 94px;
        width: 200px;
        text-align: right;
    }
    .menu-title{
       padding: 14px 24px;
       border-color: transparent;
   }
</style>
<template>
    <div class="sub-sider" >
        <div class="menu-title ivu-card-head" >
            <p>公司信息</p>
        </div>
        <Menu active-name="1-1" :style="{ width:'100%' }" > 
            <MenuItem name="1-1">
                <a href="#company_charity">公司动态</a>
            </MenuItem>
            <MenuItem name="1-2">
                <a href="#company_dev">发展历程</a>    
            
            </MenuItem>
            <MenuItem name="1-3">
                <a href="#company_board">管理团队</a>
            </MenuItem> 
        </Menu>  
    </div>
</template>

<script>
    export default {
        
    };
    
</script>
