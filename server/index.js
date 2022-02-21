//The server will run through this file
//Create express server

const express = require('express')
const app = express();

app.use(express.json());

//make the server do sth - send a hello world response to the front end on the index page/route
//res is resource, req is require - both are parameters
//req is used when getting info from the front end
//res is used when posting info to the front end
const db = require('./models');

//Routers
const postRouter = require ('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(()=> {
//port, arrow function
    app.listen(3001, ()=> {
        console.log("Running on port 3001");
    });
});
