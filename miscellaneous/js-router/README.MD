# JavaScript Router
This is example script of how to **change URL in browser without reloading it**.<br />
First we have a class which changes URL in the browser, and can go back and forth in browser history. <br />
```javascript
function DynamicUrlChanger(){
                     var OBJ = this;
                     OBJ.goTo = function(url, title){
                        window.history.pushState(title, title, url); 
                     };
                     OBJ.goBack = function(){
                         window.history.back();
                     };
                     OBJ.goForward = function(){
                         window.history.forward();
                     };
}
```
Example **Controller**, which defines methods for each route defined in the **PageRouter**.<br />
```javascript
function MainController(){
                   var OBJ = this;
                   OBJ.about = function(){
                      $("#main").html("<h1>About page</h1");  
                   };
                   OBJ.contact = function(){
                      $("#main").html("<h1>Contact page</h1"); 
                   };
};
```

Here we have our **JavascriptRouter** which instantiates the **Controller**, invoke it's method,<br />
and changes URL in the browser via **DynamicUrlChanger**. <br />
```javascript
/**
* Class which invokes specific controller's method,
* and changes the url in the browser
* @returns {undefined}
*/
function PageRouter(){
        var OBJ = this;
        var urlChanger = new DynamicUrlChanger();
        OBJ.controllerPostfix = "Controller";
        // routes for the url's
        OBJ.routes = {
            "about": { controller: "Main", method: "about" },
            "contact": { controller: "Main", method: "contact" }
        };
        OBJ.invokeControllerMethod = function(goToUrl){
           var r = OBJ.routes;
           for(url in r){
               if(url === goToUrl){
                   var controller =  r[url].controller + OBJ.controllerPostfix ;
                   var method = r[url].method;
                   // reflection
                   try {
                     //instantiating controller via reflection
                     var contrInstance = eval("new " + controller + "()");
                     contrInstance[method]();
                   }
                   catch(e){
                       console.log(e);
                   }
               }
           }
        };
        OBJ.goTo = function(url, title){
             urlChanger.goTo(url, title);
             OBJ.invokeControllerMethod(url);
        }; 
}
```
Se how the whole script: [javascriptRouter.html](javascriptRouter.html)
