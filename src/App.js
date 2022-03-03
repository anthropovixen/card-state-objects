import React from "react";
import userimage from "./images/user.png";
import starimage from "./images/star-empty.png";
import "./App.css";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    console.log("Toggle Favorite");
  }

  return (
    <main>
      <article className="card">
        <img src={userimage} className="card--image" alt="user" />
        <div className="card--info">
          <img
            src={starimage}
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
