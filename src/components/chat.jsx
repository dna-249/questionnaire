import { useState,useEffect } from 'react'
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001" )

function App() {
  const [input, setInput]= useState('')
  const [show, setShow]= useState(false)
  const [show2, setShow2]= useState(false)
  const [inputs, setInputs]= useState([''])
  const [join, setJoin]= useState('')
  const [join2, setJoin2]= useState('')
  const [joins, setJoins]= useState([''])

const handleJoin =()=>{
  setShow(()=>true)
  socket.emit('join', { join:join||join2})
  if(join !==''){
    setShow2(()=> true)
  }
  
}

  const handle = () => {
    handleJoin()
  const update = {
    input:input,
    join:join || join2
  }
  if(input !== ""){
    setInputs((inputs)=> [update,...inputs])
   socket.emit("send", update)
  }
 }
 
 
  useEffect(()=>{
  socket.on("news",(data)=>{
      const nur = {
        dat:data.input
      }
    setInputs((inputs)=> [nur,...inputs])
  })
  },[socket])

  useEffect(()=>{
    socket.on('broadcast',(data)=>{
    setJoins((joins)=>[...joins, data])
  })
  
  },[socket])
 
  return (
    <>
      {!show? (
      <div className="login">
      <div>
        <h1>LesChat!</h1>
        <div >
          <input className="username" type="text"
           placeholder='username...'  value={join2 ||join || null}
         onChange={(e)=>setJoin(e.target.value)}/>
        </div>

        <div >
          <input className="username2" type="text"
          placeholder='password...'onChange={(e)=>setInput(e.target.value)} />
        </div>
              <button  className='button' onClick={()=>handleJoin()}> login</button>
      </div>
      </div>
     ):(
      
      <div >
        {!show2? (
        <div >
          
            <div>{joins?.map((nur)=>{ return(
              <div   onClick={()=>setJoin2(()=>nur)}>
               
                {nur && <div className='friend'>

                  <h3>{nur.toUpperCase().slice(0,1)} </h3>
                <h4 onClick={()=>setShow2(()=>true)}>  {nur}</h4></div>}
            
            </div>  )}) }</div>

        </div>

        ):(

          <div className="chatRoom" >
            <div>
        <input  type="text" placeholder='send message...'
             onChange={(e)=>setInput(e.target.value)}
         />
        <button onClick={handle}>text</button> 
        <button onClick={()=> setShow2(()=> false)}>friend</button> 
      
        </div>
          
         <div > {inputs.map((inp,index)=>{ if (input || inputs !== ""){
          return(
              <div  className='chat' key={index} >
              {inp.dat &&  <div id='right'> {inp.dat}</div>}
             {inp.input&&<div id='left'>{inp.input}</div>} 
             </div>
            ) } else return (
              <div className='chat'> LesChat </div>
            ) }
         )}
         </div>
         </div>
          )}

        </div>


        )}
    </>
  )
}

export default App
