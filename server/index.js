//The server will run through this file
//Create express server
//We're sending an object with a movieName and a movieReview to the backend (server)
//Body-parser middleware changes everything to JSON format
const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors");
const app = express();
const mysql = require ("mysql");

const db = mysql.createPool({
    hostname: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CRUDDatabase',
});

//make the server do sth - send a hello world response to the front end on the index page/route
//res is resource, req is require - both are parameters
//req is used when getting info from the front end
//res is used when posting info to the front end
/* app.get('/', (req,res)=> {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inception', 'good movie');"
    db.query(sqlInsert, (err, result) => {
        res.send("Hello Dee");
    })
    
}) */

//apply the bodyParser middleware
app.use(cors());
//grab data as json from the frontend
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

//Now we need to request or the info from front end using req
//use req to 'catch' the data from front end which is then being parsed into the SQL statement below

//get all the movie reviews that already exist - send a JSON that contains all the movie reviews in the DB
app.get("/api/get", (req,res) => {
    const sqlSelect = "SELECT * FROM movie_reviews;"
    db.query(sqlSelect,(err, result) => {
        //console.log(result);
        //console log the error
       // console.log(result);

       //Send data from DB to front end
       res.send(result);
    });
})

app.post("/api/insert", (req, res)=> {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        //console.log(result);
        //console log the error
        console.log(result);
    });
});

//port, arrow function
app.listen(3001, ()=> {
    console.log("Running on port 3001");
});