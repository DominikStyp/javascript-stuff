/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

class Dominik {
    log(what) { 
        console.log("Log: " + what);
    }
    static logStatic(what){
        console.log("Static log: " + what);
    }
}

module.exports = Dominik;
