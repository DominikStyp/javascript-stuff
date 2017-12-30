var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Lion = function () {
    function Lion() {
        classCallCheck(this, Lion);
    }

    createClass(Lion, [{
        key: "shout",
        value: function shout() {
            console.log("I'm lion");
        }
    }]);
    return Lion;
}();

var Animal = function () {
    function Animal() {
        classCallCheck(this, Animal);
    }

    createClass(Animal, [{
        key: "shout",
        value: function shout(text) {
            window.alert(text);
        }
    }]);
    return Animal;
}();

var StringExamples = function () {
    function StringExamples() {
        classCallCheck(this, StringExamples);
    }

    createClass(StringExamples, null, [{
        key: "example",
        value: function example() {
            if ("Starcraft".startsWith("Sta")) {
                console.log("OK 1");
            }
            if ("Starcraft".endsWith("aft")) {
                console.log("OK 2");
            }
            if ("Starcraft".includes("tar")) {
                console.log("OK 3");
            }
        }
    }]);
    return StringExamples;
}();

var Generators = function () {
    function Generators() {
        classCallCheck(this, Generators);
    }

    createClass(Generators, null, [{
        key: "range",

        /**
         *   "*" before name means it's a generator
         *   static means it's a static function, so can be used without Generators instance
         * 
         * @param {type} start
         * @param {type} end
         * @returns {Generator} 
         */
        value: /*#__PURE__*/regeneratorRuntime.mark(function range(start, end) {
            return regeneratorRuntime.wrap(function range$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(start < end)) {
                                _context.next = 7;
                                break;
                            }

                            _context.next = 3;
                            return start;

                        case 3:
                            start++;
                            console.log("Hello from *range() method, start is: " + start);
                            _context.next = 0;
                            break;

                        case 7:
                        case "end":
                            return _context.stop();
                    }
                }
            }, range, this);
        })
    }]);
    return Generators;
}();

var animal1 = new Animal();
var lion1 = new Lion();
lion1.shout();

StringExamples.example();

var iterator = Generators.range(5, 10);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log("Iterator value: " + i);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
