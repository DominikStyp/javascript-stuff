import Lion from './Lion';
import Animal from './Animal';
import StringExamples from './StringExamples';
import Generators from './Generators';

var animal1 = new Animal();
var lion1 = new Lion();
lion1.shout();

StringExamples.example();

var iterator = Generators.range(5,10);
for(let i of iterator){
    console.log("Iterator value: " + i);
}