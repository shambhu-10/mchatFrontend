import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import { library } from "@fortawesome/fontawesome-svg-core";
import io from "socket.io-client";

import {
  faKeyboard,
  faBell,
  faBars,
  faCoffee,
  faMagnifyingGlass,
  faClose,
  faShare,
  faSmile,
  faPaperPlane,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faKeyboard,
  faSmile,
  faPaperPlane,
  faShare,
  faBars,
  faImage,
  faBell,
  faMagnifyingGlass,
  faCoffee,
  faClose
);

const socket = io.connect("http://localhost:5000");

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:room/:name" element={<Chat socket={socket} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
