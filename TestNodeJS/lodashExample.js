// -------- lodash 
/**
 * 
 * @type lodash
 */
var _ = require('lodash');
let myArr = [1,3,4,5,8,10,2,11,13];
let filtered = _.filter(myArr, function(el){
    return el % 2 === 0;
});
let filtered1 = _.filter(myArr, function (el) {
    return el % 2 === 1;
});
console.log(filtered, filtered1);