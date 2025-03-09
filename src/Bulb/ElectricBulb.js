import React, { useState } from "react";
import "./ElectricBulb.css"; // Import the CSS file

const ElectricBulb = () => {
  const [light, setLight] = useState("transition"); // Initial state is "transition"

  return (
    <div className="main-container">
      <h1 style={{color:"red"}}>Bulb</h1>

      <div className="container">
        <div>
          <button className="red-btn" onClick={() => setLight("red")}>
            Red Light
          </button>
          <button className="green-btn" onClick={() => setLight("green")}>
            Green Light
          </button>
        </div>

        <div className="bulb-container">
          {light === "red" && <img className="bulb-img" src="./RedLight.jpeg" alt="Red Light" />}
          {light === "green" && <img className="bulb-img" src="./Greenlight.jpg" alt="Green Light" />}
          {light === "transition" && <img className="bulb-img" src="./YellowLight.jpg" alt="Transition Light" />}
        </div>
      </div>
    </div>
  );
};

export default ElectricBulb;