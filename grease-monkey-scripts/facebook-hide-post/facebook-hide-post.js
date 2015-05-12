// ==UserScript==
// @name        facebook
// @namespace   facebook
// @include     *facebook.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==
if (self == top) {
  if( typeof jQuery == "undefined" ){
    alert("I couldn't load jQuery library \nCheck: http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
  }
  jQuery(function ($) {
    try {
      // --------------------- cookie functions --------------------------------------------------------
        function __setCookie(cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          var expires = 'expires=' + d.toUTCString();
          document.cookie = cname + '=' + cvalue + '; ' + expires;
        }
        function __getCookie(cname) {
          var name = cname + '=';
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
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
           if( !currentCookieName ){
             setGlobal('currentCookieName', 'facebookHidePostCookie');
           } 
        }
        function setCurrentCookieName(name){
          setGlobal('currentCookieName', name);
        }
      
      
        //-------- other functions -----------------------------------------------------------------------

        function getFacebookPostIdByDivId(strId) {
          if (strId.indexOf('_') == - 1 || strId.indexOf(':') == - 1) {
            console.log('Error parsing facebook post id... wrong div id format: ' + strId);
            return null;
          }
          var s = strId.split(':') [0];
          s = s.split('_') [2];
          if (!s.match(/^\d+$/)) {
            console.log('Error parsing facebook post id, wrong parseInt result: ' + s);
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
      
      //------------ checking and getting post id from cookies -----------
      
        function getPostsIdsArray(){
          return strToArray(getCookieValue());
        }
        function isPostIdInCookies(id) {
          var ids = getPostsIdsArray();
          for (i in ids) {
            if (ids[i] == id) {
              return true;
            }
          }
          return false;
        }
        function savePostIdToCookies(id) {
          if (!isPostIdInCookies(id)) {
            var ids = strToArray(getCookieValue());
            ids.push(id);
            setCookie(arrayToStr(ids));
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
                }, 250));
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
            var t = $(this);
            var divId = t.attr('id');
            var facebookPostId = getFacebookPostIdByDivId(divId);
            if (t.prop('hideFacebookPostLink')) {
              return true;
            }

            if (isPostIdInCookies(facebookPostId)) {
              //console.log('hidden: ' + facebookPostId);
              t.remove();
              return true;
            }
            var hidePostLink = $('<a class="hideFacebookPostLink" href="javascript:void(0);">HIDE POST</a>')
                                .click(function () {
                                      var obj = $(this);
                                      var parentObj = obj.parent();
                                      var facebookPostId = getFacebookPostIdByDivId(parentObj.attr('id'));
                                      savePostIdToCookies(facebookPostId);
                                      setGlobal('currentPostsInCookie', getGlobal('currentPostsInCookie')+1);
                                      removeInfoDiv();
                                      parentObj.remove();
                              }).hover(function(){
                                   var info = 'You\'ve added ' +  
                                       getGlobal('currentPostsInCookie') + ' / ' + getGlobal('maxPostsInCookie') + 
                                       '(max) posts to hidden (cookie size is limited to 4 kb)';
                                   appendInfoDiv(this, info);
                                }, function(){
                                   removeInfoDiv();
                                });
            var clearHiddenLink = $('<a class="hideFacebookPostLink" href="javascript:void(0);">CLEAR HIDDEN</a>')
                                  .click(function(){
                                     removeCookie();
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
            .prepend(hidePostLink) 
          })
         } //intervalFunction end


          //-------------------------- INVOKE FUNCTIONS ----------------------------------------------------
          
          appendInfoDivStyleToDocument(); //append info div styles to the head
          $('head').append('<style>'+
                   ' .hideFacebookPostLink { padding:0px 10px 5px 0px;font-weight:bold;font-size:12px;display:block; float:left; }' +
                   ' </style>');
          setGlobal('maxPostsInCookie', 230);
          setGlobal('currentPostsInCookie', parseInt(getPostsIdsArray().length));
          //-------------- triggering interval function ----------------------------------
          setTimeout(intervalFunction, 3000); // first invoke
          setInterval(intervalFunction, 30*1000); //interval every 30 sec.
          onEndScroll(function(){
            intervalFunction();
          });
      //try end
      } 
      catch (err) {
        console.log(err)
      }
  }); //jQuery
}
//self == top
