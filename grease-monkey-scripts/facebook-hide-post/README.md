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
- Copy **facebook-hide-post.js** contents and paste it into opened editor window <br>
  (remember that *@name facebook* must be the same as it is in the name field)
- Troubleshooting and further information here: <br>
  (http://wiki.greasespot.net/Main_Page)
 
# How to use?
Go to your facebook group site and see if you have following links in the left top corner of every post:<br>
 **HIDE POST** - if clicked it hides post on the site, and remebers it in a cookie, so if you reload site, hidden posts should still be hidden.<br>
 **CLEAR HIDDEN** - if clicked it clears all the hidden posts, and reloads the site, so that you'll see them again
  
# Requirements
- Firefox
- Grease Monkey addon
- Enabled Cookies in browser (they are enabled by default)

# Limits
Maximum amount of hidden posts on a single group is 230 for now. <br>
That's because of the cookie size in your browser (4 kb is maximum cookie size).
If you need more please post an issue on GitHub.

