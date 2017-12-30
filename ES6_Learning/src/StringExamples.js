class StringExamples {
    static example(){
        if("Starcraft".startsWith("Sta")){
            console.log("OK 1");
        }
        if("Starcraft".endsWith("aft")){
            console.log("OK 2");
        }
        if("Starcraft".includes("tar")){
            console.log("OK 3");
        }
    }
}

export default StringExamples;