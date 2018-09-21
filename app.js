const express = require("express");
const morgan = require("morgan");
//const { db } = require("./models");
const models = require("./models");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "public"));

app.get("/", (req, res, next) => {
  res.send(`<body>hello world!</body>`);
  next();
});
const PORT = 3000;
const init = async () => {
  await models.User.sync()
  await models.Page.sync()

  express.listen(PORT, () => {
    console.log('Server is listening on port 3000!')
  });
}

init();

// app.listen(PORT, () => {
//   console.log(`Now listening on port ${PORT}...`);
// });

// db.authenticate().then(() => {
//   console.log("connected to the database");
// });
