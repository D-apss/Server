if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const{createServer} = require("http") //socket io setup
const{Server} = require ("socket.io") //socket io setup

const app = express();
const httpServer = createServer(app) //socket io setup
const io = new Server(httpServer) //socket io setup

const port = 3000;
const router = require("./routes/router");
const errorHandler = require("./middlewares/ErrorHandler");


const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);
app.use(errorHandler);


io.on("connection", (socket) => {

})//socket io setup

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); //socket io setup ganti app dengan httpServer

module.exports = app;