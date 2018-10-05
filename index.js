// imports
const express = require("express");
const logger = require("morgan");

// setup server
const server = express();
const port = 8000;
server.use(logger("combined"));
configureMiddleware(server);

// ROUTES
// Homepage
server.get("/", (req, res) => {
  res.send("Hello World");
});

// call server.listen
server.listen(port, () => {
  console.log(`listening on ${port}`);
});
