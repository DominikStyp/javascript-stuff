// ==UserScript==
// @name            Filmweb AdBlocker
// @namespace       filmweb
// @author          DominikStyp
// @copyright       2017, DominikStyp
// @homepageURL     https://github.com/DominikStyp
// @description     Skrypt w³¹cza mo¿liwoœæ korzystania z a adblocka na filmwebie
// @license         GPL Public License
// @updateURL       https://github.com/DominikStyp/javascript-stuff/raw/gh-pages/grease-monkey-scripts/filmweb-ad-blocker/filmweb-adblocker.user.js
// @downloadURL     https://github.com/DominikStyp/javascript-stuff/raw/gh-pages/grease-monkey-scripts/filmweb-ad-blocker/filmweb-adblocker.user.js
// @include         http://*.filmweb.pl/*
// @include         https://*.filmweb.pl/*
// @match           http://*.filmweb.pl/*
// @match           https://*.filmweb.pl/*
// @version     1
// @grant       none
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