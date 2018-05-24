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

var http = require('http'),
    fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode){
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, (err, data) => {
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');
        }else{
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data);
        }
    });
}
http.createServer((req,res) => {
    let path = req.url.replace(/\?(?:\?.*)?$/, '').toLowerCase();
    switch(path){
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.jpg':
            serveStaticFile(res, '/public/img/logo.jpg', 'image/jpg');
            break;
        default:
            serveStaticFile(res, '/public/notfound.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log('Server started on localhost:3000, press Ctrl-C to terminate...');