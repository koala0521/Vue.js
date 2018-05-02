(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('luckyDice');

if (!Array.from) {
    Array.from = function () {
        var toStr = Object.prototype.toString;
        var isCallable = function isCallable(fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function toInteger(value) {
            var number = Number(value);
            if (isNaN(number)) {
                return 0;
            }
            if (number === 0 || !isFinite(number)) {
                return number;
            }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function toLength(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        return function from(arrayLike /*, mapFn, thisArg */) {
            var C = this;

            var items = Object(arrayLike);

            if (arrayLike == null) {
                throw new TypeError("Array.from requires an array-like object - not null or undefined");
            }

            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }

                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            var len = toLength(items.length);

            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            var k = 0;
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            A.length = len;
            return A;
        };
    }();
}

var LuckyDice = function LuckyDice() {
    this.limitTimes = null; //允许转动的次数；
    this.resData = null;
    this.index = -1;
    this.noIndex = -1;
    this.netTypeArray = ["undefined", "ethernet", "wifi", "edge", "2g", "3g", "4g"];

    this.$start = $('.main .start');
    this.$dice = $('.main .dice-content');

    this.init();
};
LuckyDice.prototype = {
    constructor: LuckyDice,
    init: function init() {
        this.setDefault(); //进入重置效果
        this.bindEvent();
        this.reSortList();
    },
    bindEvent: function bindEvent() {
        var _this = this;

        $("body").on("touchend", '.start', function () {

            if ($(this).hasClass('moving') || $(this).attr('class').indexOf('end') >= 0) return;

            if (!_this.limitTimes || _this.limitTimes <= 0) {
                _this.setLimitAnalysis();
                return _this.showLimited();
            } else {
                $('#countZa').text(_this.limitTimes - 1);
                _this.setClickAnalysis();
                _this.getPrize();
                _this.$start.removeClass('ready').addClass('moving');
                _this.$dice.removeClass('ready').addClass('moving');
                setTimeout(function () {
                    _this.$start.removeClass('moving').addClass('end');
                    var result = _this.resData;
                    if (result && result.error_code == 0) {
                        _this.$dice.removeClass('moving').addClass('end end' + _this.index);
                    } else {
                        _this.$dice.removeClass('moving').addClass('end end' + _this.noIndex);
                    }
                    setTimeout(function () {
                        var result = _this.resData;
                        if (result && result.error_code == 0) {
                            _this.showPrize();
                        } else {
                            _this.getPrizeFail();
                        }
                    }, 800);
                }, 1500);
            }
        });

        //关闭弹窗
        $('.pop-position').on('touchstart', '.close,.close-btn', function () {
            _this.hidePrize();
        });
    },
    setDefault: function setDefault() {
        this.setCache();
        this.iScrollInit();
        this.getTimes();
    },
    setClickAnalysis: function setClickAnalysis() {
        var _this = this;
        if (!window._hmt) {
            setTimeout(function () {
                _this.setClickAnalysis();
            }, 500);
        } else {
            window._hmt.push(['_trackEvent', '掷骰子', '抽奖', 't6']);
        }
    },
    setLimitAnalysis: function setLimitAnalysis() {
        var _this = this;
        if (!window._hmt) {
            setTimeout(function () {
                _this.setLimitAnalysis();
            }, 500);
        } else {
            window._hmt.push(['_trackEvent', '掷骰子-次数已用完', '抽奖', 't6']);
        }
    },
    iScrollInit: function iScrollInit() {
        var $item = $('#prize-list').find('.prize-item');
        if ($item.length > 5) {
            window.myScroll = new IScroll('#prize-list', {
                scrollX: true
            });
        }
    },
    reSortList: function reSortList() {
        var $item = $('.prize-item');
        var itemArr = Array.from($item);
        itemArr.sort(function (a, b) {
            return Math.random() - 0.5;
        });
        $('.prizes-wrapper').html('');
        itemArr.forEach(function (i) {
            $('.prizes-wrapper').append($(i));
        });
        this.index = $('.prize-item[data-prize="true"]').index() + 1;
        this.noIndex = $('.prize-item[data-prize="no"]').index() + 1;
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
        $('.prizes-no-cont .prizes-no-img').attr('src', './dist/img/luckyDice/prizes-pop-fail.png');
        $popPosition.show();
    },
    showLimited: function showLimited() {
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').show();
        $popPosition.find('.prizes-cont-box').hide();
        $('.prizes-no-cont .prizes-no-img').attr('src', './dist/img/luckyDice/prizes-pop-no.png');
        $popPosition.show();
    },
    hidePrize: function hidePrize() {
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').hide();
        $popPosition.find('.prizes-cont-box').removeClass('hdgg_result_show_animation').addClass('hdgg_result_hide_animation');
        $popPosition.fadeOut();

        this.$start.removeClass('end end1 end2 end3 end4 end5 end6').addClass('ready');
        this.$dice.removeClass('end end1 end2 end3 end4 end5 end6').addClass('ready');
        this.reSortList();
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

new LuckyDice();

},{}]},{},[1])

//# sourceMappingURL=luckyDice.js.map
