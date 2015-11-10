// Creation of Mediator.
var Mediator = function(name) {
    
    this._name = name; 
    this._topics = {} ; 
    
    this.subscribe = function(topic,callback){
        
        if(!this._topics.hasOwnProperty(topic)) {
             this._topics[topic] = []; 
           }
           this._topics[topic].push(callback);    
    };
    
    this.publish = function(topic,message){
        
            if(this._topics.hasOwnProperty(topic)){
                var subscribers =    this._topics[topic];
                for(i=0;i<subscribers.length ;i++) {
                    var subscriber = subscribers[i];
                    var args = [] ; 
                    args.push(message);
                    subscriber.apply(undefined,args);
                    
                }
                
                
            }
    }
    this.unsubscribe = function(topic,callback) {      
        if(this._topics.hasOwnProperty(topic)){
             var subscribers =    this._topics[topic];
                for(i=0;i<subscribers.length ;i++) {
                    if(subscribers[i] === callback);
                        subscribers.splice(i,1);
                }
            
        }
        
    };

};

// Sample Subscriber
var sampleSubscriber = function(message){
    console.log("Subscriber Message Recceived = " , message);   
}
var sampleSubscriber2 = function(message){
    console.log("Subscriber2 Message Recceived = " , message);   
}
var mediator = new Mediator('First');


mediator.subscribe('topic',sampleSubscriber);
mediator.subscribe('topic',sampleSubscriber2);

console.log("Publishing First Message. Reaching two subscribers ");
mediator.publish('topic',"First Message");


mediator.unsubscribe('topic',sampleSubscriber);
console.log("Removing First SampleSubscriber");
mediator.publish('topic',"Last Message");
