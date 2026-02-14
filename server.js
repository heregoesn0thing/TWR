const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// 🔥 ESTO ES LO IMPORTANTE
app.use(express.static(path.join(__dirname)))

// WebSocket
io.on("connection", (socket) => {
  console.log("User connected")

  socket.on("crearAeronave", (data) => {
    socket.broadcast.emit("crearAeronave", data)
  })
})

// 🔥 Render necesita esto
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})














