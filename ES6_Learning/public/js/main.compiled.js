var Lion = function Lion () {};

Lion.prototype.shout = function shout (){
    console.log("I'm lion");
};

var StringExamples = function StringExamples () {};

StringExamples.example = function example (){
    if("Starcraft".startsWith("Sta")){
        console.log("OK 1");
    }
    if("Starcraft".endsWith("aft")){
        console.log("OK 2");
    }
    if("Starcraft".includes("tar")){
        console.log("OK 3");
    }
};

var Generators = function Generators () {};

Generators.range = function* range (start, end){
    while(start < end){
        yield start;
        start++;
        console.log("Hello from *range() method, start is: " + start);
    }
};

var lion1 = new Lion();
lion1.shout();

StringExamples.example();

var iterator = Generators.range(5,10);
for(var i of iterator){
    console.log("Iterator value: " + i);
}
