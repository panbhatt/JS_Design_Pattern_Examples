// Brdige Design Pattern. 
// The Bridge pattern should “decouple an abstraction from its implementation so that the two can vary independently.” Bridges are quite beneficial in event-driven applications,

/*
http://www.joezimjs.com/javascript/javascript-design-patterns-bridge/
*/

    
   // BAD CODE, as this code can only be used only at a single place.
getXById = function() {
    var id = this.id;
     
    $.ajax({
        url:'/getx?id=' + id,
        success: function(response) {
            console.log(response);
        }
    });
}
 
$('someElement').bind('click', getXById);



// Correct Code , now getXById can also be used somewhere else. 
 getXById = function(id, callback) {
    $.ajax({
        url:'/getx?id=' + id,
        success: callback
    }
}
 
getXBridge = function() {
    var id = this.id;
    getXById(this.id, function() {
        console.log(response);
    });
}
 
$('someElement').bind('click', getXBridge);