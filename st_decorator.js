// Decorators as easy in javascript as compared to Java as Java is a static language while javascript is interpreted. 

function Item(name,price){
    
    this.name = name; 
    this.price = price; 
    
}


Item.prototype.decorators = [] ; 

// Decorate Functions
function addFederalTax(saleItem){
    this.price += 10 ; 
}

function addStateTax(){
    this.price += 20 ; 
}

// Decorate Functions
Item.prototype.decorators.push(addFederalTax);
Item.prototype.decorators.push(addStateTax); 

Item.prototype.getPrice = function() {
    
                    
            for(var i = 0 ;i< this.decorators.length ;i++) {
                this.decorators[i].call(this);
            }
    return this.price; 
}; 


// Now Create the ITEM
var item = new Item("Maggi", 20.5);

console.log(item.getPrice());
