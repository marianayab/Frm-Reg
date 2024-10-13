import React from "react";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import welcome from "./wel.json";
import "./styles/Home.css";

const Home = () => {
  const location = useLocation();
  const { name } = location.state || {}; // Destructure the name from the state

  return (
    <div className="d-flex home vh-100 justify-content-center align-items-center">
      <div className="comp">
      <Lottie animationData={welcome} />
      
        <h1 style={{ fontSize: "70px" }}>
          <i>{name}!</i>
        </h1>{" "}
        {/* Display the user's name */}
      </div>
    </div>
  );
};

export default Home;
