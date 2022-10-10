import { io } from 'socket.io-client'


function App() {
  const socket = io('http://localhost:4000')
  socket.on('connect', () => {
    console.log("you connected with", socket.id)
    socket.emit("hi", 1, "hi")
  })


  return (
    <div className="App">
      <h1>chatRat apps</h1>
    </div>
  );
}

export default App;
