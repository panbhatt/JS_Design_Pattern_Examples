// This is important so that no one can instantiate it with new.
var Singleton = ( function() {
        
        var instantiated; 
    
    // Used to create the Object, once. 
        function init() {
            
         return {
            toString : function() { console.log("toString() called"); },
            findMe : function() { console.log("findMe is called"); },
            name : "Pankaj"
         }
            
        }
                 
        return {
                 
            getInstance : function () {
                            if(!instantiated) {
                                    instantiated = init();
                            }
                                                            
                             return instantiated;        
    
    
                        }
                 
                 }
        
    }
    )();

    var instance1 = Singleton.getInstance();    
    var instance2 = Singleton.getInstance(); 

    if(instance1 === instance2 )
        console.log("Single Instance");
    else    
        console.log("Diff Instance");