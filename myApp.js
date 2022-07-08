let express = require("express");
let app = express();
let absolutePath = __dirname + "/views/index.html";

const mySecret = process.env["MESSAGE_STYLE"];
console.log("mySecret:  ", mySecret);

//link the css styles
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  let jsonResponse = { message: "Hello json" };
  if (mySecret === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }
  res.json(jsonResponse);
});

module.exports = app;
