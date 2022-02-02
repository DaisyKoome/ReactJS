//The server will run through this file
//Create express server

const express = require("express");
const mysql = require("mysql");

//axios replicates the fetch function  where you can make HTTP requests

const app = express();

//passes every JSON object sent from front end
app.use(express.json());

//make the server do sth - send a hello world response to the front end on the index page/route
//res is resource, req is require - both are parameters
//req is used when getting info from the front end
//res is used when posting info to the front end
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "reg_log"
});

//call HTTP request
//parse uname, psw from frontend to backend
//create a route
app.post('/register', (req, res)=>{

    /*
    Grab uname, psw variables from front end and pass to SQL query
     */
    /*create variables called username, password equal to 
    the variables set  in the frontend (in the register function)*/

    const username = req.body.username;
    const password = req.body.password;

    //query to insert new user into DB
    db.query("INSERT INTO users (username, password) VALUES (?,?)", 
    [username, password], 
    (err, result)=>{
        console.log(err);
    })
})

//port, arrow function
app.listen(3001, () => {
    console.log("Running server");
});