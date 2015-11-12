// https://carldanley.com/js-factory-pattern/
// for Abstract Factor see below : 
//http://robdodson.me/javascript-design-patterns-factory/

/*
1. Factory pattern
2. Factory METHOD Pattern.   [ a single method overridden by subclasses ] e.g. createCar method can be implemented differently by different Companies. 
3. Abstract Factory pattern.
  Adds another layer over factory and return you an factory instead which you would   call to create the object. 

*/

var smallCar = function(options){
    this.color = options.color || "Gray";
    this.size = "small";
    this.printCar = function() {
        console.log('Car size = ', this.size , ' Color = ' , this.color);   
    }
}

var suvCar = function(options){
    this.color = options.color || "Black";
    this.size = "large";
    this.printCar = function() {
        console.log('Car size = ', this.size , ' Color = ' , this.color);   
    }
}

function CarFactory() {} 


CarFactory.prototype.createCar = function(options) {
    
        var carType = null; 

        if(options.type == 'small') {
            carType =  smallCar;
        } else
        if(options.type == "suv") {
            carType =  suvCar;
        } else {
            return false; 
        }
    
        return new carType(options); 
    
}

    var factory = new CarFactory(); 

    // Creation of Small Car.
    var smallCarOptions = { type : 'small' } ;
    var myCar = factory.createCar(smallCarOptions);
    myCar.printCar(); 
    console.log(myCar instanceof smallCar); 

    // Creation of Large Car . 
    var suvOptions = { type : 'suv' } ;
    var suv = factory.createCar(suvOptions);
    suv.printCar(); 
    console.log(suv instanceof smallCar); 

    
    
    
    