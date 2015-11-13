//The flyweight design pattern aims to minimise the memory usage of a collection of items by promoting re-use and deferring initialisation.
// It is already used wher we are externalizing our configuration into a single object. 

// we also need to think of Intrinsic state and Extrinsic state.


// 1. Intrinsic State
function Book(name,price,id,isbn){
    this.name = name; 
    this.price = price;
    this.id = id ; 
    this.isbn = isbn; 
    
    
}


var Books = [] ; 
// Extrinsic State.

var BookManager = (function(booksDB) {
            return {
                
                addNewBook  : function(newBook) {
                        booksDB.push(newBook);  
                },
                reserveBook : function(user, bookId) {
                    var dbBook = booksDB[0];
                    console.log(dbBook.name , " is reserved by " , user);    
                }
                
            }
    
    
          }
      )(Books); 


var b1 = new Book("Design Patterns", 20.4,"ACD","SDFSD-sdsdfsd"); 

BookManager.addNewBook(b1);

BookManager.reserveBook("ram",b1);

// We use this pattern while we are decomposing logic of DB Entities in the model layer. 