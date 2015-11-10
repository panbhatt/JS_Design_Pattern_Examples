// Prototype pattern.

// 1. This can be easily achieved by Object.create(baseObj, { "id" : { value : 5, enumerable : false }});

// Base Prototype.
var vehiclePrototype = {
    
    
    init : function(vehicleName) {
        this._name = vehicleName; 
    },
    
    getName : function() {
        console.log("Vehicle Model Name " , this._name);   
    }
};

// This is the main function which will acts a derived class. 
function vehicle(){
 
    function F()  {};
    
    // Presence of this lineis important. 
    F.prototype = vehiclePrototype ;
    var foo = new F(); 
    foo.age = 45;
    foo.toString = function() { console.log("Age = " , this.age); } ;
    
    return foo;

}


var firstVehicle =  vehicle();
console.log(JSON.stringify(firstVehicle));
    firstVehicle._name = "ABCD";
    firstVehicle.getName();
    firstVehicle.toString();






