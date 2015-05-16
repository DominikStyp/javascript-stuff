
function ScriptAculoUSGallery(SETTINGS) {
	
	// UWAGA ROZMIARY OBRAZKA MUSZA BYC ZDEFINIOWANE DLA IE, KTORY NIE WIDZI ICH
	// PRZY style="display:none;"
	var OBR_X = SETTINGS.Miniatures.width;
	var OBR_Y = SETTINGS.Miniatures.height;
	var SCALE = SETTINGS.Miniatures.enlargeScale;
	var timeout = SETTINGS.Timings.timeout;
	var durationTime = SETTINGS.Timings.durationTime;

	ClearEffectsQueue = function(scope) {
		Effect.Queues.get(scope).each(function(effect) {
			effect.cancel();
		});
	}
	
	function debug(str){
		//console.log(str);
	}
	
	function giveAbsolutes(arg) {
		arg.each(function(el) {
			el.style.position = 'absolute';
		});
		$(SETTINGS.HTMLelements.descriptions).style.visibility = "visible";

	}

	function insertImages(){
		var container = $(SETTINGS.HTMLelements.imagesDiv);
		var sizeAttributes = ' width="' + SETTINGS.Miniatures.width + '" height="' + SETTINGS.Miniatures.height + '" ';
		var html = '';
		for (var i=0, len=SETTINGS.Images.length; i<len; i++){
			var image = SETTINGS.Images[i];
			var href = image.href;
			var desc = image.desc;
			var br = (i>1 && i % 5 == 0) ? "<br />" : ""; 
			html += '<img src="http:' + href + '" title="' + desc + '" ' + sizeAttributes + ' style="display:none;" />' + br;
		}
		container.innerHTML = html;
	}
	
	
	function getDocHeight() {
		var body = document.body;
	    var html = document.documentElement;
		var height = Math.max( body.scrollHeight, body.offsetHeight, 
	                       html.clientHeight, html.scrollHeight, html.offsetHeight );
		return height;
	}
	
	function getDocWidth(){
		return (document.body.clientWidth) ? document.body.clientWidth : window.innerWidth;
	}
	
	function getScrollTop(){
		return (document.body.scrollTop) ? document.body.scrollTop : document.documentElement.scrollTop;
	}
	
	function getScrollLeft(){
		return (document.body.scrollLeft) ? document.body.scrollLeft : document.documentElement.scrollLeft;
	}

	function fireEvent(element, event) {
		if (document.createEventObject) {
			// dispatch for IE
			var evt = document.createEventObject();
			return element.fireEvent('on' + event, evt)
		} else {
			// dispatch for firefox + others
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent(event, true, true); // event
												// type,bubbling,cancelable
			return !element.dispatchEvent(evt);
		}
	}

	function centerOfScreen() {
		var left = getScrollLeft();
		var top = getScrollTop();
		var dh = getDocHeight();
		var dw = getDocWidth();
		var centerX = ((dw / 2) + left);
		var centerY = ((dh / 2) + top);
		debug("CenterOfScreen: x:" + centerX + ", y:" + centerY);
		return {
			X : centerX,
			Y : centerY
		}
	}

	function centerOfTheImage(img) {
		var img = $(img);
		var h = img.getHeight();
		var w = img.getWidth();
		var offsets = img.cumulativeOffset(); // [left,top]
		var centerX = (offsets[0] + (w / 2));
		var centerY = (offsets[1] + (h / 2));
		debug("Center of image x:" + centerX + " y:" + centerY);
		return {
			X : centerX,
			Y : centerY
		}
	}

	function movementOfThePicture(img) {
		var screenCenter = centerOfScreen();
		var centerOfImage = centerOfTheImage(img);
		var X = screenCenter.X - centerOfImage.X;
		var Y = screenCenter.Y - centerOfImage.Y;
		return {
			X : X,
			Y : Y
		}
	}
	
	function getPictureDescriptionByNum(nr){
		return SETTINGS.Images[nr].desc;
	}

	function show_desc(obj) {
		ClearEffectsQueue('q_desc');
		var nr = Number(obj.number_photo);
		$(SETTINGS.HTMLelements.descriptions).style.display = "none";
		$(SETTINGS.HTMLelements.descriptions).innerHTML = getPictureDescriptionByNum(nr)||"ERROR DESCRIPTION";
		Effect.Appear(SETTINGS.HTMLelements.descriptions, {
			beforeStart : function() {
				$(SETTINGS.HTMLelements.descriptions).setStyle({
					opacity : 1,
					display : "none"
				});
			},
			queue : {
				position : 'end',
				scope : 'q_desc'
			},
			duration : 1
		});
	}

	function hide_desc() {
		ClearEffectsQueue('q_desc');
		Effect.Fade(SETTINGS.HTMLelements.descriptions, {
			queue : {
				position : 'front',
				scope : 'q_desc'
			},
			duration : 1
		});
	}

	function init() {
				debug("init: 0");
				var imgs = $$('img');
				var sumT = 0;
				var imgs_len = imgs.length;
				var counter = 0;
				var numbers_photos = 0;
				var ScaleInProcess = false;
				debug("init: 1");
				
				imgs.each(function(el) {
					sumT += timeout;
					el.number_photo = numbers_photos++;
					debug("init: 2");
					setTimeout(function() {
						Effect.Grow(el, {
							duration : durationTime,
							direction : "bottom-right",
							beforeStart : function() {
								/* callback */
								// el.style.visibility="visible";
							},
							afterFinish : function() {
								el.style.left = el.offsetLeft + 'px';
								el.style.top = el.offsetTop + 'px';
								counter++;
								if (counter == imgs_len)
									setTimeout(function() {
										giveAbsolutes(imgs);
									}, durationTime);
							}
		
						});
					}, sumT);
		
					el.onmouseover = function() {
						var obj = this;
						if (ScaleInProcess)
							return false;
						ClearEffectsQueue("img_q");
						show_desc(obj);
						imgs.each(function(o) {
							if (obj != o)
								new Effect.Opacity(o, {
									to : 0.4,
									queue : {
										scope : "img_q"
									}
								});
							else {
								new Effect.Opacity(o, {
									to : 1,
									queue : {
										scope : "img_q"
									}
								});
							}
						});
					}
					
					el.onmouseout = function() {
						ClearEffectsQueue("img_q");
						if (ScaleInProcess)
							return false;
						hide_desc();
						imgs.each(function(o) {
							new Effect.Opacity(o, {
								to : 1,
								queue : {
									scope : "img_q"
								}
							});
						});
					}
					
					//---------- growing picture after mouse-click ------------------
					el.onclick = function() {
						var obj = this;
						if (ScaleInProcess)
							return;
						ScaleInProcess = true;
						imgs.each(function(o) {
							if (o.big == 1) {
								var obrys = OBR_Y * SCALE;
								var obrxs = OBR_X * SCALE;
								new Effect.Scale(o, ((1 / SCALE) * 100), {
									scaleMode : {
										originalHeight : obrys,
										originalWidth : obrxs
									},
									afterFinish : function() {
										ScaleInProcess = false;
										o.style.zIndex = 1;
									},
									scaleFromCenter : true,
									duration : 0.5
		
								});
								new Effect.Move(o, {
									x : o.movePx_X * (-1),
									y : o.movePx_Y * (-1),
									mode : 'relative',
									duration : 0.5,
									queue : 'end'
								});
								o.big = 0;
							}
		
							else if (obj == o) {
								var movementOfThePic = movementOfThePicture(o);
								o.movePx_Y = movementOfThePic.Y;
								o.movePx_X = movementOfThePic.X;
								// alert(o.movePx_X+' '+o.movePx_Y);
								new Effect.Move(o, {
									x : Number(o.movePx_X),
									y : Number(o.movePx_Y),
									mode : 'relative',
									duration : 0.5,
									queue : 'end'
								});
								new Effect.Scale(o, (SCALE * 100), {
									scaleMode : {
										originalHeight : OBR_Y,
										originalWidth : OBR_X
									},
									beforeStart : function() {
										o.style.position = 'absolute';
									},
									afterFinish : function() {
										ScaleInProcess = false;
										$(o).setOpacity(1);
										o.style.zIndex = 1000;
									},
									scaleFromCenter : true,
									duration : 0.5,
									queue : 'end'
								});
								o.big = 1;
							}// else if
							else
								$(o).setOpacity(0.4);
						});// imgs.each
		
					}
				});

	} //init()
	
	//---------- GLOBAL METHODS --------------------------
	this.insertImagesToDom = function(){
		insertImages();
	}
	this.initPlugin = function(){
		init();
	}
}