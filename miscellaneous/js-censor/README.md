# JS Censor

# What is this ?
This is a script that can censor text matching different variations of the same word. <br />
For example imagine that you have a system that can censor word **mutherfucker**, and it works perfectly <br />
until somebody doesn't type something like: <br />
**m_u_t_h_e_rFUCKER, M_U_T_H_E_R_F_U_C_K_E_R, M)UTH_ER_FU_CKER, MUTHER_FUCK_ER, MMMUUUTHERFUCKER**, <br />
or different variations of this word to bypass your censor. <br />
**With JS Censor IT WON'T BE SO EASY!**

# What it works ?
Script uses many different techniques to detect the real word under cover. <br />
One of them is using the <a href="http://en.wikipedia.org/wiki/Scale-invariant_feature_transform">SIFT</a> Algorithm. <br />
It also cleans text from the letter repeating, and other obfuscation techniques that can bypass standard filters.

# What you can setup ?
- SIFT Algorithm sensivity (0-100%)
- Your own words that you want to be checked
- Your own callback that is invoked during display each matched word
- Your own names and CSS classes for HTML elements

# How to use ?
Just <a href="http://dominikstyp.github.io/javascript-stuff/miscellaneous/js-censor/censor.html"> Try It! </a> and see for yourself.<br />
All you need is 2 files **censor.html** along with **censor.js**, no server, no database, no PHP nor any other server-side language is needed.<br />
It's pure JavaScript and HTML.

# Updates/Downloads
Every update will be added to the branch **gh-pages** because it's git's default branch for showing files as regular HTML pages.<br />
If you pull this repo make sure that **gh-pages** brach is set.

# Dependencies
**Following script IS NOT dependent on any library, nor external sources.**<br />
**It has ONLY ONE global function which is constructor censorJS.**<br />
**Everything else is contained in a closure, so it can't conflict with any library/script.**

# Additional Info
Script works the best with the long words, because shorter words can be confused with other words by SIFT, especially if you use lower sensivity. <br />
Recommended sensivity value is more than 80%, and words longer than 5 chars.<br />
Try to experiment with different values and words and see what settings will suit your needs.

# DONATIONS
Like my project ?   
Want to help in future development, and adding new features ?   
If you find this project useful...  
#### You can <a href="https://sites.google.com/site/dominikdonationbutton/">SUPPORT ME BY PAYPAL</a>
I created PayPal Donation Button as Google Site because here not all HTML tags are allowed and Donation Button HTML can't be put here...  
Every dollar will be appreciated and help me in future development of my projects. 