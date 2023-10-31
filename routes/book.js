// const express = require("express");

// // const  student_Act = require("../controllers/students"); 
// const books= require("../controllers/book")


// // initalizing the router
// const router = express.Router();



// //adding a route for creating a quetions
// router.post("/create", books.createbook);

// // adding a route for deleting an question
// router.get("/:id/delete", books.deleteBook);

// // adding a route for getting the details of a particular question
// router.get("/:id", books.viewBook);

// // update the book details

// router.post("/update",books.update);

// // get all the book the detaile
// router.post("/getAllBooks",books.getAllBooks)

// module.exports=router;


module.exports = app => {
    // const tutorials = require("../controllers/tutorial.controller.js");

    const books= require("../controllers/book")

  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", books.create);
  
    // Retrieve all Tutorials
    router.get("/", books.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", books.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", books.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", books.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", books.delete);
  
    // Create a new Tutorial
    router.delete("/", books.deleteAll);
  
    app.use("/api/tutorials", router);
  };