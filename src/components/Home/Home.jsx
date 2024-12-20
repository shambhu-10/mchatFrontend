import React, { useState } from "react";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.scss";

const contacts = [
  {
    room: 1234,
    image: "/nextjs.ico",
    name: "Next Js",
    tagline: "WhatsApp, From Node Js Community?",
  },
  {
    room: 4321,
    image: "/node.jpg",
    name: "Node js",
    tagline: "WhatsApp, From Node Js Community?",
  },
];

function Home() {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "") {
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <div className="HomeContainer">
          <Sidebar contacts={contacts} username={username} />
        </div>
      )}
    </div>
  );
}

export default Home;
