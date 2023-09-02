import "./App.css";
import React from "react";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import otherLogo from "./images/menu-top-xs.png";
import SmallCard from "./SmallCard.jsx";

import logo1 from "./images/icon1.png";
import logo2 from "./images/icon2.png";
import logo3 from "./images/icon3.png";
import logo4 from "./images/icon4.png";

const smallCardsData = [
  {
    logo: logo1,
    text: "Lorem ipsum text 1",
  },
  {
    logo: logo2,
    text: "Lorem ipsum text 2",
  },
  {
    logo: logo3,
    text: "Lorem ipsum text 3",
  },
  {
    logo: logo4,
    text: "Lorem ipsum text 4",
  },
];
function App() {
  return (
    <div className="App">
      <div className="main-card">
        <div className="left-card">
          <div className="logos">
            <img
              src={ironhackLogo}
              alt="Ironhack Logo"
              className="ironhack-logo"
            />
          </div>
          <div className="texts">
            <h1>Say hello to ReactJS</h1>
            <p>Lorem ipsum dolor sit amet...</p>
            <button className="awesome-button">Awesome</button>
          </div>
        </div>
        <div className="right-card">
          <img src={otherLogo} alt="Other Logo" className="other-logo" />
        </div>
      </div>
      <div className="cards">
        {smallCardsData.map((card, index) => (
          <SmallCard key={index} logo={card.logo} text={card.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
