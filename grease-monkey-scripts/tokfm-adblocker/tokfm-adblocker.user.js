// ==UserScript==
// @name         	Tok FM Player Bez Reklam
// @namespace       tokfm
// @author          DominikStyp
// @copyright       2017, DominikStyp
// @homepageURL     https://github.com/DominikStyp
// @version      	1.0
// @description  	Umozliwia sluchanie podcastow bez reklam
// @license         GPL Public License
// @updateURL       https://github.com/DominikStyp/javascript-stuff/raw/gh-pages/grease-monkey-scripts/tokfm-adblocker/tokfm-adblocker.user.js
// @downloadURL     https://github.com/DominikStyp/javascript-stuff/raw/gh-pages/grease-monkey-scripts/tokfm-adblocker/tokfm-adblocker.user.js
// @match        	http://audycje.tokfm.pl/*
// @match        	https://audycje.tokfm.pl/*
// @grant        	none
// ==/UserScript==

(function() {
    'use strict';
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
   (function($){
        var obj =  $("a.desktopLinkPlayer");
        obj
        .unbind()
        .click(function(event){
            event.preventDefault();
            var url = $(this).attr("href");
            openInNewTab(url);
        })
        .each(function(){
            $(this).attr("target", "_blank").attr("href", "http://audycje.tokfm.pl/play/" + $(this).data("id"));
        });
    })($);
})();