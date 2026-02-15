const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname)))

io.on("connection", (socket) => {

  console.log("User connected")

  socket.on("crearAeronave", data => {
    socket.broadcast.emit("crearAeronave", data)
  })

  socket.on("actualizarPosicion", data => {
    socket.broadcast.emit("actualizarPosicion", data)
  })

  socket.on("eliminarAeronave", id => {
    socket.broadcast.emit("eliminarAeronave", id)
  })

})



server.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})

















