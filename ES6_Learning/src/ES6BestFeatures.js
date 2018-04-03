
const ES6BestFeatures_IMMUTABLE = 2;


export default class ES6BestFeatures{
    /**
     *  MOST IMPORANT FEATURES
     */
    propertyShorthand(){
        let x = 10, y = 20, z = 30;
        let obj = {x, y, z}; // obj = {x: x, y: y, z: z}
        console.log(`${obj.z} is 30`);
    }

    defaultMethodParameters(x, y = 1, z = 2){
        console.log(`${x}, ${y}, ${z}`);
    }

    defaultObjectPropertiesViaObjectAssign(){
        let someFunction = function(options){
            let defaultOptions = {
                x: 2,
                y: 2,
                z: 2
            };
            let {x,y,z} = Object.assign(defaultOptions, options);
            console.log(`x=${x}, y=${y}, z=${z}`);
        };
        someFunction({x:3}); //x=3, y=2, z=2
    }

    // var-args operator from Java (and PHP) in ES6 is available by name of "REST"
    restParameter(x, y, ...z){
        // invoke: restParameter("test", "of", "some", "words", "passed");
        // should give you: 'Output: test, of, some, words, passed'
        console.log(`Output: ${x}, ${y}, ${z.join(", ")}`);
    }
    // it's the opposite of REST
    spreadOperator(){
        let arr = ["some", "words", "haven't", "been", "spoken", "yet"];
        // following is the equivalent of:
        // this.restParameter("some", "words", "haven't", "been", "spoken", "yet");
        this.restParameter(...arr);
    }

    arrowFunctions(){
        let nums = [0,1,2,3,4];
        let powerOf2 = nums.map(value => Math.pow(2, value));
        console.log(`${powerOf2[0]} equals 1`); // 2 ^ 0 = 1
    }
    destructuringAssignmentArrayMatching(){
        let arr = [1,2,3,4,5];
        let [a,b,c,,d] = arr; // like list() in php
        console.log(`${d} is 5`);
    }

    destructuringAssignmentObjectMatching(){
        let obj1 = { a: 1, b: 2, c: 3 };
        let { a, b, c } = obj1;
        console.log(`${c} is 3`);
    }

    destructuringAssignmentParameterContextMatching(){
        let printUser1 = function({ name, email }){
            console.log(`1) User ${name} has email ${email}`);
        };
        let printUser2 = function({ name: n, email: e}){
            console.log(`2) User ${n} has email ${e}`);
        };
        let user = {name: "Paul", email: "paul@gmail.com"};
        printUser1(user);
        printUser2(user);
    }

    swappingVariables(){
        let a = 1, b = 2;
        // The Old Way
        let temp = a, a = b, b = temp;
        // The New Way
        [b, a] = [a, b];
    }

    /**
     *
     */

    destructuringAssignmentObjectDeepMatching(){
        let obj1 = { axe: 11, big: { veryBig: 44}, car: 33 };
        // variables assignment goes the same way as values assignment in obj1
        let { axe: c, big: { veryBig: a }, car: b } = obj1;
        console.log(`${a} is 44`);
        console.log(`${b} is 33`);
        console.log(`${c} is 11`);
    }

    destructuringAssignmentDefaultValues1(){
        let obj1 = { a: 1, b: 2, c: 3 };
        // variables assignment goes the same way as values assignment in obj1
        // a = -1 means that if a is not defined it gets default value -1
        let { a = -1, b = -1, d = -1 } = obj1;
        console.log(`${a} is 1`);
        console.log(`${d} is -1`);
    }

    destructuringAssignmentDefaultValues2(){
        let obj1 = { axe: 11, big: { veryBig: 44}, car: 33 };
        // variables assignment goes the same way as values assignment in obj1
        let { axe: c, big: { veryBig: a = -1, verySmall: d = -1 }, car: b } = obj1;
        console.log(`${a} is 44`); // because obj1 has big.veryBig defined it's 44
        console.log(`${d} is -1`); // because obj1 hasn't big.verySmall defined it's -1
    }

    findInArray(){
        let valuesBiggerThan3 = [ 1, 3, 4, 2 ].find(x => x > 3);
        let indexOfValueBiggerThan3 = [ 1, 3, 4, 2 ].findIndex(x => x > 3);
        let filtered = [ 1, 3, 4, 5, 2 ].filter(x => x > 3);
        console.log(valuesBiggerThan3); // 4
        console.log(indexOfValueBiggerThan3); // 2
        console.log(filtered); // [4,5]
    }

