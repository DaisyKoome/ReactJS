//The server will run through this file
//Create express server
//Cors enables cross platform interaction (send data from front to backend)
const express = require("express");
const mysql = require("mysql");
const cors = require ("cors");

//bodyParser for elements we get from frontend
const bodyParser = require ("body-parser");

//cookieParser for parsing cookies
const cookieParser = require ("cookie-parser");

//express session for creating, maintaining sessions
//express on its own creates stateless http servers
//with express-session the state o the session can be stored
//so that user is kept logged in when a new tab is opened or when the page is refreshed
const session = require ("express-session");

//axios replicates the fetch function  where you can make HTTP requests

//Encryption algorithm - bcrypt
const bcrypt = require("bcrypt");
//property to be used in our passwords - saltRounds
const saltRounds = 10;

const app = express();

//Initializing middlewares
//passes every JSON object sent from front end
app.use(express.json());
app.use(cors({
    //set origin - array of all the urls we'll be using
    //include the frontend which is on localhost 3000
    origin: ["http://localhost:3000/"]
}));

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

    //Before inserting pswd into DB, encrypt it first
    //using hash function of bcrypt algorithm
    bcrypt.hash(password, saltRounds, (err, hash) => {
        //first check if there were any errors during the hashing process
        if (err){
            console.log(err);
        }

        //query to insert new user into DB
        //the hash variable will be used 
        //coz it represents the hashed version of the password
        db.query("INSERT INTO users (username, password) VALUES (?,?)", 
        [username, hash], 
        (err, result)=>{
            console.log(err);
        });        
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

    //the hashed password needs to be decrypted during login 
    //query to verify user from DB
    //verify username only first
    db.query("SELECT * FROM users WHERE username = ?", 
    username, 
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
                //now check if pswd corresponds to username
                //using compare function of bcrypt algorithm
                //comparison btwn password(from login form) and hashed pswd in DB
                //result is an array
                //The right username will produce a result of only 1 array element
                //use different names for error and result so as not to clash with the ones defined earlier
                bcrypt.compare(password, result[0].password, (error, response)=> {
                    if (response) {
                        res.send(result);
                    } else {
                        res.send({message:"Wrong username/password combination!"});
                    }
                });
            } else {
                //if no error but no user, send a message object
                res.send({message:"User doesn't exist"});
            }

    });
});

app.listen(3001, () => {
    console.log("running server");
})