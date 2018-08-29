// Setup (configuration of your app)
// -----------------------------------------------------------------------------
const express = require("express");

// "app" variable represents our application
// (all configuration and content will be defined through "app")
const app = express();

// Make Express aware of the "public/" folder
// (makes all files inside "public/" available through localhost:3000)
app.use(express.static("public"));



// Routes (content of your app)
// -----------------------------------------------------------------------------
// Express Route - defines a page of content on your website
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
    // __dirname = "DIRECTORY NAME"
});

app.get("/cat", (request, response, next) => {
  response.sendFile(__dirname + "/views/cat-page.html");
    // __dirname = "DIRECTORY NAME"
});


app.listen(3000, () => {
  console.log("Now we're cooking! 🍳");
});