    findInString(){
        "hello".startsWith("ello", 1); // true
        "hello".endsWith("hell", 4);   // true
        "hello".includes("ell");       // true
        "hello".includes("ell", 1);    // true
        "hello".includes("ell", 2);    // false
    }


    objectPropertiesAssignment(){
        let dest = { quux: 0 };
        let src1 = { foo: 1, bar: 2 };
        let src2 = { foo: 3, baz: 4 };
        Object.assign(dest, src1, src2);
        let isTrue1 = dest.quux === 0;
        let isTrue2 = dest.foo  === 3;
        let isTrue3 = dest.bar  === 2;
        let isTrue4 = dest.baz  === 4;
        console.log(isTrue1, isTrue2, isTrue3, isTrue4);
    }



    // immutable class constant must be used with help of global constant
    static get IMMUTABLE() {
        return ES6BestFeatures_IMMUTABLE;
    }
    testImmutable(){
        ES6BestFeatures.IMMUTABLE = 10;
        console.log(ES6BestFeatures.IMMUTABLE); //it's still 2, you cant change const value
    }



    //////////////////////  MAPS & SETS (Java-like objects) /////////////////
    setExample(){
        let s = new Set();
        s.add("Mark").add("John").add("Mike").add("Mark").add("Ann");
        s.has("Mark"); //true
        s.delete("John");
        // "Mark" is added only ONCE
        console.log(`Set size is: ${s.size}`); // Set size is 3
        s.clear(); //clears all values
    }

    mapExample(){
        let testMap = new Map();
        testMap.set("One", 1);
        testMap.set("Two", 2);
        testMap.set("Three", 3);
        // WARNING: You can't use Symbol() as map key in this case
        // Symbols do not show up on an Object using "for in", "for of" or "Object.getOwnPropertyNames"
        for (let [ key, val ] of testMap){
            console.log(`testMap: ${key} = ${val}`);
        }
    }



    //////////////////////// FORMATTING //////////////////////////////////////

    numberFormatting(){
        let l10nEN = new Intl.NumberFormat("en-US");
        let l10nDE = new Intl.NumberFormat("de-DE");
        let isTrue1 = l10nEN.format(1234567.89) === "1,234,567.89";
        let isTrue2 = l10nDE.format(1234567.89) === "1.234.567,89";
        console.log(isTrue1, isTrue2);
    }

    dateTimeFormatting(){
        let l10nEN = new Intl.DateTimeFormat("en-US");
        let l10nDE = new Intl.DateTimeFormat("de-DE");
        let isTrue1 =  l10nEN.format(new Date("2015-01-02")) === "1/2/2015";
        let isTrue2 = l10nDE.format(new Date("2015-01-02")) === "2.1.2015";
        console.log(isTrue1, isTrue2);
    }

    currencyFormatting(){
        let l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
        let l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });
        let l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
        let isTrue1 = l10nUSD.format(100200300.40) === "$100,200,300.40";
        let isTrue2 = l10nGBP.format(100200300.40) === "£100,200,300.40";
        let isTrue3 = l10nEUR.format(100200300.40) === "100.200.300,40 €";
        console.log(isTrue1, isTrue2, isTrue3);
    }

    usingProtoPropertyOfObjectLiteral(){
        let Shape = {
            getArea() {
                return this.x * this.y
            }
        };

        let Rectangle = {
            x: 10,
            y: 20,
            __proto__: Shape
        };
        console.log(Rectangle.getArea()); //200
    }

    /////////////////////////// PROMISES /////////////////////////////////////

    promisesWithAjaxRequests(){
            let urls = [
                '/api/commits',
                '/api/issues/opened',
                '/api/issues/assigned',
                '/api/issues/completed',
                '/api/issues/comments',
                '/api/pullrequests'
            ];

            // makes an array with promises
            let promises = urls.map((url) => {
                return new Promise((resolve, reject) => {
                    $.ajax({ url: url })
                        .done((data) => {
                            resolve(data);
                        });
                });
            });
            // when all promises will be resolved (by parallel call), then callback will be invoked
            Promise.all(promises)
                .then((results) => {
                    // Do something with results of all our promises
                });
    }

}


class TestProps {
    set test(val){
        this._test = val;
        console.log(`You've set 'test' property to ${val}`);
    }
    get test(){
        console.log(`You're getting this.test, which is ${this._test}`);
        return this._test;
    }
}

function exampleTestProps() {
    let obj = new TestProps();
    obj.test = 10; //You've set 'test' property to 10
    obj.test === 10; //You're getting this.test, which is 10
}
