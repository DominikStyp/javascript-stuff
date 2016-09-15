# JavaScript Simple MVC Framework
This is example script of how to easily make **Javascript MVC Framework** using ability to **change URL in browser without reloading page**.<br />
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
        function ProductsController(){
                   var OBJ = this;
                   var model = new ProductsModel();                   
                   /**
                    * Display single product
                    * @returns {undefined}
                  */
                   OBJ.product = function(url){
                      var tmp = url.split("/");
                      // retrieve id from URL
                      var productId = tmp[tmp.length-1];
                      var product = model.getProductById(productId);
                      var html = "<h1>Product</h1>";
                      html +=     "<p><b>" +  product.name + "</b><br />" +
                                  "Cost: <span style=\"color:red\">" + product.cost +  " $</span><br />" + 
                                  " Produced by: " + product.company +
                                  "</p><br/>" + 
                                  "<a href=\"/products\" title=\"Product\">Back to products list</a><br />" + 
                                  "<a href=\"/main\" title=\"Main page\">Back to main page</a>";
                      $("#main").html(html);  
                   };
                   
                   /**
                    * Display list of products
                    * @returns {Array}
                    */
                   OBJ.products = function(){
                      var html = "<h1>Products List</h1>";
                      var products = model.getProducts();
                      html += "<ul>";
                      for(var index in products){
                          var p = products[index];
                          html += "<li><a href=\"/product/"+ p.id +"\" title=\"Product\">"+ p.name +"</a></li>";
                      }
                      html += "</ul>";
                      html += "<a href=\"/main\" title=\"Main page\">Back to main page</a>";
                      $("#main").html(html); 
                   };
        } 
};
```
Example model: <br />

```javascript
    /**
     * Products Model
     * @returns {Object}
     */
    function ProductsModel() {
        var OBJ = this;
        OBJ.getProducts = function(){
            return [
               { id: 33, name: "Laptop", cost: 1000, company: "Lenovo" },
               { id: 10, name: "Fridge", cost: 300, company: "Siemenz" },
               { id: 122, name: "Monitor", cost: 100, company: "Samsung" }
            ];
        };
        /**
         * 
         * @returns {Object}
         */
       OBJ.getProductById = function(id){
           var products = OBJ.getProducts();
           for(var index in products){
               var p = products[index];
               if(parseInt(p.id) === parseInt(id)){
                   return p;
               }
           }
       };
    }
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
                   OBJ.routes = {
                       "/main": { controller: "Main", method: "main" },
                       "/about": { controller: "Main", method: "about" },
                       "/contact": { controller: "Main", method: "contact" },
                       "/products": { controller: "Products", method: "products" },
                       "/product/(\\d+)": { controller: "Products", method: "product" }
                   };
                   OBJ.invokeControllerMethod = function(goToUrl, data){
                      var r = OBJ.routes;
                      for(url in r){
                          if(goToUrl.match(new RegExp(url))){
                              var controller =  r[url].controller + OBJ.controllerPostfix ;
                              var method = r[url].method;
                              // reflection
                              try {
                                var contrInstance = eval("new " + controller + "()");
                                contrInstance[method](goToUrl, data);
                              }
                              catch(e){
                                  console.log(e);
                              }
                              return;
                          }
                      }
                   };
                   OBJ.goTo = function(url, title, data){
                        urlChanger.goTo(url, title);
                        OBJ.invokeControllerMethod(url, data);
                   }; 
               }
```
Se how the whole script: [javascriptSimpleMVC.html](javascriptSimpleMVC.html) <br />
## Summary
This technology is used by the big portals like **Facebook**, to decrease the servers load. <br />
It can be very useful on pages like **image galleries**, **list of products from category** etc. <br />
All you have to do is load all the products/images/users... at once and just change the page via JavaScript. <br />
Additionaly you can load the data via **Ajax Request** (like Facebook does).


