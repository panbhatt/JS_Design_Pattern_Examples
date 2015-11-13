// Builder Pattern. 
//  The intention is to abstract steps of construction of objects so that different implementations of these steps can construct different representations of objects.

// A factory is simply a wrapper function around the constructor. The principle difference is that a factory method pattern require the entire object to be built in a single call, will all the parameters pass in on a single line. Then final object will be return.

// A builder pattern, whereas is a wrapper object around all the possible parameters you might want to pass to a constructor. This allows you to use setter method to build your own parameter list. So generally it involves calling a number of SET functions and then get the final object. The Builder is only needed when an object cannot be produced in one step.The Builder pattern abstracts the algorithm for construction by including the concept of a director. The director is responsible for itemizing the steps and calls on builders to fulfill them.

// so we have two things here, Directors and Builder. 

function FastCPU() {
    this.performOperation = function() {
        console.log("Operation will perform quickly");
    }
}
function SlowCPU() {
    this.performOperation = function() {
        console.log("Operation will perform slowly");
    }
}

function ExpensiveMotherBoard() {
    this.storeData = function() {
        console.log("There is a lot of RAM to store the data");
    }
}
  
function CheapMotherBoard() {
    this.storeData = function() {
        console.log("Little RAM. Swap file is used");
    }
}


// Builders.
function HighBudgetMachineBuilder() {
    this.getCPU = function() { return new FastCPU(); }
    this.getMotherBoard = function() {
     return new ExpensiveMotherBoard();
    }
}
  
function LowBudgetMachineBuilder() {
    this.getCPU = function() { return new SlowCPU(); }
    this.getMotherBoard = function() {
     return new CheapMotherBoard();
    }
}


// Director
function Director() {
    this.assembleMachine = function(builder) {
        var cpu = builder.getCPU(), 
        board = builder.getMotherBoard();
        return {
            cpu: cpu,
            board: board,
            test: function test() {
                this.cpu.performOperation();
                this.board.storeData();
            }
        }
    }
}

// Finally Create the object from Directors help. 
var director = new Director(),
    highBuilder = new HighBudgetMachineBuilder(),
    lowBuilder = new LowBudgetMachineBuilder();

var    highMachine = director.assembleMachine(highBuilder);
var    lowMachine = director.assembleMachine(lowBuilder);
highMachine.test();
lowMachine.test();



