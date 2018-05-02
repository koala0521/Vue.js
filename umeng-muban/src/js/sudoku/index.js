
var events = require('events');
var eventEmitter = new events.EventEmitter();

window.lottery={
    index:-1,    //当前转动到哪个位置，起点位置
    count:0,    //总共有多少个位置
    timer:0,    //setTimeout的ID，用clearTimeout清除
    autoTimer:0,    //自动播放的id
    speed:20,    //初始转动速度
    times:0,    //转动次数
    cycle:50,    //转动基本次数：即至少需要转动多少次再进入抽奖环节
    prize:-1,    //中奖位置
    init:function(id){
        if ($("#"+id).find(".lottery-unit").length>0) {
            this.$lottery = $("#"+id);
            this.$units = this.$lottery.find(".lottery-unit");
            this.obj = this.$lottery;
            this.count = this.$units.length;
            this.$lottery.find(".lottery-unit-"+this.index).addClass("active");
        }
    },
    autoPlay:function(){
        let _this = this;
        this.autoTimer = setInterval(function(){
            _this.index++;
            _this.index = _this.index>=_this.count?0:_this.index;
            _this.$lottery.find(".lottery-unit").removeClass("active");
            _this.$lottery.find(".lottery-unit-"+_this.index).addClass("active");
        },800)
    },
    stopAutoPlay:function(){
        clearInterval(this.autoTimer);
        this.autoTimer = null;
    },
    roll:function(){
        let index = this.index;
        let count = this.count;
        let lotteryObj = this.obj;
        $(lotteryObj).find(".lottery-unit-"+index).removeClass("active");
        index += 1;
        if (index>count-1) {
            index = 0;
        }
        $(lotteryObj).find(".lottery-unit-"+index).addClass("active");
        this.index=index;
        return false;
    },
    stop:function(index){
        this.prize=index;
        return false;
    }
};

function roll(){
    lottery.times += 1;
    lottery.roll();//转动过程调用的是lottery的roll方法，这里是第一次调用初始化
    if (lottery.times > lottery.cycle+10 && lottery.prize==lottery.index) {
        clearTimeout(lottery.timer);

        //抽到奖-停止转动
        eventEmitter.emit('showPriseResult');

    }else{
        if (lottery.times<lottery.cycle) {
            lottery.speed -= 10;
        }else if(lottery.times==lottery.cycle) {
            // var index = Math.random()*(lottery.count)|0;
            var index = Math.random()-0.5>0?3:7;
            lottery.prize = index;
        }else{
            if (lottery.times > lottery.cycle+10 && ((lottery.prize==0 && lottery.index==7) || lottery.prize==lottery.index+1)) {
                lottery.speed += 110;
            }else{
                lottery.speed += 20;
            }
        }
        if (lottery.speed<40) {
            lottery.speed=40;
        }
        lottery.timer = setTimeout(roll,lottery.speed);//循环调用
    }
    return false;
}

var click=false;




