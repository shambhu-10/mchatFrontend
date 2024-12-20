import React, { useState, useEffect, useRef } from "react";
import "./Chat.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import InputEmoji from "react-input-emoji";

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

function Chat({ socket }) {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [audio] = useState(new Audio("/message.mp3"));
  // const [users, setUsers] = useState([]);
  const params = useParams();

  const data = {
    name: params.name,
    room: params.room,
    message: message,
    setMessagetime:
      new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
  };

  socket.emit("join_room", params.room);

  async function Submit() {
    setMessage("");
    await socket.emit("send_message", data);
    if (message !== "") {
      setMessageList((list) => [...list, data]);
    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      audio.play();
      setMessage("");
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div
      className="chat-flex"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="sidebar">
        <Sidebar contacts={contacts} username={params.name} />
      </div>
      <div className="Chat">
        <div className="search-contacts">
          {/* <div className="right">
            <button onClick={clearChatMessages}>Clear Chat</button>
          </div> */}
        </div>
        <div className="Chat-box">
          <ScrollToBottom className="right-chat-screen">
            {messageList.map((messageContent) => {
              return (
                <div
                  className="Messages"
                  key={messageContent.message}
                  id={params.name === messageContent.name ? "you" : "other"}
                >
                  {params.room === messageContent.room && (
                    <div className="my-messages">
                      <div>
                        <h5 style={{ color: "blue" }}>{messageContent.name}</h5>
                        <p
                          style={{
                            paddingRight: "30px",
                            paddingTop: "3px",
                            paddingBottom: "3px",
                          }}
                        >
                          {messageContent.message}
                        </p>

                        <h6>{messageContent.setMessagetime}</h6>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </ScrollToBottom>
          <div className="write-message">
            <FontAwesomeIcon icon="fa-keyboard" className="keyboard" />
            <div className="input">
              <InputEmoji
                value={message}
                cleanOnEnter
                onEnter={Submit}
                placeholder="Type a message"
                onChange={setMessage}
              />
            </div>

            <div style={{ paddingLeft: "20px" }}>
              <FontAwesomeIcon
                className="sendmessage"
                onClick={Submit}
                style={{
                  backgroundColor: "lightgray",
                  borderRadius: "50%",
                  padding: "15px",
                }}
                icon="fa-solid fa-paper-plane"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
