export default class AbstractConsoleLogger {
    constructor() {
        if (new.target === AbstractConsoleLogger) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        //abstract method implementation check
        //check if instance method is implemented in child class
        if(AbstractConsoleLogger.prototype.mustBeImplemented === undefined){
            throw new TypeError("Unimplemented mustBeImplemented() method");
        }
    }

}
