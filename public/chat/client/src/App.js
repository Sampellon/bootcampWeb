import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5001');

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);
  

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat en Tiempo Real</h2>
      <div style={{ border: '1px solid #ccc', padding: 10, height: 300, overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ margin: '5px 0' }}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{ marginTop: 10 }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          style={{ width: '80%', padding: 8 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 5 }}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
