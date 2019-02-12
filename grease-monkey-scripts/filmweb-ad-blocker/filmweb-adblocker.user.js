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
// @version 		1.1.4
// @grant      		none
// @run-at          document-start
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        window.hasAdblock = false;
		// CLONE querySelector() function so overriding native function won't affect qs()
        var qs = document.querySelector.bind(document);
        document.querySelector = function(param){
            if(param.indexOf(".filmCastBox") !== -1 ||
               param.indexOf(".filmographyTable") !== -1){
                return function(){
					return function(){};
			     };
            }
            return qs(param);
       };
       console.log("Filmweb Adblocker version: " + GM_info.script.version);
    }, 10);
})();