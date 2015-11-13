// Adapter Design Pattern. 
// The adapter takes the new object that we’re going to use and either wraps it, or just mediates to it, depending on how the object is used, to match it to the interface established by the old object. In the case of an object that always get instantiated with the new operator, the adapter will wrap it by containing an instance of the object within itself and passing function calls on to it. If the object is “static” in the sense that there is only one instance of it, then it will not be wrapped.

/*
http://www.joezimjs.com/javascript/javascript-design-patterns-adapter/
For Example, suppose you are using a logging library and then your are trying to decide other library so rather then changing the code across all places, we can us adapter pattern. 
*/
var LoggerFactory = { 
    getLogger : function() { return console; }    
    
}

// Actual Code that we are using. 
   var logger = LoggerFactory.getLogger();
    logger.log("HEllo"); 


// Now if we change and bring a new logger , for e.g. BUNYAN , WINSTON or ASYNC logger

var asyncLogger = { 
    logText : function(obj) {
        console.log("ASYNC LOGGING  : -> " , obj);   
    }
};
    
var asyncLoggerAdapter = {
    
    log : function(text) {
            asyncLogger.logText(text);
        }
};

LoggerFactory = {
    getLogger : function() { return asyncLoggerAdapter ; } 
}

// Our code to get the Logger and log something will not change. 
    logger = LoggerFactory.getLogger();
    logger.log(" PANKAJ BHATT "); 
    
    
    
    