
(function(){
    
    function templateStrings(){
        let b = 'b';
        return `a${b}c`;
    };
    
    function blockVariables(){
        if(1>0){
            let x = 10; // variable visible inside this block
        } else {
            let x = 20;
        }
        alert(x); //Uncaught ReferenceError: x is not defined      
    }
    
    // old way
    function scopeVariables(){
        if(1>0){
            var x = 10; // variable visible inside this block
        } else {
            var  x = 20;
        }
        alert(x); //OK! alerts 10, because x is implicitly initialized at the beginning of function
    }
    
    function constantValues(){
        const x = 10;
        // x = 20; // Uncaught TypeError: Assignment to constant variable.
    }
    
    function returningOfKeyValuePairs(){
        let x = 10;
        let y = 20;
        let obj = { x, y };
        alert(obj.y); //alerts 20 because {x, y} is equal to { x: x, y: y } in ES6
    }
    
    function objectDestructurizing(){
        let obj = {
            name: "object name",
            value: "some value",
            description: "some description"
        };
        let { value, description } = obj;
        alert(description); // alerts "some description"
    }
    
    function objectDestructurizingAsFunctionArgument(){
        let obj = {
            name: "object name",
            value: "some value",
            description: "some description"
        };
        let func = function({name, description}){
            alert(`object name: ${name}, and description: ${description}`);
        };
        func(obj); // alerts "object name: object name, and description: some description"
    }
    
    
    function shortHandCallback(){
        let x = [1,2,3];
        let tmp = 0;
        x.forEach(el => tmp += el);
        alert(tmp); // alerts 6
    }
    
    /**
     * Rest operator which looks exactly like the spread syntax, and is used for destructuring arrays and objects
     * it's the same as using "arguments" object inside function.
     * 
     * @param {type} someArgs
     * @returns {undefined}
     */
    function restOperator(...someArgs){
        someArgs.forEach(a => alert(a)); // varArgsParameter(1,2) : alerts 1, and 2
    }
    
    /**
     * Spread operator 
     * 
     * @returns {undefined}
     */
    function restOperator(){
        let arr = ["object name", "some description"];
        // WARNING! We do not have destructurized parameters here as in objectDestructurizingAsFunctionArgument() function
        let func = function(name, description){
            alert(`object name: ${name}, and description: ${description}`);
        };
        // if we want to pass arguments without listing them...
        func(...arr);
    }
    
    
    function anonymousClasses(){
        let func = function(someObj){
            someObj.someMethod();
        };
        func(new class { 
            someMethod(){
                alert("Hi from someMethod!");
            }
        });
    }
    
    
})();
