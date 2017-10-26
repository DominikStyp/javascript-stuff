// ==UserScript==
// @name         FacebookAdBlocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fuck the facebook ads!
// @author       DrDoom
// @match        http://www.filmweb.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        window.hasAdblock = false;
        $("div.tdfqwl").remove();
        $("#dab").remove();
        window.postMessage = null;
        window.waitingModule = null;
        var qs = function(param){ return document.querySelector(param); };
        document.querySelector = function(param){
            if(param.indexOf(".filmCastBox") !== -1){
                return function(){ console.log("FUCK FACEBOOK ADS! LOOL!"); };
            }
            return qs(param);
        };
    }, 100);
})();