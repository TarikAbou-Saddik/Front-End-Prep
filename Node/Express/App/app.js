var express = require('express');

var app = express();

// Remember that Express defaults to an HTTP status code of 200. 

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res) => {
    // Sets the Content-Type header.
    res.type('text/plain');
    // Replaces Node's low-level res.end.
    res.send('Meadowlark Travel');
});

app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});

// Setting up a custom 404 page. 
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// Setting up a custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});