/*
The best example of facade pattern is JQUERY implementation of $(document).ready
because it provides a common API doesn't matter whether you are running the code
over CHROME or IE.

it does it via bindReady() methods internally. 

    bindReady: function() {

                if ( document.addEventListener ) {
                    // Use the handy event callback
                    document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                    // A fallback to window.onload, that will always work
                    window.addEventListener( "load", jQuery.ready, false );
                // If IE event model is used
                } else if ( document.attachEvent ) {
                    document.attachEvent( "onreadystatechange", DOMContentLoaded );
                    // A fallback to window.onload, that will always work
                    window.attachEvent( "onload", jQuery.ready );
                }
                
*/


// Here are facading the way our program send the signals when running on different systems.
var os = require('os');
var sendSignal = function() {
 
        var platform = os.platform();
        console.log("Platform = " , platform);
        if(platform == 'linux') {
            
            console.log("EXECUTING LINUX CODE :: Sending Signals"); 
            
        } else  
         if(platform == 'win32'){
            
            console.log("EXECUTING WINDOWS CODE :: Sending Signals"); 
        }
            
            
};


   sendSignal();
    