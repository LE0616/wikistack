const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "public"));

app.get("/", (req, res, next) => {
  res.send(`<body>hello world!</body>`);
  next();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}...`);
});
