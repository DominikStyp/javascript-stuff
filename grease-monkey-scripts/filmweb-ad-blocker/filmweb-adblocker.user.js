// ==UserScript==
// @name            Filmweb AdBlocker
// @namespace       filmweb
// @author          DominikStyp
// @copyright       2017, DominikStyp
// @homepageURL     https://github.com/DominikStyp
// @description     Skrypt wlacza mozliwosc korzystania z a adblocka na filmwebie
// @license         GPL Public License
// @updateURL       https://github.com/DominikStyp/javascript-stuff/raw/gh-pages/grease-monkey-scripts/filmweb-ad-blocker/filmweb-adblocker.user.js
// @downloadURL     https://github.com/DominikStyp/javascript-stuff/raw/gh-pages/grease-monkey-scripts/filmweb-ad-blocker/filmweb-adblocker.user.js
// @include         http://*.filmweb.pl/*
// @include         https://*.filmweb.pl/*
// @match           http://*.filmweb.pl/*
// @match           https://*.filmweb.pl/*
// @version 		1.1.3
// @grant      		none
// ==/UserScript==

(function() {
    'use strict';
     var cloneObj = function (obj) {
         var temp;
         if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj){
             return obj;
         }
         if (obj instanceof Date) {
             temp = new obj.constructor(); //or new Date(obj);
         }
         else {
             temp = obj.constructor();
         }
         for (var key in obj) {
             if (Object.prototype.hasOwnProperty.call(obj, key)) {
                 obj['isActiveClone'] = null;
                 temp[key] = clone(obj[key]);
                 delete obj['isActiveClone'];
             }
         }
         return temp;
    };

    setTimeout(function(){
        window.hasAdblock = false;
        window.waitingModule.runWhenReady = function() { return false; };
        var qs = cloneObj(document.querySelector);
        document.querySelector = function(param){
            if(param.indexOf(".filmCastBox") !== -1){
                return function(){
					return function(){};
			     };
            }
            return qs(param);
       };
       console.log("Filmweb Adblocker version: " + GM_info.script.version);
    }, 5);
})();