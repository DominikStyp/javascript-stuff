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
// @version     1.1
// @grant       none
// ==/UserScript==

window.addEventListener('load', function() {
		'use strict';
		var $ = jQuery;
		setTimeout(function(){
			window.hasAdblock = false;
			$("#dab").remove();
			window.waitingModule.runWhenReady = function() { return false; };
			var qs = $.extend({}, document.querySelector);
			document.querySelector = function(param){
				if(param.indexOf(".filmCastBox") !== -1){
					return function(){
						return function(){};
					 };
				}
				return qs(param);
			};
		}, 100);
}, false);
