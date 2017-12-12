"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

    function templateStrings() {
        var b = 'b';
        return "a" + b + "c";
    };

    function blockVariables() {
        if (1 > 0) {
            var _x = 10; // variable visible inside this block
        } else {
            var _x2 = 20;
        }
        alert(x); //Uncaught ReferenceError: x is not defined      
    }

    // old way
    function scopeVariables() {
        if (1 > 0) {
            var x = 10; // variable visible inside this block
        } else {
            var x = 20;
        }
        alert(x); //OK! alerts 10, because x is implicitly initialized at the beginning of function
    }

    function constantValues() {
        var x = 10;
        // x = 20; // Uncaught TypeError: Assignment to constant variable.
    }

    function returningOfKeyValuePairs() {
        var x = 10;
        var y = 20;
        var obj = { x: x, y: y };
        alert(obj.y); //alerts 20 because {x, y} is equal to { x: x, y: y } in ES6
    }

    function objectDestructurizing() {
        var obj = {
            name: "object name",
            value: "some value",
            description: "some description"
        };
        var value = obj.value,
            description = obj.description;

        alert(description); // alerts "some description"
    }

    function objectDestructurizingAsFunctionArgument() {
        var obj = {
            name: "object name",
            value: "some value",
            description: "some description"
        };
        var func = function func(_ref) {
            var name = _ref.name,
                description = _ref.description;

            alert("object name: " + name + ", and description: " + description);
        };
        func(obj); // alerts "object name: object name, and description: some description"
    }

    function shortHandCallback() {
        var x = [1, 2, 3];
        var tmp = 0;
        x.forEach(function (el) {
            return tmp += el;
        });
        alert(tmp); // alerts 6
    }

    /**
     * Rest operator which looks exactly like the spread syntax, and is used for destructuring arrays and objects
     * it's the same as using "arguments" object inside function.
     * 
     * @param {type} someArgs
     * @returns {undefined}
     */
    function restOperator() {
        for (var _len = arguments.length, someArgs = Array(_len), _key = 0; _key < _len; _key++) {
            someArgs[_key] = arguments[_key];
        }

        someArgs.forEach(function (a) {
            return alert(a);
        }); // varArgsParameter(1,2) : alerts 1, and 2
    }

    /**
     * Spread operator 
     * 
     * @returns {undefined}
     */
    function restOperator() {
        var arr = ["object name", "some description"];
        // WARNING! We do not have destructurized parameters here as in objectDestructurizingAsFunctionArgument() function
        var func = function func(name, description) {
            alert("object name: " + name + ", and description: " + description);
        };
        // if we want to pass arguments without listing them...
        func.apply(undefined, arr);
    }

    function anonymousClasses() {
        var func = function func(someObj) {
            someObj.someMethod();
        };
        func(new (function () {
            function _class() {
                _classCallCheck(this, _class);
            }

            _createClass(_class, [{
                key: "someMethod",
                value: function someMethod() {
                    alert("Hi from someMethod!");
                }
            }]);

            return _class;
        }())());
    }
})();