// server
const { PORT, CLIENT, MODULES } = require("../config.js");
const express = require("express");
const server = express();

server.listen(PORT, () => console.log("Running..."));

server.use("/", express.static(CLIENT));
server.use("/node_modules", express.static(MODULES));