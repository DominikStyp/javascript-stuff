var connect = require('connect');
var http = require('http');
var url = require('url');
var app = connect();
var x = 0;
/**
 * 
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 * @returns {undefined}
 */
function dominik(request, response){
    response.write("Hello! You are refreshing this page for the: " + (x++) + " time!");
    response.end();
}
/**
 * 
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 * @returns {undefined}
 */
function animal(request, response){
    var queryObj = url.parse(request.url, true).query;
    if(parseInt(queryObj.cat) === 1){
        response.write("meeeeeeeeeeeeooooooooooooow!");
    }
    else if(parseInt(queryObj.dog) === 1){
        response.write("bark bark bark!");
    }
    else {
        response.write("?????????");
    }
    response.end();
}

app.use('/dominik', dominik);
app.use('/animal', animal);

http.createServer(app).listen(8888);
console.log("Yupp, server is UPP...");
console.log("You can run it via: http://localhost:8888");