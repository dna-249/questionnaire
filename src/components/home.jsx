import React, { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {
  const [bg, setBg] = useState('')
  
  const handBg = () => {
    
  
    setBg(()=> num *num)
  }
  
  
  return (
    <>
    <div>
<img onMouseEnter={handBg} src='/dnatech.png'  width={100} height={40}/>
</div>
<div>
<img  className='' src="DNATECH LOGO-1.jpg" width={300} height={350} alt="" />
</div>
  <div >
    <h3   className='center' 
    style={{fontStyle:"italic",color:' rgb(61, 31, 144)', fontWeight:'bolder'}}> SERVICES</h3>
  <div className="home">

    <h4>Programming Front-End</h4>
    <img  className='img' src="Capture2.PNG" width={150} height={100} alt="" />
    <ul>
      <li >HTML</li>
      <li >CSS</li>
      <li >JavaScript</li>
    </ul>

      <h4>Advanced Front-End</h4>
    <img  className='img' src="Capture.PNG" width={150} height={100} alt="" />
      
    <ul>
      <li >Reactjs</li>
      <li >Tailwind CSS</li>
      <li >NextJs</li>
      </ul>
      <h4>Programming Backend</h4> 
    <img  className='img' src="Capture3.PNG" width={150} height={100} alt="" />

      <ul>
        <li >Python</li>
        <li >Rest Api</li>
        <li >Flask Api</li>
        <li >Fast Api</li>
      </ul>

    <h4>Graphic Design </h4>
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