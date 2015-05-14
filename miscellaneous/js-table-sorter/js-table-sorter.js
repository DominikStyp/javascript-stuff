/**
 * If you want to use this script (or more than 20% of the code) please do not remove this comment.
 * @author: DominikStyp@github.com
 * @url: https://github.com/DominikStyp
 */

function JSTableSorter(SETTINGS) {

	var lastClick = new Object();
	
	
	function color(obj, typeV) {
		if (typeV == 1 && obj.wasClicked == 0)
			obj.style.background = SETTINGS.CSS.activeColor;
		if (typeV == 2 && obj.wasClicked == 0)
			obj.style.background = SETTINGS.CSS.unsortedColor;
	}

	function changeValueOfField(obj) {
		if (confirm("Do you want to change this value? \n(" + obj.innerHTML + ") ?")) {
			var changeV = prompt("Change value from : " + obj.innerHTML, "");
			if (changeV == "") {
				alert("Field wasn't changed");
			} else {
				alert("Value removed: " + obj.innerHTML + "\r\nNew value: "+ changeV);
				obj.innerHTML = changeV;
			}
		}
	}

	function wasClicked(obj) {
		if (lastClick.wasClicked == 2
				|| (lastClick.wasClicked == 1 && obj.wasClicked == 0)) {
			lastClick.style.background = SETTINGS.CSS.unsortedColumn;
			lastClick.wasClicked = 0;
		}
		if (obj.wasClicked == 1) {
			obj.style.background = SETTINGS.CSS.descendingColumn;
			obj.wasClicked = 2;
			obj.sign = 1;
		}
		if (obj.wasClicked == 0) {
			obj.style.background = SETTINGS.CSS.ascendingColumn;
			obj.wasClicked = 1;
			obj.sign = -1;
		}
		lastClick = obj;
	}

	function sort(numV, objectV) {
		(objectV.sign > 0) ? (objectV.sign = -1) : (objectV.sign = 1);
		var TBODYobj = objectV.parentNode.parentNode.parentNode.getElementsByTagName('tbody')[0];
		var c = new Array();
		for (var i = 0, TRobj; TRobj = TBODYobj.getElementsByTagName('tr')[i]; i++) {
			c[i] = [];
			for (var j = 0; TDobj = TRobj.getElementsByTagName('td')[j]; j++) {
				c[i][j] = TDobj.innerHTML;
			}
		}
		c.sort(function(a, b) {
			return check(a[numV], b[numV]) ? objectV.sign : (-objectV.sign)
		});
		for (var i = 0, TRobj; TRobj = TBODYobj.getElementsByTagName('tr')[i]; i++) {
			for (var j = 0; TDobj = TRobj.getElementsByTagName('td')[j];) {
				TDobj.innerHTML = c[i][j++];
				
			}
		}
	}

	function check(x, y) {
		var r = /^[0-9\.]+$/i;
		var HTMLreg = /<.*?>/i;
		x += '';
		y += '';
		x = x.replace(HTMLreg, '');
		y = y.replace(HTMLreg, '');
		if (x.match(r) && y.match(r)) {
			if (parseFloat(x) > parseFloat(y))
				return true;
			else
				return false;
		}
		if (x > y)
			return true;
		else
			return false;
	}
	
	
	  //setup colors for table legend
	  function legendColors(){
		  document.getElementById("activeCol").style.backgroundColor = SETTINGS.CSS.activeColor;
		  document.getElementById("unsortedCol").style.backgroundColor = SETTINGS.CSS.unsortedColumn;
		  document.getElementById("ascendingCol").style.backgroundColor = SETTINGS.CSS.ascendingColumn;
		  document.getElementById("descendingCol").style.backgroundColor = SETTINGS.CSS.descendingColumn;
	  }
	
	
	function init() {
		for (var i = 0, TR; TR = document.getElementById(SETTINGS.HTMLelements.tableId).getElementsByTagName('tr')[i++];)
		{
			
			for (var j = 0, TH; TH = TR.getElementsByTagName('th')[j]; j++) {
				TH.number = j;
				TH.wasClicked = 0;
				TH.onclick = function() {
					wasClicked(this);
					sort(this.number, this);
				}
				TH.onmouseover = function() {
					color(this, 1)
				};
				TH.onmouseout = function() {
					color(this, 2)
				};
			}
			
			if(SETTINGS.ScriptSetup.dynamicChangeOfFieldValue){
					for (var j = 0, TD; TD = TR.getElementsByTagName('td')[j]; j++) {
							TD.onclick = function() {
								changeValueOfField(this);
							}
					}
			}
		}
		
		legendColors();
	}
	
	//////------------- initialize of the script ----------
	init();
}
