import Header from "./partials/Header";
import Main from "./partials/Main";
import React from "react";
import './App.css'

// eslint-disable-next-line
export default () => {
  return (
    <div className='container'>
      <div className="glow">
        <span className="glowythingy"></span>
      </div>

      {/* <div className="glowing">
        <span style={{ "--i": "1" }}></span>
      </div> */}
      <Header />
      <Main />
    </div>
  )
}
