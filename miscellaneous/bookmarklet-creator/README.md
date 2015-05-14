# Bookmarklet Creator

# What is bookmarklet ?
Wikipedia definition:
**"A bookmarklet is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser."** <br />
Strictly speaking - it's an mini-application in JavaScript that is contained inside URL link, and invoked when you click on this link.<br />
Here's an example: <a href="javascript:(function(){alert%28%22hello%22%29%3B})();void(null);">Click me!</a><br />
If you can see alert window with "hello" it means your browser is properly configured to run **bookmarklets**

# How Bookmarklet Creator works ?
Bookmarklet Creator is my application in JavaScript designed to convert regular JavaScript code to bookmarklet form. <br />
This way you can write simple JavaScript applications that can be used on every site just by clicking bookmark.

# How to use ?
Go to and <a href="http://dominikstyp.github.io/javascript-stuff/miscellaneous/bookmarklet-creator/bookmarklet-creator.html"> Try It! </a> and see for yourself.<br />
Put a simple JavaScript code into the text field and click **Create Bookmarklet!**.<br />
Then **you can simply drag and drop created link to your browser's favorites bar**.<br />
If you want to use it on your computer, all you need is 2 files **bookmarklet-creator.html** along with **bookmarklet-creator.js**, <br />
no server, no database, no PHP nor any other server-side language is needed.<br />
It's pure JavaScript and HTML.

# What you can setup ?
- Your own template callbacks to display every information in HTML
- Your own names and CSS classes for HTML elements


# Updates/Downloads
Every update will be added to the branch **gh-pages** because it's git's default branch for showing files as regular HTML pages.<br />
If you pull this repo make sure that **gh-pages** brach is set.

# Dependencies
**Following script IS NOT dependent on any library, nor external sources.**<br />
**It has ONLY ONE global function which is its constructor.**<br />
**Everything else is contained in a closure, so it can't conflict with any library/script.**

# Additional Info
In some cases convert to one line could fail, so the better way is to first minify code using some online minifiers.<br />
If you have complicated and long code first use minifier like: <a href="http://jscompress.com/" target="_blank">JS Compress</a>,<br /> 
paste minified code into text area, and then click **Create Bookmarklet!** <br />

# DONATIONS
Like my project ?   
Want to help in future development, and adding new features ?   
If you find this project useful...  
#### You can <a href="https://sites.google.com/site/dominikdonationbutton/">SUPPORT ME BY PAYPAL</a>
I created PayPal Donation Button as Google Site because here not all HTML tags are allowed and Donation Button HTML can't be put here...  
Every dollar will be appreciated and help me in future development of my projects. 