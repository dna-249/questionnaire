import React, { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {
  const [bg, setBg] = useState(true)
  const [bg2, setBg2] = useState(true)
  const [bg3, setBg3] = useState(true)
  const [bg4, setBg4] = useState(true)
  const [bg5, setBg5] = useState(true)

  
  
  return (
    <>
    <div>
<img  src='/dnatech.png'  width={100} height={40}/>
</div>
<div>
{bg5? (<div><img  onClick={()=>setBg5(false)} style={{borderRadius:"5px"}} src="DNATECH LOGO-1.jpg" width={300} height={350} alt="" /> </div>
        ):(<div className='full2'><img  onClick={()=>setBg5(true)}  style={{position:"static"}}  src="DNATECH LOGO-1.jpg" width={500} height={600} alt="" /> </div>)}  
   

</div>
  <div >
    <h3   className='center' 
    style={{marginTop:"10px",fontStyle:"italic",color:' rgb(61, 31, 144)', fontWeight:'bolder'}}> SERVICES</h3>
  <div className="home">

    <h4  style={{marginTop:"10px"}}>Programming Front-End</h4>
      {bg? (<div><img  onClick={()=>setBg(false)} className='img' src="Capture2.PNG" width={150} height={100} alt="" /> </div>
        ):(<div className='full'><img  onClick={()=>setBg(true)}  style={{position:"static"}} className='img' src="Capture2.PNG" width={1500} height={400} alt="" /> </div>)}  
    <ul>
      <li >HTML</li>
      <li >CSS</li>
      <li >JavaScript</li>
    </ul>

      <h4>Advanced Front-End</h4>
      {bg2? (<div><img  onClick={()=>setBg2(false)} className='img' src="Capture.PNG" width={150} height={100} alt="" /> </div>
        ):(<div className='full'><img  onClick={()=>setBg2(true)}  style={{position:"static"}} className='img' src="Capture.PNG" width={1500} height={400} alt="" /> </div>)}  
      
    <ul>
      <li >Reactjs</li>
      <li >Tailwind CSS</li>
      <li >NextJs</li>
      </ul>
      <h4>Programming Backend</h4> 
    
      {bg3? (<div><img  onClick={()=>setBg3(false)} className='img' src="Capture3.PNG" width={150} height={100} alt="" /> </div>
        ):(<div className='full'><img  onClick={()=>setBg3(true)}  style={{position:"static"}} className='img' src="Capture3.PNG" width={1500} height={400} alt="" /> </div>)}  
   
      <ul>
        <li >Python</li>
        <li >Rest Api</li>
        <li >Flask Api</li>
        <li >Fast Api</li>
      </ul>

    <h4>Graphic Design </h4>
    {bg4? (<div><img  onClick={()=>setBg4(false)} className='img' src="Capture4.PNG" width={150} height={100} alt="" /> </div>
        ):(<div className='full'><img  onClick={()=>setBg4(true)}  style={{position:"static"}} className='img' src="Capture4.PNG" width={1500} height={400} alt="" /> </div>)}  
   
    <ul>
      <li >CorelDrew</li>
      <li >Photoshop</li>
    </ul>
  </div>
  </div>
    </>
  )
}

export default Home