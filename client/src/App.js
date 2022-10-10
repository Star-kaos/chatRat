import { io } from 'socket.io-client'
import { useState } from 'react';


function App() {
  const [message, setMessage] = useState('');
  const [completeMessage, setCompletedMessage] = useState('');


  const socket = io('http://localhost:4000')
  socket.on('connect', () => {
    console.log("you connected with", socket.id)
  })

  function handleMessage(event) {
    setCompletedMessage(message)
    socket.emit(completeMessage)
    event.preventDefault();
    document.getElementById("messageInput").value = ""
  }

  return (
    <div className="App">
      <h1>chatRat apps</h1>
      <form onSubmit={handleMessage}>
        <input id="messageInput" type="text" onChange={event => setMessage(event.target.value)}></input>
        <input type="Submit"></input>
      </form>
      <h1>{completeMessage ? completeMessage : ""}</h1>
    </div>
  );
}

export default App;
