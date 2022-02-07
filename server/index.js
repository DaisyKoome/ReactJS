//The server will run through this file
//Create express server
//Cors enables cross platform interaction (send data from front to backend)
const express = require("express");
const mysql = require("mysql");
const cors = require ("cors");

//axios replicates the fetch function  where you can make HTTP requests

const app = express();

//Initializing middlewares
//passes every JSON object sent from front end
app.use(express.json());
app.use(cors());

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
    });
});

//add a route for login
app.post('/login', (req, res)=>{

    /*
    Grab uname, psw variables from front end and pass to SQL query
     */
    /*create variables called username, password equal to 
    the variables set  in the frontend (in the register function)*/

    const username = req.body.username;
    const password = req.body.password;

    //query to insert new user into DB
    db.query("SELECT * FROM users WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result)=>{
        //frontend is expecting an object response
        //if there's an error, send an object with a property called error
        //no elese statement needed or an error 
        //coz once it occurs everything after it is ignored
        if (err)
        {
            res.send({err: err});
        }
            //if no error, the program will continue
            //else if no error and a user is found instead
            // send result of the found user to front end
            if (result.length > 0)
            {
                res.send(result);
            } else {
                //if no error but no user, send a message object
                res.send({message:"Wrong username/password combination!"});
            }

    });
});

app.listen(3001, () => {
    console.log("running server");
})