var carManager =( function() {
    
        // Here you can have multiple managers. 
        var manager = {
            
            "help" : function() {
                console.log(" I M HELPING ");    
            },
            "support" : function() {
                console.log(" I M SUPPORTING ");   
            },
            "buyStuff" : function() {
                console.log(" I M GOING TO WALMART, to buy something");    
            }

        } ;
    
    
        return {
            // Here we can have multiple RULES that determine how n which Car Manager
            // we are going to call to execute the command. 
            "execute" : function(cmd, message) {
                    if(cmd == "help")
                        manager.help(message);
                    if(cmd == "support")
                        manager.support(message);
                    if(cmd == "buyStuff")
                        manager.buyStuff(message);       
            }
        };
    
})();
    
    
    carManager.execute("help", "HELP ME");
    carManager.execute("support", "I need support!!");
    
    