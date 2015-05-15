// ==UserScript==
// @name        facebook
// @namespace   facebook
// @include     *facebook.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

/**
 * If you want to use this script (or more than 20% of the code) please do not remove this comment.
 * @author: DominikStyp@github.com
 * @url: https://github.com/DominikStyp
 */

/**
 * http://www.JSON.org/json2.js 2011-02-23
 */
var JSON;JSON||(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,f,u,i=gap,p=e[t];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof rep&&(p=rep.call(e,t,p)),typeof p){case"string":return quote(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){for(f=p.length,r=0;f>r;r+=1)u[r]=str(r,p)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",gap=i,o}if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",gap=i,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

/**
 * JStorage
 * Author: Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 */		
!function(){"use strict";function e(){var e=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),e=!0,window.localStorage.removeItem("_tmptest")}catch(t){}if(e)try{window.localStorage&&(b=window.localStorage,T="localStorage",O=b.jStorage_update)}catch(o){}else if("globalStorage"in window)try{window.globalStorage&&(b="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],T="globalStorage",O=b.jStorage_update)}catch(n){}else{if(y=document.createElement("link"),!y.addBehavior)return void(y=null);y.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(y);try{y.load("jStorage")}catch(i){y.setAttribute("jStorage","{}"),y.save("jStorage"),y.load("jStorage")}var u="{}";try{u=y.getAttribute("jStorage")}catch(g){}try{O=y.getAttribute("jStorage_update")}catch(l){}b.jStorage=u,T="userDataBehavior"}s(),c(),r(),_(),"addEventListener"in window&&window.addEventListener("pageshow",function(e){e.persisted&&a()},!1)}function t(){var e="{}";if("userDataBehavior"==T){y.load("jStorage");try{e=y.getAttribute("jStorage")}catch(t){}try{O=y.getAttribute("jStorage_update")}catch(r){}b.jStorage=e}s(),c(),_()}function r(){"localStorage"==T||"globalStorage"==T?"addEventListener"in window?window.addEventListener("storage",a,!1):document.attachEvent("onstorage",a):"userDataBehavior"==T&&setInterval(a,1e3)}function a(){var e;clearTimeout(L),L=setTimeout(function(){if("localStorage"==T||"globalStorage"==T)e=b.jStorage_update;else if("userDataBehavior"==T){y.load("jStorage");try{e=y.getAttribute("jStorage_update")}catch(t){}}e&&e!=O&&(O=e,o())},25)}function o(){var e,r=h.parse(h.stringify(p.__jstorage_meta.CRC32));t(),e=h.parse(h.stringify(p.__jstorage_meta.CRC32));var a,o=[],i=[];for(a in r)if(r.hasOwnProperty(a)){if(!e[a]){i.push(a);continue}r[a]!=e[a]&&"2."==String(r[a]).substr(0,2)&&o.push(a)}for(a in e)e.hasOwnProperty(a)&&(r[a]||o.push(a));n(o,"updated"),n(i,"deleted")}function n(e,t){e=[].concat(e||[]);var r,a,o,n;if("flushed"==t){e=[];for(var i in C)C.hasOwnProperty(i)&&e.push(i);t="deleted"}for(r=0,o=e.length;o>r;r++){if(C[e[r]])for(a=0,n=C[e[r]].length;n>a;a++)C[e[r]][a](e[r],t);if(C["*"])for(a=0,n=C["*"].length;n>a;a++)C["*"][a](e[r],t)}}function i(){var e=(+new Date).toString();if("localStorage"==T||"globalStorage"==T)try{b.jStorage_update=e}catch(t){T=!1}else"userDataBehavior"==T&&(y.setAttribute("jStorage_update",e),y.save("jStorage"));a()}function s(){if(b.jStorage)try{p=h.parse(String(b.jStorage))}catch(e){b.jStorage="{}"}else b.jStorage="{}";v=b.jStorage?String(b.jStorage).length:0,p.__jstorage_meta||(p.__jstorage_meta={}),p.__jstorage_meta.CRC32||(p.__jstorage_meta.CRC32={})}function u(){d();try{b.jStorage=h.stringify(p),y&&(y.setAttribute("jStorage",b.jStorage),y.save("jStorage")),v=b.jStorage?String(b.jStorage).length:0}catch(e){}}function g(e){if("string"!=typeof e&&"number"!=typeof e)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==e)throw new TypeError("Reserved key name");return!0}function c(){var e,t,r,a,o=1/0,s=!1,g=[];if(clearTimeout(m),p.__jstorage_meta&&"object"==typeof p.__jstorage_meta.TTL){e=+new Date,r=p.__jstorage_meta.TTL,a=p.__jstorage_meta.CRC32;for(t in r)r.hasOwnProperty(t)&&(r[t]<=e?(delete r[t],delete a[t],delete p[t],s=!0,g.push(t)):r[t]<o&&(o=r[t]));1/0!=o&&(m=setTimeout(c,Math.min(o-e,2147483647))),s&&(u(),i(),n(g,"deleted"))}}function _(){var e,t;if(p.__jstorage_meta.PubSub){var r,a=D,o=[];for(e=t=p.__jstorage_meta.PubSub.length-1;e>=0;e--)r=p.__jstorage_meta.PubSub[e],r[0]>D&&(a=r[0],o.unshift(r));for(e=o.length-1;e>=0;e--)l(o[e][1],o[e][2]);D=a}}function l(e,t){if(P[e])for(var r=0,a=P[e].length;a>r;r++)try{P[e][r](e,h.parse(h.stringify(t)))}catch(o){}}function d(){if(p.__jstorage_meta.PubSub){for(var e=+new Date-2e3,t=0,r=p.__jstorage_meta.PubSub.length;r>t;t++)if(p.__jstorage_meta.PubSub[t][0]<=e){p.__jstorage_meta.PubSub.splice(t,p.__jstorage_meta.PubSub.length-t);break}p.__jstorage_meta.PubSub.length||delete p.__jstorage_meta.PubSub}}function f(e,t){p.__jstorage_meta||(p.__jstorage_meta={}),p.__jstorage_meta.PubSub||(p.__jstorage_meta.PubSub=[]),p.__jstorage_meta.PubSub.unshift([+new Date,e,t]),u(),i()}function S(e,t){for(var r,a=e.length,o=t^a,n=0;a>=4;)r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>24,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16)^r,a-=4,++n;switch(a){case 3:o^=(255&e.charCodeAt(n+2))<<16;case 2:o^=(255&e.charCodeAt(n+1))<<8;case 1:o^=255&e.charCodeAt(n),o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16)}return o^=o>>>13,o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16),o^=o>>>15,o>>>0}var j="0.4.12",w=window.jQuery||window.$||(window.$={}),h={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(e){return String(e).evalJSON()}||w.parseJSON||w.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||w.toJSON};if("function"!=typeof h.parse||"function"!=typeof h.stringify)throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var m,p={__jstorage_meta:{CRC32:{}}},b={jStorage:"{}"},y=null,v=0,T=!1,C={},L=!1,O=0,P={},D=+new Date,A={isXML:function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?"HTML"!==t.nodeName:!1},encode:function(e){if(!this.isXML(e))return!1;try{return(new XMLSerializer).serializeToString(e)}catch(t){try{return e.xml}catch(r){}}return!1},decode:function(e){var t,r="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t};return r?(t=r.call("DOMParser"in window&&new DOMParser||window,e,"text/xml"),this.isXML(t)?t:!1):!1}};w.jStorage={version:j,set:function(e,t,r){if(g(e),r=r||{},"undefined"==typeof t)return this.deleteKey(e),t;if(A.isXML(t))t={_is_xml:!0,xml:A.encode(t)};else{if("function"==typeof t)return void 0;t&&"object"==typeof t&&(t=h.parse(h.stringify(t)))}return p[e]=t,p.__jstorage_meta.CRC32[e]="2."+S(h.stringify(t),2538058380),this.setTTL(e,r.TTL||0),n(e,"updated"),t},get:function(e,t){return g(e),e in p?p[e]&&"object"==typeof p[e]&&p[e]._is_xml?A.decode(p[e].xml):p[e]:"undefined"==typeof t?null:t},deleteKey:function(e){return g(e),e in p?(delete p[e],"object"==typeof p.__jstorage_meta.TTL&&e in p.__jstorage_meta.TTL&&delete p.__jstorage_meta.TTL[e],delete p.__jstorage_meta.CRC32[e],u(),i(),n(e,"deleted"),!0):!1},setTTL:function(e,t){var r=+new Date;return g(e),t=Number(t)||0,e in p?(p.__jstorage_meta.TTL||(p.__jstorage_meta.TTL={}),t>0?p.__jstorage_meta.TTL[e]=r+t:delete p.__jstorage_meta.TTL[e],u(),c(),i(),!0):!1},getTTL:function(e){var t,r=+new Date;return g(e),e in p&&p.__jstorage_meta.TTL&&p.__jstorage_meta.TTL[e]?(t=p.__jstorage_meta.TTL[e]-r,t||0):0},flush:function(){return p={__jstorage_meta:{CRC32:{}}},u(),i(),n(null,"flushed"),!0},storageObj:function(){function e(){}return e.prototype=p,new e},index:function(){var e,t=[];for(e in p)p.hasOwnProperty(e)&&"__jstorage_meta"!=e&&t.push(e);return t},storageSize:function(){return v},currentBackend:function(){return T},storageAvailable:function(){return!!T},listenKeyChange:function(e,t){g(e),C[e]||(C[e]=[]),C[e].push(t)},stopListening:function(e,t){if(g(e),C[e]){if(!t)return void delete C[e];for(var r=C[e].length-1;r>=0;r--)C[e][r]==t&&C[e].splice(r,1)}},subscribe:function(e,t){if(e=(e||"").toString(),!e)throw new TypeError("Channel not defined");P[e]||(P[e]=[]),P[e].push(t)},publish:function(e,t){if(e=(e||"").toString(),!e)throw new TypeError("Channel not defined");f(e,t)},reInit:function(){t()},noConflict:function(e){return delete window.$.jStorage,e&&(window.jStorage=this),this}},e()}();


