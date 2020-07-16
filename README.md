[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Learning Objectives
* Practice setting up express applications.
* Practice creating custom routes.
* Practice using parameters from a request.

# Setup
* Fork and clone this repo.
* Go inside the folder you just cloned.
* Create a file named `server.js`. 
* Run the command **`npm init -y`** this command will create the file `package.json`.
* Install express by running the command **`npm install express`**. (When you run the **install** command for the first time. the folder `node_modules` and the file `package-lock.json` gets created).
* Open VScode and check:
  * Your `package.json` file should have `express` listed in the dependencies.
  * You could also check in your `node_modules` folder to see an `express` folder.
* In your `server.js` file set up an express app.

:elephant:  Need a reminder in how to set up your express app?

```js
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is listening!!!")
});
```
* To validate if you express app (your server) is good to go, run the command `nodemon` in your terminal
you should see something like this.
```sh
 > $: nodemon
[nodemon] 1.18.11
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Server is listening!!!
```

# Meet These Specifications

## Greetings
1. Your app should have a route of `'/greeting'` and it should send a generic greeting to the screen like "Hello, stranger".

2. Your app should have a route of `'/greeting/:name'` and it should expect *1 param* which takes in a person's name. When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, `<name>`", or "`<name>`! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).

&#x1F534; **Commit 1** <br>
<hr>
"Commit 1: Greeting express application created."

>The purpose of this question is to demonstrate that similar to functions, routes in Express can take parameters and those parameters can have any value.



<hr>

## Tip Calculator
1. Your app should have a route of `'/tip'` and it should expect *2 params*. One should be `total` and one should be `tipPercentage`.

2. When hitting the route, the page should *display how much your tip will be* based on the total amount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).

3. Be sure you are `res.send()`ing a **String**.  If you try to directly `res.send()` a Number, you will get errors about HTTP status codes.

&#x1F534; **Commit 2** <br>
<hr>
"Commit 2: Tip Calculator express application created."

>The purpose of this question is to demonstrate that info from the URL parameters can be used in your application to change things

<hr>


## Magic 8 Ball
1. Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.

3.  So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`) they should see returned to them their question AND a random Magic 8 ball response (see the array below) on the screen.

4. Remember that we can't use spaces in the url, so we use `%20` to express a space in the url.

- Use this array of Magic 8 ball responses.....

```js
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
```

&#x1F534; **Commit 3** <br>
<hr>

"Commit 3: Magic 8 Ball express application created."

>The purpose of this question is to demonstrate that a route may use data from _both_ the URL parameters AND other places within the app to do its work or construct its responses.

<hr>

# Optional: Hungry for more?

## Fibonacci
1. Create a route 'fibonacci'

2. This route will take one param, the number we will operate on.

3. If the number param is not a [fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number), print out "I can tell this ain't a fibonacci number. Wack."

4. If the number is a Fibonacci number print out "Sweet Fibonacci number!."

&#x1F534; **Commit 4** <br>
<hr>
"Commit 4: Fibonacci application created."
<hr>

## Fibonacci Continued
1. Instead, take in a number that will refer to the index of a Fibonacci number. Print out the Fibonacci number that is located at that index.

```js
Example:
The Fibonacci sequence:
1,1,2,3,5,8,13,21,34,55,89,144, ...;

num = 4

Output => 5
```

&#x1F534; **Commit 5** <br>
<hr>
"Commit 5: Hungry for more: Fibonacci application extended."
<hr>
