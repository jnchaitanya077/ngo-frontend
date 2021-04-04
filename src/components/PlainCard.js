import React, { useState } from "react";

function PlainCard(props) {
  const [shadow, setShadow] = useState({});

  const handleEnter = () => {
    setShadow({
      boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
      transition: "box-shadow 0.3s"
    });
  }

  const handleLeave = () => {
    setShadow({});
  }

  return (
    <div className="col" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className={`card h-100 odd rounded-5`} style={shadow}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-muted">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default PlainCard;
