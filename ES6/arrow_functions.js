// Author: Tarik Abou-Saddik
// Date: February 28, 2018

// Testing Node console. 
// console.log("Hi there! I'm running JavaScript in the console!")

// Learning about Arrow Functions

/*
    1. One-line arrow functions:
    - You can put arrow functions on one line. 
    - The only catch: you must omit the return keyword as well as curly braces. 
*/
let add = (a,b) => a+b;
console.log(`Running add(2,3): ${add(2,3)}`)

//ES5 
// let array = [1,2,3].map(function(value){
//     return value * 2
// });
//ES6
let array = [1,2,3].map(value => value * 2)
console.log(array)

//ES5 
// function doubleAndFilter(arr){
//     return arr.map(function(value){
//         return value * 2;
//     }).filter(function(value){
//         return value % 3 === 0;
//     })
// }
//ES6
let doubleAndFilter = arr => arr.map(value => value * 2).filter(num => num % 3 === 0);
console.log(`doubleAndFiler([5,10,15,20]): ${doubleAndFilter([5,10,15,20])}`)

/* Notice so far that we haven't had to put arguments to arrow functions inside of parentheses, as
they've only been single argument functions for now. ```

Differences between arrow functions and regular Functions:
    - Arrow functions do not get their own 'this' keyword! This can prove useful
    for only certain instances...
    - Inside of an arrow function, the keyword 'this' has its original meaning from the enclosing context. 
    - Arrow functions do not get their own keyword 'arguments' 
    - An 'arguments' keyword can be accessed if the arrow function is inside of another function (it will be the
    outer functions arguments): 

    function outer(){
        return innerFunction = () => {
            return arguments;
        }
    }
    outer(1)(2); // Only prints out [1]
*/

/*  ES5:
    Note that the value of the keyword 'this' inside of setTimeout
    refers to window object inside of a browser. We have to utilize 
    bind() in order to actually make it work within the context of the 
    object.
*/
// let instructor = {
//     firstName: "Ellie",
//     sayHi: function(){
//         setTimeout(function(){
//             console.log(`Hello, ${this.firstName}`);
//         }.bind(this),1000);
//     }
// };
//ES6
let instructor = {
    firstName: "Tarik",
    sayHi: function(){
        setTimeout(() => console.log(`Hello, ${this.firstName}`),1000);
    }
};
instructor.sayHi()

/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/

let tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);


/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);


/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

let mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5).reduce((acc,next) => {
    acc[next] = next.length;
    return acc;
    }, {});


/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

let createStudentObj = (firstName, lastName) => ({firstName: firstName, lastName: lastName})

/* 5 - Given the following code: 

Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
    
    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/

let instructor = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(() => console.log('Hello ' + this.firstName), 1000)
    }
}





