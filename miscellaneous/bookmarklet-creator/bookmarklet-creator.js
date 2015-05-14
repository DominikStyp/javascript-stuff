/**
 * If you want to use this script (or more than 20% of the code) please do not
 * remove this comment.
 * 
 * @author: DominikStyp@github.com
 * @url: https://github.com/DominikStyp
 */

function BookmarkletCreator(SETTINGS) {

	/**
	 * Shorter and safer version of document.getElementById
	 */
	function getById(id) {
		var el = document.getElementById(id) || false;
		if (!el) {
			if (typeof console == "undefined") {
				alert("There is no element with id: " + id);
				return null;
			}
			console.log("There is no element with id: " + id);
			return null;
		}
		return el;
	}

	/**
	 * Function escapes ONLY defined strings in javascript code it means that
	 * only strings that are contained between "" and '' Example: 'this is "my
	 * string" test and another "loooooonl "' ===> 'this is %22my%20string%22
	 * test and another %22loooooonl%20%20%22' It works with single and double
	 * quotes
	 */
	function escapeOnlyStrings(code) {
		code = code.replace(/"([^"]+)"/g, function(match, contents, offset, s) {
			return escape('"' + contents + '"');
		});
		code = code.replace(/'([^']+)'/g, function(match, contents, offset, s) {
			return escape("'" + contents + "'");
		});
		return code;
	}
	/**
	 * Function makes code shorter, and adds ; where \n was used insted And also
	 * removes new lines and repeated spaces
	 */
	function inlinizeCode(code) {
		return code.replace(/\r/g, '')
				   .replace(/\)\s*\n/g, ');')
				   .replace(/\s{2,}/g, ' ')
				   .replace(/\s?{\s?/g, '{')
				   .replace(/\s?}\s?/g,'}')
				   .replace(/\s?;\s?/g, ';')
				   .replace(/;{2,}/g, ';')
				   .replace(/}([a-zA-Z]+)/g, "};$1")
				   .replace(/};else/g,'}else')
	}

	/**
	 * Removes comments from javascript code IMPORTANT! flag /s (dotall) doesn't
	 * exist in JavaScript But it can be walk around using [\s\S] as multiline
	 * string, instead of "."
	 * 
	 */
	function removeComments(code) {
		return code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
	}

	/**
	 * Function that does all the job and puts results into HTML
	 */
	function createBookmarklet() {
		var name = getById(SETTINGS.HTMLelements.linkName).value;
		var code = getById(SETTINGS.HTMLelements.code).value;
		if (name == '' || code == '') {
			SETTINGS.Templates.emptyCodeCallback();
			return;
		}
		if(getById(SETTINGS.HTMLelements.inlinize).checked){
				code = removeComments(code); // removes all the comments from code
				code = escapeOnlyStrings(code); // escapes all the strings in code to URL-encoded format
				code = inlinizeCode(code); // makes code inline
				code = unescape(code); // gets strings back to their primary state (unescaped)
		}
		if(getById(SETTINGS.HTMLelements.urlEncode).checked){
				code = escape(code); //escapes all the code to the URL-encoded format
		}
		var codeLink = SETTINGS.Templates.getBookmarkletCallback(code, name);
		getById(SETTINGS.HTMLelements.resultDiv).innerHTML = SETTINGS.Templates.getResultDivCallback(codeLink);
	}

	// ------------- bind events click event --------------------------
	getById(SETTINGS.HTMLelements.createButton).onclick = function() {
		createBookmarklet();
	}

	


}