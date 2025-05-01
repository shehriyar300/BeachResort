import React from "react";
import "../Components/HomeStyle.css";
import { Link } from "react-router-dom";
import Home_Services from "./Home_Services";    
import Featured from "./Featured";
function Home() {
  return (
    <>
      <div className="home">
        <div className="card">
          <h1>Luxurious Rooms</h1>
          <p>Deluxe Rooms Starting at $299</p>
          <Link to="/rooms">
            <button className="btn">Our Rooms</button>
          </Link>
        </div>
      </div>
        <Home_Services />
      <Featured/>
    </>
  );
}

export default Home;
