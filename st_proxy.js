// PROXY Design Pattern. 
/*
 The word “proxy” can be defined as a substitute, and that essentially explains what a proxy is. A proxy is an object that has the same interface as another object and is used in place of that other object.
 The proxy can come in handy: delaying instantiation of a large object, accessing a remote object, and access control.
 */

var Utility = function() { 
    
     this.getRemoteHeavyObject = function() { console.log( "RemoteObject"); } ;
     this.getHeavyComputerObject = function() { console.log("ComputedObject") ; } ;
    
};

var UtilityProxy = (function() {
    var _utility ;
    return {
    
        _init : function () {
                    console.log("Initialzing the object", _utility); 
                        if( _utility === undefined)    {
                            _utility = new Utility();  
                            console.log("INITIALIZED");
                            
                       } else { console.log("COMING IN ELSE"); }
                },
         getRemoteHeavyObject : function() { 
            this._init();
            _utility.getRemoteHeavyObject();
        } ,
     getHeavyComputerObject : function() { 
         this._init();
         _utility.getHeavyComputerObject();
      }          
    };

})();

UtilityProxy.getRemoteHeavyObject();

