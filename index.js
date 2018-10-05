// imports
const express = require("express");
const logger = require("morgan");
const configureMiddleware = require("./config/middleware.js");
const projectRoutes = require("./projects/projectRoutes");
const actionRoutes = require("./actions/actionRoutes");

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

server.use("/projects", projectRoutes);
server.use("/actions", actionRoutes);

// call server.listen
server.listen(port, () => {
  console.log(`listening on ${port}`);
});
