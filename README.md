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

* Before we go any further, let's review an important (and tricky) part of JavaScript: the ```this``` keyword.
    * In most cases, the value of ```this``` is determined
    by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.
    * In the ***global*** context (outside of any function), ```this``` refers to the global object. 
    * In the ***function*** context, the value of ```this``` depends on how the function is called:
        ```javascript
        function f1(){
            return this;
        }
        // In a browser:
        f1() === window; // True

        function f2(){
            'use strict';
            return this;
        }

        // In a browser: 
        f2() === undefined;
        ```

    * We can also pass the value of ```this``` from one context to another, use `call` or `apply` :
    ```javascript
    // An object can be passed as the first argument to call or apply and this will be bound to it.
    var obj = {a: 'Custom'};

    // This property is set on the global object
    var a = 'Global';

    function whatsThis(arg) {
    return this.a;  // The value of this is dependent on how the function is called
    }

    whatsThis();          // 'Global'
    whatsThis.call(obj);  // 'Custom'
    whatsThis.apply(obj); // 'Custom'
    ```

* There are, actually, a few more caveats for **arrow functions**:
    * Arrow functions do not get their own keyword `this`.
    * Arrow functions do not get their own keyword `arguments`
        * However, an `arguments` keyword can be accessed if the arrow function is inside of another function (it will be the outer function's arguments).
    * Inside an arrow function, the keyword `this` has its original meaning from the enclosing context. 

#### Default Parameters

* This is pretty self explanatory:

```javascript
    function add(a = 10,b = 2){
        return a + b;
    }

    add(); // 12
```
#### For...of Loop
* Syntax is very similar to a for...in loop, though the former is used for iterating over keys inside of an object, whereas a for...of loop is used to iterate over values in an array.