window.Sudoku = function(){
    this.limitTimes = null;     //允许转动的次数；
    this.resData = null;
    this.netTypeArray = ["undefined", "ethernet", "wifi", "edge", "2g", "3g","4g"];

    this.init();
};
Sudoku.prototype = {
    constructor: Sudoku,
    init: function () {
        this.setDefault(); //进入重置效果
        this.bindEvent();
    },
    bindEvent:function(){
        let _this = this;

        $("#j-start").on("click", function() {
            if (click) {//click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
                return false;
            }else{

                lottery.stopAutoPlay();
                if(!_this.limitTimes||_this.limitTimes<=0){
                    _this.showLimited();
                    _this.setLimitAnalysis();
                }else{
                    _this.setClickAnalysis();
                    lottery.speed=100;
                    roll();    //转圈过程不响应click事件，会将click置为false
                    click=true; //一次抽奖完成后，设置click为true，可继续抽奖

                    $('#a-times').text(_this.limitTimes-1);
                    _this.getPrize();
                    return false;
                }
            }
        });

        eventEmitter.on('showPriseResult',function(){
            setTimeout(function(){
                let result = _this.resData;
                if(result && result.error_code == 0){
                    _this.showPrize();
                } else {
                    _this.getPrizeFail();
                }
            },500)
        });


        //关闭弹窗
        $('.pop-position').on('touchstart','.close,.close-btn',function(){
            _this.hidePrize();
        });

    },
    setDefault:function(){
        this.setCache();
        this.getTimes();
        lottery.init('lottery');

        lottery.autoPlay();
    },
    setClickAnalysis:function(){
        let _this = this;
        if(!window._hmt){
            setTimeout(function(){
                _this.setClickAnalysis();
            },500)
        }else{
            window._hmt.push(['_trackEvent', '九宫格','抽奖', 't5']);
        }
    },
    setLimitAnalysis:function(){
        let _this = this;
        if(!window._hmt){
            setTimeout(function(){
                _this.setLimitAnalysis();
            },500)
        }else{
            window._hmt.push(['_trackEvent', '九宫格-次数已用完','抽奖', 't5']);
        }
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
                        $('#a-times').text(_this.limitTimes);
                    }
                }
            });
        }
    },
    setCache:function(){    /*设置缓存*/
        for (var key in CFG){
            if (CFG[key] == '' && this.getUrlItem(key) != null) {
                CFG[key] = this.getUrlItem(key);
                store.set(key,CFG[key]);
            }
        }
    },
    getUrlItem:function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    getPrize:function(){    /*抽中红包，获取奖项*/
        var _this = this;

        this.resData = {};

        var ajaxTimeoutTest = $.ajax({
            url: '/url/advert',
            type: "post",
            contentType: "application/json;",
            data: JSON.stringify(_this.collReqData()),
            timeout: 3000,
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                if(status=='timeout'){//超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    _this.getPrizeFail();
                    click = false;
                }
                _this.resData = XMLHttpRequest.responseJSON||{};
                if (_this.resData.error_code == 0) {
                    _this.limitTimes = _this.resData.limitTimes;
                }
            },
            success: function (result) {
                // if(result && result.error_code == 0){
                //     _this.resData = result;
                //     _this.showPrize();
                // } else {
                //     _this.getPrizeFail();
                // }
                // _this.ajaxing = false;
                // if(result&&result.limitTimes){
                //     _this.limitTimes = result.limitTimes
                // }
            },
            error: function(err){
                // _this.getPrizeFail();
                // _this.ajaxing = false;
                // if(err&&err.limitTimes){
                //     _this.limitTimes = err.limitTimes
                // }
            }
        });
    },
    getPrizeFail:function(){
        if (this.resData['error_code'] && this.resData['limitTimes'] > 0 ){
            this.limitTimes = this.resData['limitTimes'];
        }
        this.showNoResult();
    },
    showPrize:function(){
        var _this = this;
        var $popPosition = $('.pop-position ');

        var $countZa = $('#a-times');
        this.limitTimes = this.resData&&this.resData.limitTimes;
        $countZa.text(this.limitTimes||0);


        //请求成功，发送检波
        if (_this.resData['adms']) {
            var adMsg = _this.resData['adms'][0];

            $popPosition.find('.prizes-img').attr('src',adMsg.imgurls);
            $popPosition.find('.prizes-name').text(adMsg.title);

            _this.showLog(adMsg['imptrackers']);


            $('.prizes-zoom-box,#hdgg_click_ad_btn')
                .unbind( "click" )
                .on('click',function () {
                    _this.clickLog(adMsg['clktrackers']);

                    setTimeout(function () {
                        window.location.href = adMsg['clkurl']; //跳转页面
                    },600);
                });
        }
        $popPosition.find('.prizes-no-cont').hide();
        $popPosition.find('.prizes-cont-box').removeClass('hdgg_result_hide_animation').addClass('hdgg_result_show_animation').show();
        $popPosition.show();

    },
    showNoResult:function(){
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').show();
        $popPosition.find('.prizes-cont-box').hide();
        $('.prizes-no-cont .prizes-no-img').attr('src','./dist/img/sudoku/prizes-pop-fail.png');
        $popPosition.show();
    },
    showLimited:function(){
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').show();
        $popPosition.find('.prizes-cont-box').hide();
        $('.prizes-no-cont .prizes-no-img').attr('src','./dist/img/sudoku/prizes-pop-no.png');
        $popPosition.show();
    },
    hidePrize:function(){
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').hide();
        $popPosition.find('.prizes-cont-box').removeClass('hdgg_result_show_animation').addClass('hdgg_result_hide_animation');
        $popPosition.fadeOut();
        lottery.autoPlay();
        lottery.prize=-1;
        lottery.times=0;
        click=false;
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
    }
};


new Sudoku();









