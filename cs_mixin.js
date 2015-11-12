// This is MIXIN Pattern
// here we define the common functionality in an top level mixin and through inheritance we deduce the functionality in lower level classes. i.e. via prottype inhiertance or via multiple inheritance in other languages. 

function Mixin() {} 

Mixin.prototype = {
    
    "start" : function() {
        console.log("Car is started");   
    },
    "run" : function() {
        console.log("Car is running");   
    },
    "stop" : function() {
        console.log("Car is stopped");   
    }
};

function Car(name,size) {
    this.name = name;
    this.size = size ;
}

function augment(receivingClass, givingClass) {
    
    for(var methodName in  givingClass.prototype )
          receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    
}

    augment(Car,Mixin); 

    var car = new Car("Ford","SUV"); 

    car.start();
    car.run();
    car.stop(); 


        
    
    
    
