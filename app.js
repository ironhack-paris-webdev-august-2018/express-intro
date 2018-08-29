const express = require("express");

// "app" variable represents our application
// (all configuration and content will be defined through "app")
const app = express();


// Express Route - defines a page of content on your website
app.get("/", (request, response, next) => {
  response.send("Hello, world!");
});


app.listen(3000, () => {
  console.log("Now we're cooking! 🍳");
});
