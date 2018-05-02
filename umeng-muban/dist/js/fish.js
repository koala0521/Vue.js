(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('fish');

var Fish = function Fish() {
    this.solo3 = '';
    this.solo31 = 1;
    this.catching = false;
    this.limitTimes = 0;
    this.resData = null;
    this.netTypeArray = ["undefined", "ethernet", "wifi", "edge", "2g", "3g", "4g"];
    this.$start = $('#startBtn');
    this.init();
};
Fish.prototype = {
    constructor: Fish,
    init: function init() {
        var _this = this;
        this.initSwiper();
        this.setCache();
        this.getTimes();
        this.bindEvent();
        setTimeout(function () {
            _this.leftAdd();
        }, 1000);
    },
    bindEvent: function bindEvent() {
        var _this = this;
        $("body").on("touchend", '.start-btn', function () {
            if (this.catching) return;

            if (!_this.limitTimes || _this.limitTimes <= 0) {
                _this.showLimited();
                _this.setLimitAnalysis();
            } else {
                _this.setClickAnalysis();
                $('#countZa').text(_this.limitTimes - 1);
                _this.catching = true;
                _this.getPrize();

                $('.rope-break').hide();
                $('.rope-catch').show();
                $('#catchOx').addClass('xactive');
                setTimeout(function () {
                    var leftg = $('#catchOx').offset().left;
                    var topg = $('#catchOx').offset().top;
                    var solos = $('.solo').find('div');
                    var indexda = '';
                    for (var i = 0; i < solos.length; i++) {
                        var middleX = solos.eq(i).offset().left;
                        if (middleX > 100 && middleX < 250) {
                            indexda = solos.eq(i).attr('indexdata');
                            solos.eq(i).hide();
                        }
                    }
                    var indexd = undefined ? 0 : indexda;
                    $('#catchOx .ox-catch').eq(indexd).show();
                    $('#catchOx').addClass('oactive');
                    setTimeout(function () {
                        $('#catchOx').removeClass('oactive').removeClass('xactive');
                        var result = _this.resData;
                        if (result && result.error_code == 0) {
                            _this.showPrize();
                        } else {
                            _this.getPrizeFail();
                        }
                    }, 800);
                }, 1000);
            }
        });

        //关闭奖项弹窗
        $('.popShowPrize').on('touchstart', '.close,.close-btn', function () {
            _this.hidePrize();
        });
        //关闭弹窗
        $('.popNoResult').on('touchstart', '.close,.close-btn', function () {
            _this.hidePrize();
        });
    },
    initSwiper: function initSwiper() {
        if (!Swiper) return;
        new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            freeMode: true
        });
    },
    setClickAnalysis: function setClickAnalysis() {
        var _this = this;
        if (!window._hmt) {
            setTimeout(function () {
                _this.setClickAnalysis();
            }, 500);
        } else {
            window._hmt.push(['_trackEvent', '捕鱼假日', '抽奖', 't7']);
        }
    },
    setLimitAnalysis: function setLimitAnalysis() {
        var _this = this;
        if (!window._hmt) {
            setTimeout(function () {
                _this.setLimitAnalysis();
            }, 500);
        } else {
            window._hmt.push(['_trackEvent', '捕鱼假日-次数已用完', '抽奖', 't7']);
        }
    },
    leftAdd: function leftAdd() {
        var _this = this;
        var speed = Math.ceil(Math.random() * 10);
        if (speed > 6) {
            speed = 5;
        }
        if (speed < 3) {
            speed = 5;
        }
        $('.solo').append('<div id="ox' + this.solo3 + '" indexdata="' + this.solo3 + '" class="ox-grey active1"><img src="./dist/img/fish/move' + this.solo31 + '.png"></div>');
        $('#ox' + this.solo3).css({ '-webkit-transform': 'translate3d(-40rem, 0px, 0px)', '-webkit-transition': 'transform ' + speed + 's linear 0s' });
        this.solo31++;
        this.solo3++;
        var lengtha = $('.solo').find('div').length;
        if (lengtha == 8) {
            $('.solo').find('div').eq(0).remove();
        }
        if (this.solo3 == 4) {
            this.solo3 = '';
            this.solo31 = 1;
        }
        setTimeout(function () {
            _this.leftAdd();
        }, 1000);
    },
    getTimes: function getTimes() {
        /*获取抽奖次数*/
        var _this = this;
        var deviceId = store.get('device_id') || this.getUrlItem('device_id');

        if (deviceId != 'null') {
            var timesData = {
                template_id: window.CFG['template_id'],
                app_id: store.get('app_id') || this.getUrlItem('app_id'),
                adslot_id: store.get('adslot_id') || this.getUrlItem('adslot_id'),
                device_id: deviceId,
                timestamp: +new Date()
            };
            $.ajax({
                url: '/url/init',
                type: "post",
                contentType: "application/json;",
                data: JSON.stringify(timesData),
                success: function success(result) {
                    if (result.limitTimes >= 0) {
                        _this.limitTimes = result.limitTimes;
                        $('#countZa').text(_this.limitTimes);
                    }
                }
            });
        }
    },
    setCache: function setCache() {
        /*设置缓存*/
        for (var key in CFG) {
            if (CFG[key] == '' && this.getUrlItem(key) != null) {
                CFG[key] = this.getUrlItem(key);
                store.set(key, CFG[key]);
            }
        }
    },
    getUrlItem: function getUrlItem(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);return null;
    },
    getPrize: function getPrize() {
        /*抽中红包，获取奖项*/
        var _this = this;

        this.resData = {};

        var ajaxTimeoutTest = $.ajax({
            url: '/url/advert',
            type: "post",
            contentType: "application/json;",
            data: JSON.stringify(_this.collReqData()),
            timeout: 3000,
            complete: function complete(XMLHttpRequest, status) {
                //请求完成后最终执行参数
                if (status == 'timeout') {
                    //超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    _this.getPrizeFail();
                }
                _this.resData = XMLHttpRequest.responseJSON || {};
                if (_this.resData.error_code == 0) {
                    _this.limitTimes = _this.resData.limitTimes;
                }
            }
        });
    },
    getPrizeFail: function getPrizeFail() {
        if (this.resData['error_code'] && this.resData['limitTimes'] >= 0) {
            this.limitTimes = this.resData['limitTimes'];
        }
        this.showNoResult();
    },
    showPrize: function showPrize() {
        var _this = this;
        var $countZa = $('#countZa');
        this.limitTimes = this.resData && this.resData.limitTimes;
        $countZa.text(this.limitTimes || 0);

        var $popPosition = $('.popShowPrize');
        //请求成功，发送检波
        if (_this.resData['adms']) {
            var adMsg = _this.resData['adms'][0];

            $popPosition.find('.prizes-img').attr('src', adMsg.imgurls);
            $popPosition.find('.prizes-name').text(adMsg.title);

            _this.showLog(adMsg['imptrackers']);

            $('.prizes-img,.prizes-name,.goto').unbind("click").on('click', function () {
                _this.clickLog(adMsg['clktrackers']);

                setTimeout(function () {
                    window.location.href = adMsg['clkurl']; //跳转页面
                }, 600);
            });
        }
        $popPosition.show();
    },
    showNoResult: function showNoResult() {
        var $popPosition = $('.popNoResult');
        $popPosition.find('.prizes-no-img').attr('src', './dist/img/fish/prizes-pop-fail.png');
        $popPosition.fadeIn();
    },
    showLimited: function showLimited() {
        var $popPosition = $('.popNoResult');
        $popPosition.find('.prizes-no-img').attr('src', './dist/img/fish/prizes-pop-no.png');
        $popPosition.fadeIn();
    },
    hidePrize: function hidePrize() {
        var $popResult = $('.popShowPrize ,.popNoResult');
        $popResult.fadeOut();

        $('.ox-catch').hide();
        $('.rope-catch').hide();
        $('.rope-break ').show();
        this.catching = false;
    },
    showLog: function showLog(urlArray) {
        if (urlArray.length < 1) return;
        for (var i = 0; i < urlArray.length; i++) {
            $('#contaner').append('<img class="imptrace" src="' + urlArray[i] + '" />');
        }
    },
    clickLog: function clickLog(urlArray) {
        if (urlArray.length < 1) return;
        for (var j = 0; j < urlArray.length; j++) {
            $('#contaner').append('<img class="clicktrace" src="' + urlArray[j] + '" />');
        }
    },
    getNetwork: function getNetwork() {
        /*获取网络环境*/
        var t = null,
            netType = 0,
            e = window.navigator.userAgent,
            n = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        if (/MicroMessenger/.test(e)) {
            if (/NetType/.test(e)) {
                var i = e.match(/NetType\/(\S*)/);
                t = i[1];
            } else document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke("getNetworkType", {}, function (e) {
                    t = e.err_msg;
                });
            });
        } else if (n) {
            var o = n.type;
            t = o;
        }
        var r = this.netTypeArray;
        if (typeof t != 'string') t = 'undefined';
        t = t.toLowerCase();
        for (var k = 0; k < r.length; k++) {
            if (t.indexOf(r[k]) > -1) {
                netType = k;
                break;
            }
        }
        return netType;
    },
    collReqData: function collReqData() {
        var reqData = {
            template_id: window.CFG['template_id'],
            device_id: store.get('device_id') || this.getUrlItem('device_id'),
            app_id: store.get('app_id') || this.getUrlItem('app_id'),
            adslot_id: store.get('adslot_id') || this.getUrlItem('adslot_id'),
            connect_type: this.getNetwork(),
            width: $(window).width(),
            height: $(window).height(),
            timestamp: +new Date()
        };
        return reqData;
    }
};

new Fish();

},{}]},{},[1])

//# sourceMappingURL=fish.js.map
