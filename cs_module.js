
var EmployeeUtil = (function() {
    
    var _calculateSalary = function () {
           console.log("Cacluate Salary is being called");
    }
   
    return {
        
        calcSal : function() {
            _calculateSalary()  ;
        }
    };
    
    
    
})();

 
 EmployeeUtil.calcSal();