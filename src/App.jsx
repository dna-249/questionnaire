import { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./components/chat";
const socket = io.connect("http://localhost:3001");

function App() {
  const [chat, setChat] = useState(true);
  const [chat2, setChat2] = useState(true);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [inputs, setInputs] = useState(['']);
  const [color, setColor] = useState('');
  const [summit, setSummit] = useState('');

  const handleSummit = () => {
   if(input == ''||input2 == '' ||input3 == '') {
    setInput(''),
    setInput2(''),
    setInput3('')
    alert("you can't summit incomplete response data")
   } else {
    const nur ={
      Fullname:input,Religion:input2,Response:input3
    }
    setInputs(()=> [nur]),
    setChat2(()=> false )
   }
   
  }
  
  return (
    <>{chat? (
      <div>{chat2? (<div>
      <div className="grid">
        <h3 className="head">Questionnaire </h3>
        <h4 style={{fontSize:"15px"}}> is Chritmas meat <span style={{color:"red"}}>Haram</span>  or <span style={{color:"green"}}>Halal</span>?</h4>
        <input className="input" type="text" onChange={(e)=>setInput(e.target.value)} placeholder="your full name..." /> <br />
        <br />
        <input type="text" className="input" onChange={(e)=>setInput2(e.target.value)} placeholder="your religion..." /> <br />
        <br />
        <p style={{fontSize:"15px"}}>
          Your Comment/Response: <br />
          <br />
          <textarea className="input" onChange={(e)=>setInput3(e.target.value)} placeholder="write your comment..." cols={20} rows={5} /> <br /> <br />
          <button className="button"  onClick={()=>handleSummit()}>summit</button>
        </p>
      </div>
      <div className="grid">survey by <span style={{color:"blue"}}>NURAALHAJI</span> <span onClick={()=>setChat(false)}>...</span></div>
    </div>):(
       <div className="grid2"> 
       <h3> Questionnaire has been successfully summitted.Thanks  </h3>
        {inputs.map(input =><h4>Fullname:  {input.Fullname} <br />Religion:   {input.Religion} <br /> Response:  {input.Response}</h4>)}
      <h5>your response is safe and will be useful utilized  </h5>
      <h5 className="grid">survey by <span style={{color:"blue"}}>NURAALHAJI</span> <span onClick={()=>setChat(false)}>...</span> </h5>
    </div>)}
    </div>
                   ):(
                    <div>
                      <Chat />
                    </div>
                   )}
    </>
  );
}

export default App;
