import React from "react";
import { Link } from "react-router-dom";
import "./RoomsStyle.css";
function Return() {
  return (
    <>
      <div className="return">
        <div className="return_card">
          <h1>Return Home</h1>
          <Link to="/">
            <button className="btn">Return Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Return;
