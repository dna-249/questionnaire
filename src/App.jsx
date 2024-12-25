import { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <>
      <div className="grid">
        <h3 className="head">Questionnaire </h3>
        <h4 style={{fontSize:"15px"}}> is Chritmas meat <span style={{color:"red"}}>Haram</span>  or <span style={{color:"green"}}>Halal</span>?</h4>
        <input className="input" type="text" placeholder="your full name..." /> <br />
        <br />
        <input type="text" className="input" placeholder="your religion..." /> <br />
        <br />
        <p style={{fontSize:"15px"}}>
          Your Comment/Response: <br />
          <br />
          <textarea className="input" placeholder="write your comment..." cols={20} rows={5} /> <br /> <br />
          <button className="button">summit</button>
        </p>
      </div>
    </>
  );
}

export default App;
