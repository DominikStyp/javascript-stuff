class Generators {
    /**
     *   "*" before name means it's a generator
     *   static means it's a static function, so can be used without Generators instance
     * 
     * @param {type} start
     * @param {type} end
     * @returns {Generator} 
     */
    static *range(start, end){
        while(start < end){
            // after first iteration it stops on "yield start"
            // but with next iteration it starts from "++start;", and then stops on "yield start;"
            // that is the difference between return and yield
            yield start;
            start++;
            console.log("Hello from *range() method, start is: " + start);
        }
    }
}

export default Generators;
