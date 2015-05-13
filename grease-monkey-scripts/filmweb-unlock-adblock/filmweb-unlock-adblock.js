// ==UserScript==
// @name        filmwebUnlockAdblock
// @namespace   filmwebUnlockAdblock
// @description blocks Filmweb Adblock prevention script
// @include     http://www.filmweb.pl/*
// @version     1
// @grant       none
// ==/UserScript==

/**
 * If you want to use this script (or more than 20% of the code) please do not remove this comment.
 * @author: DominikStyp@github.com
 * @url: https://github.com/DominikStyp
 */

setInterval(function(){
	window.hasAdblock=false;
	hasAdblock=false;
},1000);