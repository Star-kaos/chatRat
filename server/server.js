const io = require("socket.io")(4000, {
    cors: {
        origin: ['http://localhost:3000']
    }
})

io.on("connection", socket => {
    console.log("working", socket.id)
    socket.on("hi", (number, string) => {
        console.log(number, string)
    })
})