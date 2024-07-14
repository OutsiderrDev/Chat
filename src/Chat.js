import React, { useState } from 'react';
import './Chat.css';

const responses = [
  "przykładowa odpowiedz 1",
  "przykładowa odpowiedz 2",
  "przykładowa odpowiedz 3",
  "przykładowa odpowiedz 4",
  "przykładowa odpowiedz 5",
  "przykładowa odpowiedz 6",
  "przykładowa odpowiedz 7",
  "przykładowa odpowiedz 8",
  "przykładowa odpowiedz 9",
  "przykładowa odpowiedz 10"
];

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    newMessages.push({ sender: 'bot', text: randomResponse });

    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="Napisz wiadomość"
        />
        <button type="submit" className="button">Wyślij</button>
      </form>
    </div>
  );
};

export default Chat;