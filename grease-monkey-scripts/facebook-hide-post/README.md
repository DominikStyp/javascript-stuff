# How to hide facebook posts on a group site?
Imagine you're active user of facebook group where people post their favourite youtube tracks.<br>
Unfortunately you can't hide their posts on group site.<br>
So there are lots of posts, and some and are back on top because someone has been commenting them recently,<br> 
but you read them already, so you don't want to see them again.<br>
**Facebook Hide Post is a solution**.

# How to install?
- Install Grease Monkey plugin to the Firefox
- Download **facebook-hide-post.js** 
- Paste **about:addons** in your browser
- Go to **User Scripts** tab
- Click **New script...**
- Type **facebook** in name field, and hit **OK**
- Copy **facebook-hide-post.js** contents and paste it into opened editor window <br />
  (remember that *@name facebook* must be the same as it is in the name field)
- Troubleshooting and further information here: <br />
  (http://wiki.greasespot.net/Main_Page)
 
# How to use?
Hide
Hide&Save
Clear-Hidden
Hide-To-Date
Hide-Visible
Go to your facebook group site and see if you have following links in the left top corner of every post:<br>
- **Hide** - if clicked it simply removes post from the HTML (hides it to user)<br />
- **Hide&Save** - if clicked it hides post on the site, and remebers it in a browser's <a href="http://diveintohtml5.info/storage.html">**storage**</a> object, so if you reload site, hidden posts should still be hidden.<br>
- **Clear-Hidden** - if clicked it clears all the hidden posts, and reloads the site, so that you'll see them again<br />
- **Hide-To-Date** - if clicked allows you to open the mini-panel where you can choose a date in a past to which you want to hide posts,<br />for example if you saw posts up to month ago, put this date to the field and click **Hide newer posts!**, <br />so newer posts will start hiding.<br />
*NOTE: If you pick up distant date in a past, hiding posts may take a while (up to couple of minutes), because facebook dynamically load posts with AJAX<br />* 
*so it has to load all the posts in a realtime, and script has to hide the all in a realtime too.*<br />
- **Hide-Visible** hides every currently visible post on the page (included with those that are below window scrolled position)
  
# Requirements
- Firefox
- Grease Monkey addon
- Enabled Cookies in browser (they are enabled by default)

# Limits
Maximum amount of hidden posts in modern browsers is around 250 000. <br />
You can see if it supports jStorage <a href="http://www.jstorage.info/#support">HERE</a><br />

# Issues
- Sometimes **if you add too many posts to hidden your browser can crash** (browser memory issues, other plugins errors etc.)
- Sometimes your **browser can accidentally delete hidden posts** (after crash etc.)
- If you **clear browser cache, clear private data, etc.** your hidden posts will also be cleared (because it's similar to **cookie data**)
- If you add many posts to hidden (more than 100) **you may need to wait for a while before new posts will appear** at the bottom of the page<br />
  this is because facebook dynamically load posts to the page while you scroll the page down, and my plugin dynamically hides them when they appear, <br />
  so it's all dependent on thing like: 
  - your internet connection speed
  - your computer speed (processor)
  - your installed browser plugins/addons
  - facebook servers speed <br />
All the aformentioned can affect posts loading speed.

# DONATIONS
Like my project ?   
Want to help in future development, and adding new features ?   
If you find this project useful...  
#### You can <a href="https://sites.google.com/site/dominikdonationbutton/">SUPPORT ME BY PAYPAL</a>
I created PayPal Donation Button as Google Site because here not all HTML tags are allowed and Donation Button HTML can't be put here...  
Every dollar will be appreciated and help me in future development of my projects. 

