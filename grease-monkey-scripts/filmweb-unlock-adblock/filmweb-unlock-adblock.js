// ==UserScript==
// @name        filmwebUnlockAdblock
// @namespace   filmwebUnlockAdblock
// @description blocks Filmweb Adblock prevention script
// @include     http://www.filmweb.pl/*
// @version     1
// @grant       none
// ==/UserScript==

setInterval(function(){
	window.hasAdblock=false;
	hasAdblock=false;
},1000);