<style scoped>
.footer {
  height: 190px;
  background: #3c3c3c;
  width: 100%;
  position: absolute;
  bottom: 0px;
  color: #bababa;
  z-index: 10;
}

.footer a{
    color: inherit;
}

.footer li{
  color: #bababa;
}
.footer .footer-top{
    height: 116px;
    margin: 0 auto;
    border-bottom: 1px solid #2b2b2b;
    padding-top: 23px;
}

.footer .footer-left p {
    text-align: left;
    color: #4282ee;
    font-size: 16px;
}

.footer .footer-left ul{
    padding: 22px 0;
}

.footer .footer-left li {
    margin-right: 25px;
    float: left;
    font-size: 14px;
}
.footer .footer-left li:hover {
    color: #507cbd;
    text-decoration: underline;
}

.footer-bottom-box {
    width: 100%;
    position: relative;
    padding: 30px 0;
}

.footer .footer-bottom-box .footer-text {
    float: left;
    font-size: 12px;
    color: #6e6e6e;
    line-height: 14px;
}
.footer .footer-bottom .footer-bottom-right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 148px;
    height: 25px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}


</style>

<template>
    <div class="footer">
        <div class="content-width">

            <div class="footer-top relative">
                <div class="footer-box">
                    <div class="footer-left">
                        <p>联盟成员</p>
                        <ul class="clear-both" >
                            <li><a href="https://dev.mi.com/console/app/newapp.html" target="_blank">小米开放平台</a></li>
                            <li><a href="http://apps.ztems.com/" target="_blank">中兴开发者平台</a></li>
                            <li><a href="http://developer.huawei.com/cn/consumer" target="_blank">华为开发者联盟</a></li>
                            <li><a href="http://devquickapp.gionee.com/  " target="_blank">金立开放平台</a></li>
                            <li><a href="http://open.lenovo.com/developer/" target="_blank">联想开放平台</a></li>
                            <li><a href="http://open.flyme.cn/" target="_blank">魅族开放平台</a></li>
                            <li><a href="http://developer.nubia.com/developer/view/index.html" target="_blank">努比亚开发者平台</a></li>
                            <li><a href="https://open.oppomobile.com/" target="_blank">OPPO开放平台</a></li>
                            <li><a href="https://dev.vivo.com.cn/" target="_blank">vivo开发者平台</a></li>
                            <li><a href="http://www.oneplus.cn/" target="_blank">一加官网</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom-box">
                <p class="footer-text">Copyright © 2018 QuickApp.cn All rights reserved. &nbsp;&nbsp;&nbsp;&nbsp;京ICP备14038000号-3</p>
            </div>

        </div>
    </div>
</template>
<script>
export default {};
</script>


