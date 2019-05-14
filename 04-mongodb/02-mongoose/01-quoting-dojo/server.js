
//basic_mongoose_app from platform
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

// const port = process.env.PORT || 8000;
// const { PORT: port = 8000 } = process.env;
const { env: { PORT: port = 8000 } } = process;
const { Schema } = mongoose;
const app = express();

var session = require('express-session');  //reference for session: 
app.use(session({
    secret: 'somethingsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
   }));
   
//If using static files (i.e. css)...
app.use(express.static(__dirname+ "/static"));
//If using images…

app.use(express.static(__dirname + "/static/images"));
//This allows us to see and interpret ejs files, which allow us to render dynamic data within an html page

//app.set denotes our express settings
app.set('view engine', 'ejs');
//This allow us to access the files within our views folder
app.set('views', path.join(__dirname, 'views'));
//This allows us to pass text as URL encoded data and exposes the resulting object (containing the keys and values) on request.body.
app.use(bodyParser.urlencoded({ extended: true }));

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose'); //basic_mongoose is the name of the database we will pick

var QuoteSchema = new mongoose.Schema({
    name: String,
    quotation: String,
    createdat: String
   })

mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quotes'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quotes'



//the Routes




//GET `/` => render welcome page  start here 
app.get("/", function (request, response) {
    Quote.find()
        .then(function(quotes) { 
            console.log("asd");
            console.log(quotes);
            response.render('welcome') }) //, {quotes: quotes }
      .catch(console.log());
    })

//POST `/quotes` => create a quote...comes from the add my quote button on the welcome page...when complete redirect to the page that goes to welcome
app.post('/quotes', function(request, response) {
    console.log("next line is console log post requst.body")
    console.log("POST DATA", request.body);
    // This is where we would add the user from request.body to the database.
    var user = new User({name: request.body.name, age: request.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
        }
        response.redirect('/quotes');
    })
})
 

//GET `/quotes` => render quotes page  ...shows up from skip to quotes button on the welcome page
app.get("/quotes", function (request, response) {

            
        response.render('quotes')  //, {quotes: quotes }) }

    })


// listening for incoming connection on port
app.listen(port, () => console.log(`express server listening on port ${port}`));



















