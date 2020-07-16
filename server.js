const express = require("express");
const app = express();



// Greetings
// 1. Your app should have a route of '/greeting' and it should send a generic greeting to the screen 
//like "Hello, stranger".
// 2. Your app should have a route of '/greeting/:name' and it should expect 1 param which takes 
//in a person's name. When hitting the route, the page should display a message such as 
//"Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" 
//(ex. hitting '/greeting/Jimmy-boy' should display Wow! Hello there, Jimmy-boy on the page).
// 🔴 Commit 1

app.get("/greeting", (req, res) => {
    console.log("req.param");
    res.send("Hello, stranger");
});


app.get("/greeting/:name", (req, res) => {
    console.log(req.params.name);
    res.send(`Hello, What's up ${req.params.name}! It's so great to see you!`)
});

// app.get("/greeting", (req, res) => {
//     console.log("req.param");
//     res.send("Hello, stranger");
// });

app.listen(3000, () => {
    console.log("nodemon/server listening");
});