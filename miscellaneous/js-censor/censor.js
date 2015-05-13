
/**
 * If you want to use this script (or more than 20% of the code) please do not remove this comment.
 * @author: DominikStyp@github.com
 * @url: https://github.com/DominikStyp
 */

function censorJS(SETTINGS){

		var wordsARR = SETTINGS.ScriptSettings.wordsToCensor;
		var wordsToCensor = SETTINGS.ScriptSettings.wordsToCensor;
		var sensivityValue = SETTINGS.ScriptSettings.sensivity;
		/* adding grammatical cases
		for (var iCnt = 0; iCnt < wordsToCensor.length; iCnt++) {
			arrTMP = cases(wordsToCensor[iCnt]);
			wordsARR = wordsARR.concat(arrTMP);
		}*/ 
		
		function getById(id){
			var el = document.getElementById(id) || false;
			if(!el){
				if(typeof console == "undefined"){
					alert("There is no element with id: " + id);
					return null;
				}
				console.log("There is no element with id: " + id);
				return null;
			}
			return el;
		}
		
		/**
		 * JavaScript Unique Implementation Returns true if 's' is contained in the
		 * array 'a'
		 * 
		 * @author Johan Kanngard, http://dev.kanngard.net
		 */
		Array.prototype.unique = function() {
			function contains(a, e) {
				for (var j = 0; j < a.length; j++){
					if (a[j] == e){
						return true;
					}
				 return false;
				}
			}
			var a = this;
			var tmp = new Array(0);
			for (i = 0; i < a.length; i++) {
				if (!contains(tmp, a[i])) {
					tmp.length += 1;
					tmp[tmp.length - 1] = a[i];
				}
			}
			return tmp;
		}
		
		wordsARR = wordsARR.unique(); 
		
		/**
		 * 
		 * Javascript implemention of the SIFT algorithm written by Tudor Barbu (
		 * tudor@it-base.ro )
		 * 
		 * More about the SIFT algorithm on its author site:
		 * http://siderite.blogspot.com
		 **********************************************
		 * Sift algorithm has been optimised by me
		 */
		
		StringSift2_ver2 = {
			maxOffset : 5,
			/**
			 * return the Levenshtein distance between two strings using the SIFT
			 * algorithm
			 * 
			 * @param string
			 *            s1
			 * @param string
			 *            s2
			 */
			distance : function(s1, s2) {
				var s1_length = parseInt(s1.length);
				var s2_length = parseInt(s2.length);
				if (s1_length == 0)
					return s2_length;
				if (s2_length == 0)
					return s1_length;
				var c = 0, offset1 = 0, offset2 = 0, cPLUSOff1 = 0, cPLUSOff2 = 0, dist = 0, maxOffset = parseInt(StringSift2_ver2.maxOffset), cPLUSi = 0;
				// init string Arrays
				var s1ARR = s1.split(''), s2ARR = s2.split('');
				while (((cPLUSOff1 = c + offset1) < s1_length)
						&& ((cPLUSOff2 = c + offset2) < s2_length)) {
					if (s1ARR[cPLUSOff1] != s2ARR[cPLUSOff2]) {
						offset1 = offset2 = 0;
						for (var i = 0, cPLUSi = c - 1, tmpS1 = s1ARR[c], tmpS2 = s2ARR[c]; i < maxOffset; i++) {
							if ((++cPLUSi < s1_length) && (tmpS2 == s1ARR[cPLUSi])) {
								(i == 0) ? dist-- : offset1 = i;
								break;
							}
							if ((cPLUSi < s2_length) && (tmpS1 == s2ARR[cPLUSi])) {
								(i == 0) ? dist-- : offset2 = i;
								break;
							}
						}// for
						dist++;
					}// if
					c++;
				}// while
				return Math.round(dist + (s1_length - offset1 + s2_length - offset2)
						/ 2 - c);
			} // distance
		} // StringSift2_ver2
		
		function filter_words(strV) {
			strV = strV.replace(/(.{1})\1{1,}/g, "$1");
			strV = strV.replace(/[^a-zA-Z\s]+/g, "");
			return strV.toLowerCase();
		}
		
		/*
		function cases(wordV) // przepisane z PHP
		{
			var casesArr = new Array();
			casesArr[0] = wordV; // mianownik
		
			if ($ostatnia = wordV.match(/[eêiuoóa¹y]$/)) {
				var $ostatnia = $ostatnia[0];
				casesArr[1] = wordV.replace(/(\S+)[eêiuoóa¹y]$/, "$1y"); // dopelniacz
		
				if ($ostatnia == "y")
					casesArr[2] = wordV.replace("/(\S+)y$/", "$1emu"); // celownik
				else
					casesArr[2] = wordV.replace("/(\S+)[eêiuoóa¹y]$/", "$1ie"); // celownik
		
				casesArr[3] = wordV.replace(/(\S+)[eêiuoóa¹y]$/, "$1ê"); // biernik
				casesArr[4] = wordV.replace(/(\S+)[eêiuoóa¹y]$/, "$1¹"); // narzednik
				casesArr[5] = wordV.replace(/(\S+)[eêiuoóa¹y]$/, "$1ie"); // miejscownik
				casesArr[6] = wordV.replace(/(\S+)[eêiuoóa¹y]$/, "$1o"); // wolacz
		
			} else if ($ostatnia = wordV.match(/[^eêiuoóa¹y]$/)) {
				$ostatnia = $ostatnia[0];
		
				casesArr[1] = wordV.replace(/(\S+)/, "$1a"); // dopelniacz
				casesArr[2] = wordV.replace(/(\S+)/, "$1owi"); // celownik
				casesArr[3] = wordV.replace(/(\S+)/, "$1a"); // biernik
				casesArr[4] = wordV.replace(/(\S+)/, "$1em"); // narzednik
				casesArr[5] = wordV.replace(/(\S+)/, "$1u"); // miejscownik
				// casesArr[6]=wordV.replace(/(\S+)/,"$1u"); //wolacz
			}
			return casesArr;
		} */
		
		
		function cleanText(t){
			t = t.replace(/\n/g, " \n");
			t = t.replace(/\s([a-zA-Z]{1})\s+([a-zA-Z]{1})\s+([a-zA-Z]{1})\s+/g, " $1_$2_$3");
			t = t.replace(/\s+/g, " ");
			return t;
		}
		
		function censorText(textV) {
			var beforeCensor = new Array();
			var censored = new Array();
			var toCensor = new Array();
			var check_word = "";
			//do some cleaning of the text
			textV = cleanText(textV);
			textWordsARR = textV.split(" ");
			beforeCensor = textWordsARR.unique();
			var percent = 0;
			var lenVar = 0;
			var tmpARRLen = 0;
			var beforeCensor_len = beforeCensor.length;
			var wordsARR_len = wordsARR.length;
			for (var $j = 0; $j < beforeCensor_len; $j++) {
				check_word = beforeCensor[$j];
				percent_prog = sensivityValue; 
				wordToFilter = filter_words(check_word); 
				lenVar = wordToFilter.length;
				for (var iCnt = 0; iCnt < wordsARR_len; iCnt++) {
					wordV_wulg = wordsARR[iCnt] + '';
					if (lenVar < 4 && wordToFilter != wordV_wulg){
						continue;
					}
					distance = StringSift2_ver2.distance(wordToFilter, wordV_wulg);
					percent = Math.round(((lenVar - distance) / lenVar) * 100); 
					if (wordToFilter != "" && wordToFilter != null) {
						if (percent < percent_prog && percent < 80
								&& (wordV_wulg.indexOf(wordToFilter) != -1))
							percent += 20;
					}
					if (percent >= percent_prog) {
						percent_prog = percent;
						toCensor[tmpARRLen] = check_word;
						if(typeof SETTINGS.Templates.checkedWord != "function"){
							alert("SETTINGS.Templates.checkedWord is not a function!\nYou must specify callable function with 2 arguments (checkedWord, percent)");
							return null;
						}
						censored[tmpARRLen++] = SETTINGS.Templates.checkedWord(check_word, percent);
						break;
					}
				}
			}
		
			for (var xCnt = 0, lenVar = textWordsARR.length, lenVar1 = toCensor.length, output = ''; xCnt < lenVar; xCnt++) {
				for (var iCnt = 0, isBoolean = false, textWordsTMP = textWordsARR[xCnt]; iCnt < lenVar1; iCnt++) {
					if (textWordsTMP == toCensor[iCnt]) {
						output += censored[iCnt] + ' ';
						isBoolean = true;
						break;
					}
				}
				if (!isBoolean)
					output += textWordsTMP + ' ';
			}
		
			return output;
		}
		// -------------------------------------------------------------------------------------------------------------------------------
		// ------------------------------------------------------------------------------------------------------------------------------
		// ----koniec funkcji
		// cenzor----------------------------------------------------------------------
		
		function censorIt() {	
			var toCens = getById(SETTINGS.HTMLelements.toCensor).value;
			var s = new Date();
			var text = censorText(toCens); // CENSORING ACTION !!!
			var e = new Date();
			var took = e.getTime() - s.getTime();
			getById(SETTINGS.HTMLelements.censored).innerHTML = text;
		}
		
		function setupSettings() {
			if (getById(SETTINGS.HTMLelements.sensivity).value != "")
				sensivityValue = getById(SETTINGS.HTMLelements.sensivity).value;
			if (getById(SETTINGS.HTMLelements.words).value != "") {
				wordsToCensor[wordsToCensor.length] = document
						.getElementById(SETTINGS.HTMLelements.words).value;
				for (var iCnt = 0; iCnt < wordsToCensor.length; iCnt++) {
					wordsARR = wordsARR.concat(wordsToCensor[iCnt]);
				}
			}
		}
		
		// ----------- bind events ---------------------
		getById(SETTINGS.HTMLelements.censorButton).onclick = function(){
			censorIt();
		}

}//censorJS()
