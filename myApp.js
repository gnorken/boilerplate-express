let express = require("express");
require("dotenv").config();
let app = express();
let absolutePath = __dirname + "/views/index.html";

//link the css styles
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  let jsonResponse = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }
  res.json(jsonResponse);
});

module.exports = app;
