// Name: Tarik Abou-Saddik

/*
    Introduction to NPM

    - What is NPM?

        Succintly, NPM is the package manager for JavaScript. 
        Thought what is a package? When we're writing server side
        code using JavaScript, we utilize NPM to obtain written libraries (i.e. packages). 
*/

/*
    Introduction to Express

    - What is a framework?
        From StackOverFlow: "The most important difference, and in fact the defining differece,
        between a library and a framework is Inversion of Control. What does this mean? Well, it means
        when you call a library, you are in control. But with a framework, the control is inverted: the
        framework calls you! 

    - What is Express?
        A framework to help build web applications. 

    - Why use Express?
        Express is the most popular Node development framework.       
*/

var express = require("express"); // Includes all the contents of the Express directory.
var app = express(); // Execute contents. 

// Defining our routes

// 1. "/" => "Hi there!"
// req is an object that contains all the information about the request made. 
// res is an object that will contain all the information about what we will respond with. 
app.get("/", (req, res) => res.send("Hi there! Or, hello world!"));
   
// 2. "/bye" => "Goodbye!"
app.get("/bye", (req,res) => res.send("Goodbye!"));


// Tell Express to listen for requests (start server).
app.listen(3000, () => console.log("Example listening on port 3000!"));