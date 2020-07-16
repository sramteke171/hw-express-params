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


// Tip Calculator
// Your app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.

// When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20' should display 20 on the page).

// Be sure you are res.send()ing a String. If you try to directly res.send() a Number, you will get errors about HTTP status codes.

// 🔴 Commit 2

let tip;
app.get("/tip/:total/:tipPercentage", (req, res) => {
    tip = req.params.total * (req.params.tipPercentage / 100);
    console.log(req.params.tipPercentage);
    res.send(`${tip}`)
});

app.listen(3000, () => {
    console.log("nodemon/server listening");
});