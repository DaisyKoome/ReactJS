//This file will contain routes for the posts model
//express has a routing system implemented into the framework
const express = require ('express');
const router = express.Router();
const { Posts } = require ('../models');

router.get("/", async(req, res)=> {
    //get all posts from DB
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

//insert data into db
//making a request to the posts route
router.post("/", async(req, res) => {

    //body of the request - all the data being sent in the post request
    //grab the posts data in the body sent in the request
    const post = req.body;
    //wait for the data to be inserted into DB before moving forward with requests
    //call the sequelize function to create - it inserts into the posts table
    await Posts.create(post);
    //at the end, we return the posts
    res.json(post);
});


module.exports = router;