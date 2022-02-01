//The server will run through this file
//Create express server

const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

//make the server do sth - send a hello world response to the front end on the index page/route
//res is resource, req is require - both are parameters
//req is used when getting info from the front end
//res is used when posting info to the front end
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem"
});

//port, arrow function
app.listen(3001, () => {
    console.log("Running server");
});