/**
 * If you want to use this script (or more than 20% of the code) please do not remove this comment.
 * @author: DominikStyp@github.com
 * @url: https://github.com/DominikStyp
 */


(function(){

var maxval = 1000000; // maximum value of the limit
var amount_chars_arr = new Array();
var current_pos = 0;
var current_amount_chars = 0;

function changeColorBar(obj, percents) {
	var max_color = 'FF';
	var min_color = '00';
	max_color = parseInt(max_color, 16);
	min_color = parseInt(min_color, 16);
	var difference = (max_color - min_color);
	(difference < 0) ? difference *= -1 : difference;
	var one_percent = parseInt(difference / 100);
	var doccolor = '' + dec_to_hex(min_color + (one_percent * percents));
	while (doccolor.length < 6)
		doccolor = '0' + doccolor;
	doccolor = '#' + doccolor;
	obj.style.backgroundColor = doccolor;
}

function dec_to_hex(number) {
	return from10toradix(number, 16);
}

function from10toradix(value, radix) {
	var retval = '';
	var ConvArray = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F');
	var intnum;
	var tmpnum;
	var i = 0;
	intnum = parseInt(value, 10);
	if (isNaN(intnum)) {
		retval = 'NaN';
	} 
	else {
		while (intnum > 0.9) {
			i++;
			tmpnum = intnum;
			retval = ConvArray[tmpnum % radix] + retval;
			intnum = Math.floor(tmpnum / radix);
			if (i > 100) {
				retval = 'NaN';
				break;
			}
		}
	}
	return retval;
}


function averageLengthOfWords(text) {
	var all = 0, lenchar = 0, lenwords = 0, tmplen = 0, minimize = 0, outarr = new Array();
	outarr[0] = 0; // average length of words
	outarr[1] = 0; // amount of all words
	outarr[2] = 0; // amount of all chars

	if ((lenchar = text.length) < 1)
		return outarr;
	text = text.split(/\s/g); // split to words
	for (var i = 0; i < (lenwords = text.length); i++) {
		tmplen = text[i].length;
		all += tmplen;
		if (tmplen < 2)
			minimize++; // if word has less than 1 char it's not counted
	}
	// document.getElementById("debug").innerHTML=all+' '+len;
	outarr[0] = Math.round(all / (lenwords - minimize)); 
	outarr[1] = lenwords - minimize; // AMOUNT words
	outarr[2] = lenchar; // AMOUNT chars
	outarr[0] = isNaN(parseInt(outarr[0])) ? 0 : outarr[0];
	return outarr;
}

function onlyDigits(doc, configObj) {
	var regg = /[0-9]+/;
	if (regg.test(doc.value + '')) {
		if (parseInt(doc.value) > 0 && parseInt(doc.value) <= parseInt(maxval))
			return true;
		else {
			if(configObj.alertMaxValTemplate.length > 0){
				alert( configObj.alertMaxValTemplate.replace("maxval", maxval) );
			}
			doc.value = doc.defaultValue;
			return true;
		}
	} else {
		if(configObj.alertOnlyDigitsTemplate.length > 0){
			alert( configObj.alertOnlyDigitsTemplate );
		}
		doc.value = 500;
		return true;
	}
}

function amountCharsPerSec(objRESULT, configObj) {
	if (current_pos > 7){
		current_pos = 0; // how many seconds are to be checked
	}
	amount_chars_arr[current_pos] = current_amount_chars;
	current_pos++;
	current_amount_chars = 0;
	var len = amount_chars_arr.length;
	for (var i = 0, average = 0; i < len; i++){
		average += amount_chars_arr[i];
	}
	average = parseInt(average / len);
	 
	objRESULT.innerHTML = configObj.avgAmountOfCharsTemplate.replace("#average", average);
	setTimeout(function() {
		amountCharsPerSec(objRESULT, configObj);
	}, 1000);
}
// -----------------------------------------------------------------------


function TypingSpeedCounter(configObj) {
	var browser = (navigator.userAgent.indexOf('MSIE') != -1) ? 'IE' : 'Firefox';
	var ALERTWIN = 0;
	var t = document.getElementById(configObj.comment);
	var amount = document.getElementById(configObj.maxlen);
	var lim1 = document.getElementById(configObj.limit1);
	var lim2 = document.getElementById(configObj.limit2);
	var w = document.getElementById(configObj.result);
	// average length wordsa ------------------------------
	var averageDS = document.getElementById(configObj.averageDS);
	// ----bar z %
	var barWIDTH = document.getElementById(configObj.barWIDTH);
	var barVALUE = document.getElementById(configObj.barVALUE);
	// ----amount chars per second
	amountCharsPerSec(document.getElementById(configObj.amountOfCharsPerSec), configObj);
	
	document.getElementById(configObj.maxlen).onchange=function(){
		onlyDigits(this, configObj);
	}
	
	t.onkeyup = maxlen.onkeyup = lim1.onclick = lim2.onclick = function() {		
		current_amount_chars++;
		var arrData = averageLengthOfWords(t.value);
		averageDS.className = configObj.averageDS;
		averageDS.innerHTML = configObj.averageDSTemplate.replace("#avgLen",arrData[0]).replace("#numOfWords",arrData[1]).replace("#numOfChars",arrData[2]);
		var limit_w = (lim1.checked) ? 0 : 1;
		var len = 0;
		switch (limit_w) {
		case 0:
			len = arrData[2];
			unit = configObj.charsUnitName;
			break; // length chars returned by averageLengthwords()
		case 1:
			len = arrData[1];
			unit = configObj.wordsUnitName;
			break;
		default:
			len = arrData[2];
			unit = objConfig.charsUnitName;
			break;
		}
		// -----------------------------------------------------
		var maxlen = parseInt(amount.value);
		maxlen = maxlen > 0 ? maxlen : 100;

		// --- showing bar
		var percent = parseInt((len / maxlen) * 100);
		barWIDTH.style.width = percent + '%';
		barVALUE.innerHTML = percent + '%';
		// ------change of bar colors depending on percents---------
		changeColorBar(barWIDTH, percent);
		var odds = maxlen - len;
		if (odds > 0) {
			ALERTWIN = 0;
			w.className = configObj.CSSNotFull;
			w.innerHTML = configObj.limitRemainingTemplate.replace("#odds",odds).replace("#unit",unit)
			return true;
		} else if (odds == 0 && ALERTWIN == 0) {
			ALERTWIN = 1;
			w.className = configObj.CSSFull;
			w.innerHTML = configObj.limitReachedTemplate;
			if(configObj.alertLimitReachedTemplate.length > 0){
				alert(configObj.alertLimitReachedTemplate);
			}
		} else if (odds < 0) {
			ALERTWIN = 0;
			w.className = configObj.CSSFull;
			w.innerHTML = configObj.limitExceededTemplate.replace("#odds",Math.abs(odds)).replace("#unit",unit)
			return true;
		}
		return true;
	}

	// paste or cut (onafterpaste i onaftercut) (IE)
	if (browser == 'IE')
		t.onpaste = t.oncut = function() {
			var x = this;
			setTimeout(function() {
				x.onkeyup()
			}, 50);
		};
	// mozilla
	else {
		t.addEventListener("DOMCharacterDataModified", function() {
			var x = this;
			setTimeout(function() {
				x.onkeyup()
			}, 50);
		}, false);
		t.oninput = t.onkeyup;
		t.onmouseout = t.onkeyup;
		t.onmouseover = t.onkeyup;
	}

	function onKeyPasteHandler(e) {
		/* gets CTRL+V or INTERT+SHIFT */
		if ((e.ctrlKey && e.keyCode == e.DOM_VK_V)
				|| (e.shiftKey && e.keyCode == e.DOM_VK_INSERT)) {
			var x = this;
			setTimeout(function() {
				x.onkeyup()
			}, 50);
		}

	}

}

//globalize constructor
window.TypingSpeedCounter = TypingSpeedCounter;

}());

