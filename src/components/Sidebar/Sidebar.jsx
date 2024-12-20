import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Sidebar({ contacts, username }) {
  return (
    <div className="Chat">
      <div className="search-contacts">
        <div className="left">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="Chat-box">
        <div className="left-contacts">
          {contacts.map((contact) => {
            return (
              <NavLink
                to={`/${contact.room}/${username}`}
                style={{ textDecoration: "none" }}
                key={contact.room}
              >
                <div>
                  <div className="Contact">
                    <div>
                      <img
                        src={contact.image}
                        style={{ width: "50px", height: "50px" }}
                        alt="personLogo"
                      />
                    </div>
                    <div>
                      <h3>{contact.name}</h3>
                      <p>{contact.tagline}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
