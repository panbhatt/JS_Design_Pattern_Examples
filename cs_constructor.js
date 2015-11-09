

function Employee(name,age) {
    this.name = name; 
    this.age = age; 
    
    this.toString = function() {
        return "Employee --> "  + this.name + " Age : " + this.age;  
    }
}

// Making a function available on the so called Class

Employee.prototype.isAdult = function() {
    if(this.age > 18 ) 
        return true; 
    else 
        return false; 
}

   
    var emp1 = new Employee('Pankaj Bhatt',23);
    var emp2 = new Employee('John',13);

    console.log(emp1.toString());
    console.log(emp1.name + " is Adult = " + emp1.isAdult());

    console.log(emp2.toString());
    console.log(emp2.name + " is Adult = " + emp2.isAdult());

    