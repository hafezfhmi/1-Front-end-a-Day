const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

// Create http server
const server = http.createServer(app);

// To be used for socket.io
const io = new Server(server, {
  // Specify cors to communicate with frontend
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// listen to io event using .on and type of event is connection (event where a user is connected)
// Log the user id
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // listen to "send_message action emitted from frontend (lin 10)"
  socket.on("send_message", (data) => {
    // send the event to everyone
    socket.broadcast.emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("Server is running");
});
