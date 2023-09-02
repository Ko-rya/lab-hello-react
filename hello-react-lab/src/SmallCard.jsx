import React from "react";

function SmallCard({ logo, text }) {
  return (
    <div className="small-card">
      <img src={logo} alt="Small Card Logo" className="small-card-logo" />
      <p>{text}</p>
    </div>
  );
}

export default SmallCard;
