//The server will run through this file
//Create express server

const express = require("express");
const app = express();
const mysql = require ("mysql");

const db = mysql.createPool({
    hostname: 'localhost',
    user: 'phpmyadmin',
    password: 'kimali1234',
    database: 'CRUDDatabase',
});

//make the server do sth - send a hello world response to the front end on the index page/route
//res is resource, req is require - both are parameters
//req is used when getting info from the front end
//res is used when posting info to the front end
app.get('/', (req,res)=> {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inception', 'good movie');"
    db.query(sqlInsert, (err, result) => {
        res.send("Hello Dee");
    })
    
})

//port, arrow function
app.listen(3001, ()=> {
    console.log("Running on port 3001");
});