if (self == top) {
  if( typeof jQuery == "undefined" ){
    alert("I couldn't load jQuery library \nCheck: http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
  }
  jQuery(function ($) {
    try {
      function debugMe(str){
         //console.log(str);
      }
      // --------------------- cookie functions --------------------------------------------------------
      debugMe("BEGIN FUNCTIONS!");
      
      function __setCookie(cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          var expires = 'expires=' + d.toUTCString();
          var path = 'path=/; ';
          var domain = 'domain=' + window.location.host + ';';
          var cookieStr = cname + '=' + cvalue + '; ' + expires + '; ' + path + domain;
          debugMe("Setting up cookie: " + cookieStr);
          document.cookie = cookieStr;
        }
        function __getCookie(cname) {
          var name = cname + '=';
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' '){
              c = c.substring(1);
            }
            var cookieVal = c.substring(name.length, c.length);
            debugMe("Getting cookie: " + name + " = " + cookieVal);
            if (c.indexOf(name) == 0) {
              return cookieVal;
            }
          }
          return '';
        }
        function setCookie(value) {
          __setCookie(getCurrentCookieName(), value, 365*10)
        }
        function removeCookie() {
          __setCookie(getCurrentCookieName(), -1);
        }
        function getCookieValue() {
          return __getCookie(getCurrentCookieName());
        }
        function getCookieSize(){
           return (getCookieValue()+'').length || 0;
        }
      
        function getCurrentCookieName(){
           var currentCookieName = getGlobal('currentCookieName');
           if( typeof currentCookieName == "undefined" || currentCookieName.length < 1 ){
             currentCookieName = 'facebookHidePostCookie';
             setGlobal('currentCookieName', currentCookieName);
           }
           debugMe("currentCookieName = " + currentCookieName);
           return currentCookieName;
        }
        function setCurrentCookieName(name){
          setGlobal('currentCookieName', name);
        }
        
      
        
        ///////////-------- storing/getting data functions independant of the implementation cookie (old browsers) vs storage object (modern browsers)  -----------------------
        function isStorageAvailable(){
           debugMe('---$.jStorage.storageAvailable(): ' + $.jStorage.storageAvailable() + '---');
        	 return $.jStorage.storageAvailable();
        }
        
        function getValue(){
        	//cookie
        	if(!isStorageAvailable()){
        		return getCookieValue();
        	}
        	//storage
        	else {
            var ret = $.jStorage.get("facebookHidePost") || '';
            debugMe('---$.jStorage.get("facebookHidePost"): ' + ret + '---');
        		return ret;
        	}
        }
        function getSize(){
        	//cookie
        	if(!isStorageAvailable()){
        		return getCookieSize();
        	}
        	//storage
        	else {
            debugMe('---$.jStorage.storageSize(): ' + $.jStorage.storageSize() + '---');
        		return $.jStorage.storageSize();
        	}
        	
        }
        function setValue(value){
        	//cookie
        	if(!isStorageAvailable()){
        		setCookie(value);
        	}
        	//storage
        	else {
        		 $.jStorage.set("facebookHidePost", value);
             debugMe('---$.jStorage.set("facebookHidePost", ' + value + ')---');
        	}
        	
        }
        function removeValue(){
        	//cookie
        	if(!isStorageAvailable()){
        		removeCookie();
        	}
        	//storage
        	else {
        		$.jStorage.deleteKey("facebookHidePost");
            debugMe('---$.jStorage.deleteKey("facebookHidePost")---');
        	}
        }
        
        
        //-------- other functions -----------------------------------------------------------------------

        function getFacebookPostIdByDivId(strId) {
          if (strId.indexOf('_') == - 1) {
            console.log('Error parsing facebook post id... wrong div id format: ' + strId);
            return null;
          }
          var s = strId.split('_') [2];
          if(s.length < 1){
            console.log('Error parsing facebook post id... can\'t split post id string: ' + strId);
            return null;
          }
          return s;
        }
      
        function arrayToStr(arr) {
          return arr.join(',')
        }
        function strToArray(str) {
          if (typeof str == 'undefined' || str == '') {
            return [];
          }
          return str.split(',')
        }
      
      //------------ checking and getting post id from storage (cookies or storage object) -----------
      
        function getPostsIdsArray(){
          return strToArray(getValue());
        }
        function isPostIdInStorage(id) {
          var ids = getPostsIdsArray();
          debugMe("isPostIdInStorage(" + id + ")");
          debugMe("isPostIdInStorage ids array: " + ids);
          for (i in ids) {
            if (ids[i] == id) {
              return true;
            }
          }
          return false;
        }
        function savePostIdToStorage(id) {
          if (!isPostIdInStorage(id)) {
            var ids = strToArray(getValue());
            ids.push(id);
            setValue(arrayToStr(ids));
          }
        }
      
      //---------------- jQuery utility --------------------
      
        function setGlobal(name, value){
          $.data( this, name, value);
        }
        function getGlobal(name){
          return $.data( this, name);
        }

        function onEndScroll(myCallback) {
          $(window).scroll(function() {
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function() {
                    myCallback();
                }, 500));
           });
        }

        //-----------------------------------------------------------------
        //-------- main script functionality   

        //----------- absolute information div ----------
        // puts informational div relatively to the 'currentObject' object so it shows up right next to it
        function appendInfoDiv(currentObject, info){
            var obj = $(currentObject);
            var position = obj.offset();
            var pTop = (parseInt(position.top) - 70);
            var pLeft =  (parseInt(position.left) + 70);
            var css = 'top:' + pTop  + 'px; ' + 
                'left:' + pLeft + 'px; ';
            //console.log(css);
            var div = '<div class="hideFacebookPostLinkHover" style="'+css+'">' + info + '</div>';
            //console.log(div);
            $(document.body).prepend(div);
        }
        function removeInfoDiv(){
           $(".hideFacebookPostLinkHover").remove();
        }
        function getInfoDivStyle(){
           return ' .hideFacebookPostLinkHover { ' +
           'position:absolute; padding:20px 30px; top:0; left:0; border:1px solid black; background:#fff; z-index:9999; font-size:15px;' +
           ' } ';
        }
        function appendInfoDivStyleToDocument(){
           $('head').append("<style>" + getInfoDivStyle() + "</style>");
        }
        //------------------------------------------------

        function intervalFunction(){
          $('[id*="mall_post_"]').each(function () {
            debugMe("each() step 1");
            var t = $(this);
            var divId = t.attr('id');
            var facebookPostId = getFacebookPostIdByDivId(divId);
            debugMe("each step 2, facebook post id: " + facebookPostId);
            if (t.prop('hideFacebookPostLink')) {
              return true;
            }
            if (isPostIdInStorage(facebookPostId)) {
              debugMe("each step 3 hidden post id: " + facebookPostId);
              t.remove();
              return true;
            }
            var hidePostLink = $('<a class="hideFacebookPostLink" href="javascript:void(0);">HIDE POST</a>')
                                .click(function () {
                                      var obj = $(this);
                                      var parentObj = obj.parent();
                                      var facebookPostId = getFacebookPostIdByDivId(parentObj.attr('id'));
                                      savePostIdToStorage(facebookPostId);
                                      setGlobal('currentPostsInCookie', getGlobal('currentPostsInCookie')+1);
                                      removeInfoDiv();
                                      parentObj.remove();
                              }).hover(function(){
                            	   var limitInfo = getGlobal('storageType')==1 ? '(cookie size is limited to 4 kb)' : '(storage size is limited to 5 MB)'; 
                                   var info = 'You\'ve added ' +   getGlobal('currentPostsInCookie') + ' / ' + getGlobal('maxPostsInStorage') + 
                                       		  '(max) posts to hidden ' + limitInfo;
                                   appendInfoDiv(this, info);
                                }, function(){
                                   removeInfoDiv();
                                });
            var clearHiddenLink = $('<a class="hideFacebookPostLink" href="javascript:void(0);">CLEAR HIDDEN</a>')
                                  .click(function(){
                                     removeValue();
                                     removeInfoDiv();
                                     document.location.reload();
                                  }).hover(function(){
                                   var info = 'By clicking this, you will clear hidden posts, and refresh the page';
                                   appendInfoDiv(this, info);
                                }, function(){
                                   removeInfoDiv();
                                });
            t.prop('hideFacebookPostLink', true)
            .prepend('<br style="clear:both;" />')
            .prepend(clearHiddenLink)
            .prepend(hidePostLink);
            debugMe("each() last step");
          });
         } //intervalFunction end

        
        /**
         * Runs the whole plugin
         */
        function initPlugin(){
        	    debugMe("BEGIN INVOKE FUNCTIONS!");
	        	appendInfoDivStyleToDocument(); //append info div styles to the head
	            $('head').append('<style>'+
	                     ' .hideFacebookPostLink { padding:0px 10px 5px 0px;font-weight:bold;font-size:12px;display:block; float:left; }' +
	                     ' </style>');
	            setGlobal('averagePostIdSize', 20); //MAX 20 chars is a post id
	            if(!isStorageAvailable()){ //cookie storage
	          	  setGlobal('storageType', 1);
	          	  setGlobal('maxPostsInStorage', parseInt(4000 / getGlobal('averagePostIdSize')) ); //4k is cookie size
	            } else {
	          	  setGlobal('storageType', 2);
	          	  setGlobal('maxPostsInStorage', parseInt(5000000 / getGlobal('averagePostIdSize')) );  //5MB is storage object size in modern browsers
	            }
	            setGlobal('currentPostsInCookie', parseInt(getPostsIdsArray().length));
	            //-------------- triggering interval function ----------------------------------
	            setTimeout(intervalFunction, 3000); // first invoke
	            setInterval(intervalFunction, 30*1000); //interval every 30 sec.
	            onEndScroll(function(){
	              intervalFunction();
	            });
	            debugMe("END INVOKE FUNCTIONS");
        }

          //-------------------------- INVOKE FUNCTIONS / SETUP GLOBALS ----------------------------------------------------
          initPlugin();
          
      //try end
      } 
      catch (err) {
        debugMe(err);
      }
  }); //jQuery
}
//self == top
