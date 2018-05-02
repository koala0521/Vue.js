

function RedRain(){
    this.ajaxing = false;
    this.waitTime = 3;
    this.addTimer = null;
    this.resData = null;
    this.limitTimes = null;
    this.netTypeArray = ["undefined", "ethernet", "wifi", "edge", "2g", "3g","4g"];
    this.init();
}

RedRain.prototype = {
    constructor : RedRain,
    init : function(){
        this.setDefault(); //进入重置效果
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        var $body = $('body');

        //开始抽奖
        $body.on('touchstart','#start',function(){
            _this.setWaitTime();
        });

        //抽中红包
        $body.on('touchstart','.couten li',function(){
            if(_this.ajaxing) return;
            _this.getPrize();
        });

        //关闭弹窗
        $body.on('touchstart','.close,.close-btn',function(){
            _this.hidePrize();
            _this.resetRain();
        });

    },
    setWaitTime:function(){     /*设置等待时间3秒*/
        var _this = this;
        this.waitTime = 3;
        var $start = $('#start,.startlv');
        var $wait = $('.backward');
        var $count = $('.count');

        $start.hide();
        $count.hide();
        $wait.show();
        $wait.find('span').text(this.waitTime);
        $('#contaner').empty();
        this.resData = {};

        var timer = null;
        timer = setInterval(function(){
            _this.waitTime--;
            if(_this.waitTime>0){
                $wait.find('span').text(_this.waitTime);
            }else{
                clearInterval(timer);

                $wait.hide();
                _this.startRain();
            }
        },1000);
    },
    startRain:function(){       /*开始红包雨动画*/
        var _this = this;
        var $guang = $('.guang');
        var $couten = $(".couten");
        var $liItem = $couten.find('li');
        var win = (parseInt($couten.css("width"))) - 60;
        var num = 0;

        $guang.show();
        $couten.css("height", $(document).height());
        $liItem.css({});

        var add = function() {
            var hb = parseInt(Math.random() * (3 - 1) + 1);
            var Wh = parseInt(Math.random() * (50 - 30) + 30);
            var Left = parseInt(Math.random() * win);
            var rot = (parseInt(Math.random() * (45 - (-45)) - 45)) + "deg";
            num++;
            $couten.append("<li class='li" + num + "' ><a href='javascript:;'><img src='./dist/img/redRain/moneyhb_" + hb + ".png'></a></li>");

            var $liNum = $(".li" + num);
            $liNum.css({
                "left": Left
            });
            $(".li" + num + " a img").css({
                "width": Wh,
                "transform": "rotate(" + rot + ")",
                "-ms-transform": "rotate(" + rot + ")", /* Internet Explorer */
                "-moz-transform": "rotate(" + rot + ")", /* Firefox */
                "-webkit-transform": "rotate(" + rot + ")",/* Safari 和 Chrome */
                "-o-transform": "rotate(" + rot + ")" /* Opera */
            });
            $liNum.animate({'top':$(window).height()+20},5000,function(){
                //删掉已经显示的红包
                this.remove()
            });

            _this.addTimer = setTimeout(add,200)
        };

        setTimeout(add,300);
    },
    setDefault:function(){
        this.setCache();
        this.getTimes();    
    },
    setCache:function(){    /*设置缓存*/
        for (var key in CFG){
            if (CFG[key] == '' && this.getUrlItem(key) != null) {
                CFG[key] = this.getUrlItem(key);
                store.set(key,CFG[key]);
            }
        }
    },
    setClickAnalysis:function(){
        let _this = this;
        if(!window._hmt){
            setTimeout(function(){
                _this.setClickAnalysis();
            },500)
        }else{
            window._hmt.push(['_trackEvent', '红包雨','抽奖', 't3']);
        }
    },
    setLimitAnalysis:function(){
        let _this = this;
        if(!window._hmt){
            setTimeout(function(){
                _this.setLimitAnalysis();
            },500)
        }else{
            window._hmt.push(['_trackEvent', '红包雨-次数已用完','抽奖', 't3']);
        }
    },
    getNetwork:function(){      /*获取网络环境*/
        var t = null,
            netType = 0
            , e = window.navigator.userAgent
            , n = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        if (/MicroMessenger/.test(e))
            if (/NetType/.test(e)) {
                var i = e.match(/NetType\/(\S*)/);
                t = i[1];
            } else
                document.addEventListener("WeixinJSBridgeReady", function() {
                    WeixinJSBridge.invoke("getNetworkType", {}, function(e) {
                        t = e.err_msg
                    });
                });
        else if (n) {
            var o = n.type;
            t = o;
        }
        var r = this.netTypeArray;
        if (typeof(t) != 'string') t = 'undefined';
        t = t.toLowerCase();
        for (var k=0;k<r.length;k++){
            if(t.indexOf(r[k]) > -1) {
                netType = k;
                break;
            }
        }
        return netType;
    },
    collReqData:function(){
        var reqData = {
            template_id: window.CFG['template_id'],
            device_id:  store.get('device_id') || this.getUrlItem('device_id'),
            app_id: store.get('app_id') ||this.getUrlItem('app_id'),
            adslot_id: store.get('adslot_id') ||this.getUrlItem('adslot_id'),
            connect_type: this.getNetwork(),
            width:  $(window).width(),
            height: $(window).height(),
            timestamp: +new Date(),
        };
        return reqData;
    },
    getTimes:function(){    /*获取抽奖次数*/
        var _this = this;
        var deviceId = store.get('device_id') || this.getUrlItem('device_id');

        if (deviceId != 'null') {
            var timesData = {
                template_id: window.CFG['template_id'],
                app_id: store.get('app_id') ||this.getUrlItem('app_id'),
                adslot_id: store.get('adslot_id') ||this.getUrlItem('adslot_id'),
                device_id: deviceId,
                timestamp: +new Date(),
            };
            $.ajax({
                url: '/url/init',
                type: "post",
                contentType: "application/json;",
                data: JSON.stringify(timesData),
                success: function (result) {
                    if (result.limitTimes >= 0) {
                        _this.limitTimes = result.limitTimes;
                        $('#countZa').text(_this.limitTimes);
                    }
                }
            });
        }
    },
    getUrlItem:function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    getPrize:function(){    /*抽中红包，获取奖项*/
        var _this = this;
        this.stopRain();

        if(this.limitTimes<=0){
            _this.setLimitAnalysis();
            return this.showLimited();
        }

        this.ajaxing = true;
        _this.setClickAnalysis();

        var ajaxTimeoutTest = $.ajax({
            url: '/url/advert',
            type: "post",
            contentType: "application/json;",
            data: JSON.stringify(_this.collReqData()),
            timeout: 30000,
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                if(status=='timeout'){//超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    _this.getPrizeFail();
                }
            },
            success: function (result) {
                _this.resData = result;
                _this.limitTimes = result.limitTimes;

                if(result && result.error_code == 0){
                    _this.showPrize();
                } else {
                    _this.getPrizeFail();
                }
                _this.ajaxing = false;
            },
            error: function(err){
                _this.getPrizeFail();
                _this.ajaxing = false;
                if(err&&err.limitTimes){
                    _this.limitTimes = err.limitTimes
                }
            }
        });
    },
    getPrizeFail:function(){
        if (this.resData['error_code'] && this.resData['limitTimes'] >= 0 ){
            this.limitTimes = this.resData['limitTimes'];
        }
        this.showNoResult();
    },
    showPrize:function(){   /*展示奖项弹窗*/
        var _this = this;
        var $popPosition = $('.pop-position ');

        var $countZa = $('#countZa');
        this.limitTimes = this.resData.limitTimes;
        $countZa.text(this.limitTimes||0);


        //请求成功，发送检波
        if (_this.resData['adms']) {
            var adMsg = _this.resData['adms'][0];

            $popPosition.find('.prizes-img').attr('src',adMsg.imgurls);
            $popPosition.find('.prizes-name').text(adMsg.title);

            _this.showLog(adMsg['imptrackers']);


            $('.prizes-zoom-box')
                .unbind( "click" )
                .on('click',function () {
                    _this.clickLog(adMsg['clktrackers']);

                    setTimeout(function () {
                        window.location.href = adMsg['clkurl']; //跳转页面
                    },600);
                });
        }
        $popPosition.find('.prizes-no-cont').hide();
        $popPosition.find('.prizes-cont-box').show();
        $popPosition.fadeIn();

    },
    stopRain:function(){    /*停止红包雨动画*/
        var $couten = $(".couten");
        var $liItem = $couten.find('li');
        $liItem.css({
            opacity:0
        });

        clearTimeout(this.addTimer);
    },
    showNoResult:function(){    /*获奖弹窗-失败弹窗*/
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').show();
        $popPosition.find('.prizes-cont-box').hide();
        $('.prizes-no-cont .prizes-no-img').attr('src','./dist/img/redRain/prizes-pop-fail.png');
        $popPosition.show();
    },
    showLimited:function(){
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').show();
        $popPosition.find('.prizes-cont-box').hide();
        $('.prizes-no-cont .prizes-no-img').attr('src','./dist/img/redRain/prizes-pop-no.png');
        $popPosition.show();
    },
    hidePrize:function(){
        var $popPosition = $('.pop-position ');
        $popPosition.hide();
    },
    resetRain:function(){       /*重置抽奖初始化页面*/
        var $guang = $('.guang');
        var $start = $("#start,.startlv");
        var $backward = $('.backward');
        var $count = $('.count');
        $('#countZa').text(this.limitTimes);

        $guang.hide();
        $start.show();
        $backward.hide();
        $count.show();
    },
    showLog:function(urlArray){
        if (urlArray.length < 1 ) return;
        for(var i=0;i<urlArray.length;i++){
            $('#contaner').append('<img class="imptrace" src="'+ urlArray[i] +'" />');
        }
    },
    clickLog:function(urlArray){
        if (urlArray.length < 1 ) return;
        for(var j=0;j<urlArray.length;j++){
            $('#contaner').append('<img class="clicktrace" src="'+ urlArray[j] +'" />');
        }
    }
};

module.exports = new RedRain();