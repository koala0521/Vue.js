(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],2:[function(require,module,exports){
"use strict";

var events = require('events');
var eventEmitter = new events.EventEmitter();

window.lottery = {
    index: -1, //当前转动到哪个位置，起点位置
    count: 0, //总共有多少个位置
    timer: 0, //setTimeout的ID，用clearTimeout清除
    autoTimer: 0, //自动播放的id
    speed: 20, //初始转动速度
    times: 0, //转动次数
    cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
    prize: -1, //中奖位置
    init: function init(id) {
        if ($("#" + id).find(".lottery-unit").length > 0) {
            this.$lottery = $("#" + id);
            this.$units = this.$lottery.find(".lottery-unit");
            this.obj = this.$lottery;
            this.count = this.$units.length;
            this.$lottery.find(".lottery-unit-" + this.index).addClass("active");
        }
    },
    autoPlay: function autoPlay() {
        var _this = this;
        this.autoTimer = setInterval(function () {
            _this.index++;
            _this.index = _this.index >= _this.count ? 0 : _this.index;
            _this.$lottery.find(".lottery-unit").removeClass("active");
            _this.$lottery.find(".lottery-unit-" + _this.index).addClass("active");
        }, 800);
    },
    stopAutoPlay: function stopAutoPlay() {
        clearInterval(this.autoTimer);
        this.autoTimer = null;
    },
    roll: function roll() {
        var index = this.index;
        var count = this.count;
        var lotteryObj = this.obj;
        $(lotteryObj).find(".lottery-unit-" + index).removeClass("active");
        index += 1;
        if (index > count - 1) {
            index = 0;
        }
        $(lotteryObj).find(".lottery-unit-" + index).addClass("active");
        this.index = index;
        return false;
    },
    stop: function stop(index) {
        this.prize = index;
        return false;
    }
};

function roll() {
    lottery.times += 1;
    lottery.roll(); //转动过程调用的是lottery的roll方法，这里是第一次调用初始化
    if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
        clearTimeout(lottery.timer);

        //抽到奖-停止转动
        eventEmitter.emit('showPriseResult');
    } else {
        if (lottery.times < lottery.cycle) {
            lottery.speed -= 10;
        } else if (lottery.times == lottery.cycle) {
            // var index = Math.random()*(lottery.count)|0;
            var index = Math.random() - 0.5 > 0 ? 3 : 7;
            lottery.prize = index;
        } else {
            if (lottery.times > lottery.cycle + 10 && (lottery.prize == 0 && lottery.index == 7 || lottery.prize == lottery.index + 1)) {
                lottery.speed += 110;
            } else {
                lottery.speed += 20;
            }
        }
        if (lottery.speed < 40) {
            lottery.speed = 40;
        }
        lottery.timer = setTimeout(roll, lottery.speed); //循环调用
    }
    return false;
}

var click = false;

window.Sudoku = function () {
    this.limitTimes = null; //允许转动的次数；
    this.resData = null;
    this.netTypeArray = ["undefined", "ethernet", "wifi", "edge", "2g", "3g", "4g"];

    this.init();
};
Sudoku.prototype = {
    constructor: Sudoku,
    init: function init() {
        this.setDefault(); //进入重置效果
        this.bindEvent();
    },
    bindEvent: function bindEvent() {
        var _this = this;

        $("#j-start").on("click", function () {
            if (click) {
                //click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
                return false;
            } else {

                lottery.stopAutoPlay();
                if (!_this.limitTimes || _this.limitTimes <= 0) {
                    _this.showLimited();
                    _this.setLimitAnalysis();
                } else {
                    _this.setClickAnalysis();
                    lottery.speed = 100;
                    roll(); //转圈过程不响应click事件，会将click置为false
                    click = true; //一次抽奖完成后，设置click为true，可继续抽奖

                    $('#a-times').text(_this.limitTimes - 1);
                    _this.getPrize();
                    return false;
                }
            }
        });

        eventEmitter.on('showPriseResult', function () {
            setTimeout(function () {
                var result = _this.resData;
                if (result && result.error_code == 0) {
                    _this.showPrize();
                } else {
                    _this.getPrizeFail();
                }
            }, 500);
        });

        //关闭弹窗
        $('.pop-position').on('touchstart', '.close,.close-btn', function () {
            _this.hidePrize();
        });
    },
    setDefault: function setDefault() {
        this.setCache();
        this.getTimes();
        lottery.init('lottery');

        lottery.autoPlay();
    },
    setClickAnalysis: function setClickAnalysis() {
        var _this = this;
        if (!window._hmt) {
            setTimeout(function () {
                _this.setClickAnalysis();
            }, 500);
        } else {
            window._hmt.push(['_trackEvent', '九宫格', '抽奖', 't5']);
        }
    },
    setLimitAnalysis: function setLimitAnalysis() {
        var _this = this;
        if (!window._hmt) {
            setTimeout(function () {
                _this.setLimitAnalysis();
            }, 500);
        } else {
            window._hmt.push(['_trackEvent', '九宫格-次数已用完', '抽奖', 't5']);
        }
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
                        $('#a-times').text(_this.limitTimes);
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
                    click = false;
                }
                _this.resData = XMLHttpRequest.responseJSON || {};
                if (_this.resData.error_code == 0) {
                    _this.limitTimes = _this.resData.limitTimes;
                }
            },
            success: function success(result) {
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
            error: function error(err) {
                // _this.getPrizeFail();
                // _this.ajaxing = false;
                // if(err&&err.limitTimes){
                //     _this.limitTimes = err.limitTimes
                // }
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

        var $countZa = $('#a-times');
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
        $('.prizes-no-cont .prizes-no-img').attr('src', './dist/img/sudoku/prizes-pop-fail.png');
        $popPosition.show();
    },
    showLimited: function showLimited() {
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').show();
        $popPosition.find('.prizes-cont-box').hide();
        $('.prizes-no-cont .prizes-no-img').attr('src', './dist/img/sudoku/prizes-pop-no.png');
        $popPosition.show();
    },
    hidePrize: function hidePrize() {
        var $popPosition = $('.pop-position ');
        $popPosition.find('.prizes-no-cont').hide();
        $popPosition.find('.prizes-cont-box').removeClass('hdgg_result_show_animation').addClass('hdgg_result_hide_animation');
        $popPosition.fadeOut();
        lottery.autoPlay();
        lottery.prize = -1;
        lottery.times = 0;
        click = false;
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

new Sudoku();

},{"events":1}]},{},[2])

//# sourceMappingURL=sudoku.js.map
