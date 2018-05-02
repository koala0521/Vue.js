(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function GoldenEggs() {
    this.ajaxing = false;
    this.danindex = 0;
    this.zaload = true;
    this.dansuiSwitch = true;
    this.suiArr = [];
    this.limitTimes = null;
    this.resData = null;
    this.netTypeArray = ["undefined", "ethernet", "wifi", "edge", "2g", "3g", "4g"];
    this.timer = null;

    this.init();
}
GoldenEggs.prototype = {
    constructor: GoldenEggs,
    init: function init() {
        this.setDefault(); //进入重置效果
        this.jinDanAnimation('beat', '.full', 1000);
        this.bindEvent();
    },
    bindEvent: function bindEvent() {
        var _this = this;
        $('body').on('touchstart', '#danlist .full', function () {
            var obj = $(this);

            if (obj.hasClass('eggbreak')) return;

            if (_this.ajaxing) {
                return;
            }

            var eggOffset = $(this).offset();
            var eggWidth = $(this).width();
            var windowWidth = $(window).width();
            var left = windowWidth - eggWidth - eggOffset.left;
            var index = $(this).index();

            if (_this.zaload == false) {
                return;
            }

            if (!_this.limitTimes || _this.limitTimes <= 0) {
                _this.setLimitAnalysis();
                return _this.showLimited();
            }
            if (_this.suiArr instanceof Array) {
                _this.suiArr.push(index);
                window.store.set('sui', _this.suiArr);
            }

            _this.setClickAnalysis();
            _this.dansuiSwitch = false;
            obj.removeClass('full').removeClass('beat').removeClass('beat1');
            _this.zaload = false;
            $(".chuizi").animate({ top: eggOffset.top - 50, right: left - 30 }, 1000, function () {

                obj.addClass('eggbreak');
                setTimeout(function () {
                    _this.zaload = true;
                    $(".chuizi").animate({ top: '5.3rem', right: '0.38rem' }, 300);
                    _this.getPrize();
                }, 500);
                _this.danindex = 0;
                $('#countZa').text(_this.limitTimes - 1 >= 0 ? _this.limitTimes - 1 : 0);
            });
        });

        //关闭弹窗
        $('.pop-position').on('touchstart', '.close,.close-btn', function () {
            _this.hidePrize();
        });
    },
    getSuiArr: function getSuiArr() {
        return window.store.get('sui') == undefined ? [] : window.store.get('sui');
    },
    setDefault: function setDefault() {
        this.setCache();
        this.setBroken();
        this.getTimes();
    },
    setBroken: function setBroken() {
        this.suiArr = this.getSuiArr();
        var $danLi = $('#danlist').find('li');
        $danLi.removeClass('eggbreak').addClass('full');
        for (var i = 0; i < this.suiArr.length; i++) {
            $danLi.eq(this.suiArr[i]).addClass('eggbreak').removeClass('full');
        }
    },
    setClickAnalysis: function setClickAnalysis() {
        var _this = this;
        if (!window._hmt) {
            setTimeout(function () {
                _this.setClickAnalysis();
            }, 500);
        } else {
            window._hmt.push(['_trackEvent', '砸金蛋', '抽奖', 't4']);
        }
    },
    setLimitAnalysis: function setLimitAnalysis() {
        var _this = this;
        if (!window._hmt) {
            setTimeout(function () {
                _this.setLimitAnalysis();
            }, 500);
        } else {
            window._hmt.push(['_trackEvent', '砸金蛋-次数已用完', '抽奖', 't4']);
        }
    },
    jinDanAnimation: function jinDanAnimation(aniClass, son, time) {
        var _this = this;
        this.timer = setInterval(function () {
            if (_this.dansuiSwitch == true) {
                _this.danindex = _this.danindex == $('#danlist').find('.full').length ? 0 : _this.danindex;
                $('#danlist').find('.full').eq(_this.danindex).addClass(aniClass).siblings(son).removeClass(aniClass);
                _this.danindex++;
            } else {
                $('#danlist').find('.full').removeClass(aniClass);
            }
            if ($('#danlist').find('.full').length == 1) {
                $('#danlist').find('.full').removeClass(aniClass).addClass('beat1');
            }
        }, time);
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
                    if (result.limitTimes >= 9) {
                        window.store.remove('sui');
                        _this.setBroken();
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

        this.ajaxing = true;
        this.resData = {};

        var ajaxTimeoutTest = $.ajax({
            url: '/url/advert',
            type: "post",
            contentType: "application/json;",
            data: JSON.stringify(_this.collReqData()),
            timeout: 30000,
            complete: function complete(XMLHttpRequest, status) {
                //请求完成后最终执行参数
                if (status == 'timeout') {
                    //超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    _this.getPrizeFail();
                }
            },
            success: function success(result) {
                if (result && result.error_code == 0) {
                    _this.resData = result;
                    _this.showPrize();
                } else {
                    _this.getPrizeFail();
                }
                _this.ajaxing = false;
                if (result && result.limitTimes) {
                    _this.limitTimes = result.limitTimes;
                }
            },
            error: function error(err) {
                _this.getPrizeFail();
                _this.ajaxing = false;
                if (err && err.limitTimes) {
                    _this.limitTimes = err.limitTimes;
                }
            }
        });
    },
    getPrizeFail: function getPrizeFail() {
        if (this.resData['error_code'] && this.resData['limitTimes'] > 0) {
            this.limitTimes = this.resData['limitTimes'];
        }
        this.showNoResult();
    },
    showPrize: function showPrize() {
        var _this = this;
        var $popPosition = $('.pop-position ');

        var $countZa = $('#countZa');
        this.limitTimes = this.resData && this.resData.limitTimes;
        $countZa.text(this.limitTimes || 0);

        //请求成功，发送检波
        if (_this.resData['adms']) {
            var adMsg = _this.resData['adms'][0];

            $popPosition.find('.prizes-img').attr('src', adMsg.imgurls);
            $popPosition.find('.prizes-name').text(adMsg.title);

            _this.showLog(adMsg['imptrackers']);

            $('.prizes-zoom-box,#hdgg_click_ad_btn').unbind("click").on('click', function () {
                _this.clickLog(adMsg['clktrackers']);

                setTimeout(function () {
                    window.location.href = adMsg['clkurl']; //跳转页面
                }, 600);
            });
        }
        $popPosition.find('.prizes-no-cont').hide();
        $popPosition.find('.prizes-cont-box').removeClass('hdgg_result_hide_animation').addClass('hdgg_result_show_animation').show();
        $popPosition.show();
    },
    showNoResult: function showNoResult() {
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').show();
        $popPosition.find('.prizes-cont-box').hide();
        $('.prizes-no-cont .prizes-no-img').attr('src', './dist/img/goldenEggs/prizes-pop-fail.png');
        $popPosition.show();
    },
    showLimited: function showLimited() {
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').show();
        $popPosition.find('.prizes-cont-box').hide();
        $('.prizes-no-cont .prizes-no-img').attr('src', './dist/img/goldenEggs/prizes-pop-no.png');
        $popPosition.show();
    },
    hidePrize: function hidePrize() {
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').hide();
        $popPosition.find('.prizes-cont-box').removeClass('hdgg_result_show_animation').addClass('hdgg_result_hide_animation');
        $popPosition.fadeOut();
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.dansuiSwitch = true;
        this.jinDanAnimation('beat', '.full', 1000);
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

module.exports = new GoldenEggs();

},{}]},{},[1])

//# sourceMappingURL=goldenEggs.js.map
