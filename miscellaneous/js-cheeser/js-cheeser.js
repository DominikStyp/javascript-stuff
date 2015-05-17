/**
 * This script doesn't require any external library.
 * 
 * If you want to use this script (or more than 20% of the code) please do not remove this comment.
 * @author: DominikStyp@github.com
 * @url: https://github.com/DominikStyp
 */

function JSCheeser(SETTINGS) {
	
	var aboutsArray = SETTINGS.cheeses.abouts;
	var namesArray = SETTINGS.cheeses.names;
	var textareaDOMObject = document.getElementById(SETTINGS.HTMLelements.about);
	var inputTextDOMObject = document.getElementById(SETTINGS.HTMLelements.name);
	var clearFieldsButton = document.getElementById(SETTINGS.HTMLelements.clearFields);
	var goNext = document.getElementById(SETTINGS.HTMLelements.goNext);

	function setupRandoms(){
		textareaDOMObject.randomPicked = getRandomElementFromArray(aboutsArray);
		inputTextDOMObject.randomPicked = getRandomElementFromArray(namesArray);
	}
	/**
	 * strictly for debug
	 */
	function alertKeyCode(evt) {
		evt = (evt) ? evt : window.event;
		alert(evt.keyCode);
	}
	/**
	 * Gets random element from an array
	 * @param arr - Array
	 */
	function getRandomElementFromArray(arr){
		return arr[randNum(0, arr.length - 1)];
	}
	/**
	 * Generates random number from to
	 * @param min - from
	 * @param max - to
	 */
	function randNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	/**
	 * Moving position of the caret (cursor) to the end of the string in the text field.
	 * You just need to attach this function to the 'onkeyup' or 'onkeydown' events to make an effect:
	 * Example:
	 * object.onkeydown = function(evt) {
				evt = (evt) ? evt : window.event;
				moveCaretPositionToTheEnd(this, evt); //is gonna move caret to the end of text
	   }
	 * Thanks to:
	 * http://codetheory.in/javascript-control-input-field-caret-position-or-move-to-end-in-textboxes-and-textareas/
	 * I've changed it a bit to fit this into one function.
	 * @param obj - DOM Object for ex. text field
	 * @param eventObj - Event Object that is passed to the listener function
	 */
	function moveCaretPositionToTheEnd(obj, eventObj){
			obj.__oldVal = (typeof obj.__oldVal == "undefined") ? "" : obj.__oldVal;
		    var val = obj.value
		    var len = val.length;
		     
		    obj.setSelectionRange(len, len);
		     
		    // To fix android chrome bug
		    // although good practise just incase
		    // user is using some other browser/os combination
		    // with similar issue.
		    if (eventObj.type === 'keyup' || eventObj.type === 'keydown') {
		        var short, long;
		        // Find which is shorter and which is longer
		        if (obj.__oldVal.length < val.length) {
		            short = obj.__oldVal;
		            long = val;
		        }
		        else {
		            short = val;
		            long = obj.__oldVal;
		        }
		         
		        // Check if shorter version is a substring
		        // of the longer one (from the initial position)
		        if (long.indexOf(short) !== 0) {
		        	eventObj.preventDefault();
		            // Just exit from the function now
		            return false;
		        }
		    }
		    obj.__oldVal = val;
	}
	
	
	/**
	 * Function forces user to type what you want to, not what he wants :)
	 * Only BACKSPACE key is available, others are blocked and replaced by text from the chosen string.
	 * String is randomly chosen from the arrayOfChoices 
	 * @param obj - DOM Object representing input field or textarea
	 * @param tryToPasteAlert - string that is alerted when user tries to paste something into the field
	 * @param arrayOfChoices - array contains choices that will be randomly chosen by every new input attempt
	 */
	function typeOtherText(obj, tryToPasteAlert, arrayOfChoices){
		    //blocks normal user input
			obj.onkeypress = function() {
				return false;
			};
			obj.onkeydown = function(evt) {
				evt = (evt) ? evt : window.event;
				moveCaretPositionToTheEnd(this, evt);
				//if user hits BACKSPACE key
				if (evt.keyCode == 8) {
					this.onkeypress = function() {
						return true;
					};
					if (this.value.length == 0){
						this.randomPicked = getRandomElementFromArray(arrayOfChoices);
					}
				}
				//if user hits other key than BACKSPACE
				else {
					this.onkeypress = function() { //here we won't let him do any action
						return false;
					};
					if (typeof this.randomPicked == "undefined" || this.randomPicked.length == 0){
						this.randomPicked = getRandomElementFromArray(arrayOfChoices);
					}
					var len = this.value.length;
					this.value += "" + this.randomPicked.charAt(len);
					if (len >= this.randomPicked.length) {
						this.onkeypress = function() {
							return false;
						};
					}
				}
			}
			obj.onkeyup = function(evt) {
				evt = (evt) ? evt : window.event;
				//if user hits BACKSPACE key
				if (evt.keyCode == 8) {
					this.onkeypress = function() {
						return true;
					};
					if (this.value.length == 0){
						this.randomPicked = getRandomElementFromArray(arrayOfChoices);
					}
				}
			}
		    obj.onmousedown = function(evt) {
				evt = (evt) ? evt : window.event;
				if (evt.button > 1) {
					alert(tryToPasteAlert);
					return false;
				}
			}
	}
	

	///////////////////////////// BINDING EVENTS /////////////////////////////////////////////////////////
	///////////////////////////// BINDING EVENTS /////////////////////////////////////////////////////////
	///////////////////////////// BINDING EVENTS /////////////////////////////////////////////////////////
	///////////////////////////// BINDING EVENTS /////////////////////////////////////////////////////////
		

	/**
	 * Action performed while textarea or text field are clicked
	 */
	textareaDOMObject.onfocus = inputTextDOMObject.onfocus = function() {
		var obj = this;
		/*obj.value = '';
		obj.onkeypress = function() {
			return false;
		};
		setupRandoms();
		*/
	}
	
	/**
	 * Action performed when "Clear Fields" button is clicked
	 */
	clearFieldsButton.onclick = function(){
		textareaDOMObject.value = '';
		inputTextDOMObject.value = '';
		setupRandoms();
	}
	
	/**
	 * Action performed while "Go next" is clicked
	 */
	goNext.onclick = function() {
		var field = inputTextDOMObject;// "Go next" will check name input but this can by easily changed
		if (field.value == '')
			alert(SETTINGS.alerts.tryToGoNextWithoutFullfillName);
		else {
			if (confirm(SETTINGS.alerts.nameConfirm.replace(/#name/g, field.value))) {
				if (field.randomPicked == field.value) {
					alert(SETTINGS.alerts.last.replace(/#name/g, field.value))
				} else
					alert(SETTINGS.alerts.seemsNotEnded);
					return false;
			}
		}
	}
	
	
	//////////////////// binding key press events  //////////////////////////////
	typeOtherText(inputTextDOMObject, SETTINGS.alerts.tryToPasteName, namesArray);
	typeOtherText(textareaDOMObject, SETTINGS.alerts.tryToPasteAbout, aboutsArray);
	
	

}//JSCheeser()
