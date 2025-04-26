
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 



const App = () => {
  
  const [Circle,setfirst] = useState(0) 
  const random = gsap.utils.random(-300,300,100)
console.log(random)
  const gsapRef = useRef()
  const container = useRef()
  useGSAP(()=>{
    gsap.from(".Box",{
      x:Circle,
      rotate:550,
      duration:1, 
      delay:0.5,
    })
  },[Circle])

  

  return (
    <div>
    
    <main>
    <button   onClick={()=>{
       setfirst(random)
    }}>Animate</button>
    <div className="Box"></div>
    </main>
     
    </div>
  )
}

export default App

