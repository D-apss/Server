if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { createServer } = require("http"); //socket io setup
const { Server } = require("socket.io"); //socket io setup

const app = express();
const httpServer = createServer(app); //socket io setup
const io = new Server(httpServer, {
  cors: {
    origin: true,
  },
});

const port = 3000;
const router = require("./routes/router");
const errorHandler = require("./middlewares/ErrorHandler");

const cors = require("cors"); // nyalakan cors kalau mau hilangkan socket io.
app.use(cors()); // nyalakan cors kalau mau hilangkan socket io.

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

const DB = {
  lastBid: 0
}

io.on("connection", (socket) => {
  // console.log("setup");

  socket.emit("message", "Halo, selamat datang di realtime bid")
  socket.emit("count:Bid", DB.lastBid)

  socket.on("newBid", (newCount) =>{
    io.emit("highestBid", newCount)

    DB.lastBid = newCount
  })
}); //socket io setup

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); //socket io setup ganti app dengan httpServer

module.exports = app;