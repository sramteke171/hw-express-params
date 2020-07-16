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

// Magic 8 Ball
// Create a route of '/magic' that should expect a phrase in the URL that ask the Magic 8 ball a question.

// So if the user hits that route and asks a question of "Will I be a Millionaire" 
//(ex. '/magic/Will%20I%20Be%20A%20Millionaire') 
//they should see returned to them their question AND a random Magic 8 ball response (see the array below) on the screen.

// Remember that we can't use spaces in the url, so we use %20 to express a space in the url.

// Use this array of Magic 8 ball responses.....
// ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
// 🔴 Commit 3

let arrayBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good",
    "Very doubtful"];

app.get("/magic/:question", (req, res) => {
    console.log(req.params.question);
    let item = arrayBall[Math.floor(Math.random() * arrayBall.length)];
    res.send(`${req.params.question} ${item}`);

})

// Optional: Hungry for more?
// Fibonacci
// Create a route 'fibonacci'
// This route will take one param, the number we will operate on.
// If the number param is not a fibonacci number, print out "I can tell this ain't a fibonacci number. Wack."
// If the number is a Fibonacci number print out "Sweet Fibonacci number!."
// 🔴 Commit 4

let fibNumber = [0, 1, 1, 2, 3, 5, 8, 13, 21];
app.get("/fibonacci/:number", (req, res) => {

    let x = fibNumber.forEach((num) => {
        if (parseInt(req.params.number) === num) {
            console.log("Sweet Fibonacci number");
            res.send("Sweet Fibonacci number!.");
        }
        // else {
        //     res.send("I can tell this ain't a fibonacci number. Wack.");
        // }
    });
    let y = fibNumber.forEach((num) => {
        if (parseInt(req.params.number) != num) {
            console.log("I can tell this ain't a fibonacci number. Wack.");
            res.send("I can tell this ain't a fibonacci number. Wack.");
        }
    });

});

app.listen(3000, () => {
    console.log("nodemon / server listening");
});