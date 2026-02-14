const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(__dirname))

io.on("connection", (socket) => {

  console.log("User connected")

  socket.on("crearAeronave", data => {
    socket.broadcast.emit("crearAeronave", data)
  })

  socket.on("moverAeronave", data => {
    socket.broadcast.emit("moverAeronave", data)
  })

  socket.on("eliminarAeronave", id => {
    socket.broadcast.emit("eliminarAeronave", id)
  })

})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})












