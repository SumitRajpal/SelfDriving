import cors from 'cors';
import express from "express";
import http from 'http';
import { Server } from "socket.io";
import { GamepadManager } from './room/gamepadmanager';

const port = 3005

const app = express()
app.use(cors)

const server = http.createServer(app)
const io = new Server(server, {
      cors: {
            origin: "*",
            methods: ["POST", "GET", "PUT"]
      }
});

io.on("connection", (socket) => {
      console.log("connection done ")
     // RoomHandler(socket)
      // DVManager(socket)
      GamepadManager(socket)
      socket.on("disconnect", () => {
            console.log("disconnected done")
      })
})
server.listen(port, () => {
      console.log("listening to server")
})