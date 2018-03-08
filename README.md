# Front End Web Development Tutorial

## Learning ES6 

#### const

* In essence, when you declare a variable with ```const```, you simply re-declare it (similarly to ```const``` in C++ and ```final``` in Java).

* Note: you can still change (i.e mutate) the value of an array or object, even if it declared using ```const```. Primitive types, however, are *not* mutable with ```const```.


#### let

* An important point about ```let``` is that it creates a new scope in JavaScript called *block scope*.

* Before ES6, there were only types of scope in JavaScript: **function** and **global** scope.
Example:

    ```javascript
    var instructor = "Ellie";
    // the if block creates a scope. 
    if(instructor === "Ellie"){
        let funFact = "Plays the guitar.";
    }

    // Reference error!
    // funFact not accessible!
    funFact; 
    ```

* ***Hoisting***. Under the hood, JavaScript 'hoists' variable declarations up to the top of a function. Example:

    ```javascript
    function helloInstructor(){
        return ellie;
        var ellie = "ME!";
    }

    helloInstructor(); // Returns Undefined

    ```
    Is really the same as:
    ```javascript
    function helloInstructor(){
        var ellie;
        return ellie;
        ellie = "ME!";
    }
    ```
* Note: ```let``` also does get hoisted up in a similar function declaration, but we do not actually have access to it! In fact, it is in a *temporal dead zone* (TDZ) and the following would return a ReferenceError. 
    ```javascript
    function helloPerson(){
        return tarik;
        let tarik = "ME!";
    }

    helloPerson(); // Returns ReferenceError. 
    ```
* ***When should you use ```let```?*** Best practice would be to consider using it when you want to declare a variable within a block and you do not want it to be accessible from the outside. 

* Another Use Case with ```let```:
    ```javascript
    // Using var
    for(var i = 0; i < 10; i++){
        setTimeout(() => console.log(i), 1000);
    }

    // Will return '10' ten times! (Unexpected behaviour).

    // Using let
      for(let i = 0; i < 10; i++){
        setTimeout(() => console.log(i), 1000);
    }

    /* Will return 0-9. (Expected behaviour, as let creates a new context for each iteration, thus i doesn't just bind to '10' like it would with var) */
    ```

#### Template Strings 

* An easy way of printing out a string without having to worry about string concatenation. Cleaner and simpler. Just use a ` (back-tick) to start and end a template string. 

    ```javascript
    var firstName = "Tarik";
    var lastName = "Abou-Saddik";

    console.log(`Hello ${firstName} ${lastName}`);
    ```
#### Arrow Functions

* A more concise alternative than simply using the ```function``` keyword. (Excellent for higher-order functions).

* Caveat: we can put an entire function on one line with arrow functions, but we *cannot* use the *return* keyword or curly braces. 

