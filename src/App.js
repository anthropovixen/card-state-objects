import React from "react";
import userimage from "./images/user.png";
import starimage from "./images/star-empty.png";
import starimageyellow from "./images/star-filled.png";

import "./App.css";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  let starIcon = contact.isFavorite ? starimageyellow : starimage;

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !contact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src={userimage} className="card--image" alt="user" />
        <div className="card--info">
          <img
            src={starIcon}
            className="card--favorite"
            onClick={toggleFavorite}
            alt="star"
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
