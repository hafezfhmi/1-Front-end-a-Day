/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

// connect to our socket.io backend
const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    // emit an event to socket.io backend
    socket.emit("send_message", { message: message });
  };

  // when an event is received, run this because socket is the dependency
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div>
      <input
        type="text"
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}>Send Message</button>

      <h1>Message:</h1>
      {messageReceived}
    </div>
  );
}

export default App;
