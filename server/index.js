//The server will run through this file
//Create express server

const express = require('express')
const app = express()

app.listen(3001, ()=> {
    console.log("Running on port 3001");
});