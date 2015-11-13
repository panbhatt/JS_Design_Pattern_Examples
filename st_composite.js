// Composite Design Pattern. 
/*
These are the two main benefits that the Composite pattern provides:

You can treat the whole collection of objects the same way you would treat any of the individual objects in the collection. Functions executed on the composite are passed down to each of the children to be executed. On large collections, this becomes very beneficial (though also may be misleading, because you may not realize how large the collection is and therefore not understand how much performance may suffer).
It organizes the objects into a tree structure, and since each composite object contains a method to get its children, you can hide the implementation and organize the children in any way you wish.
it is to be balanced tree with the 

http://www.joezimjs.com/javascript/javascript-design-patterns-composite/



e.g. file system structure. 

COMPOSITE-SPECIFIC METHODS
        add	add a child node to this composite
        remove	remove a child node from this composite (or one in a deeper level)
        getChild	returns a child object
GALLERY-SPECIFIC METHODS
        hide	hides the composite and all of its children
        show	shows the composite and all of its children
HELPER METHODS
        getElement	get the HTML element of the node

*/





