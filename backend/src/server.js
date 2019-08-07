const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const server = express();

mongoose.connect("mongodb://admin:123@localhost:27017/omnistack8?retryWrites=true&write=majority", {useNewUrlParser: true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);