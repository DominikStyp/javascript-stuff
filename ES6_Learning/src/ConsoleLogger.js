import AbstractConsoleLogger from "./AbstractConsoleLogger";

export default class ConsoleLogger extends AbstractConsoleLogger{

    constructor(){
        super();
    }
    mustBeImplemented(){
        return null;
    }
    static log(string){
        if(typeof console === "undefined"){
            throw "console object doesn't exist in this browser";
        }
        console.log(">>>>> " + string);
    }
}