const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "public"));

app.get("/", (req, res, next) => {
  res.send("hello world!");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}...`);
});
