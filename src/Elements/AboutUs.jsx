import React from 'react'
import './ElementsCss/MainPageCss.css'

export default function AboutUs() {
  return (
        
        
        <div className='d-flex  p-4 myContainer'>
            <div className="banner2 banner ml-4 ">
                <p className='' style={{color:"black" ,right:"5%" ,textAlign:"right"}}>Pre-order Games <br />You Can Be Beta </p>
                
                <img src="banner2.jpg" alt=""/> 
                <button className='' style={{backgroundColor:"black",left:"70%",color:"white"}}>Show Now</button>
            </div>
            <div className='banner3 banner '>
                <p className='' style={{color:"white",textAlign:"left",left:"5%"}}>Buy Games <br/>Before Release </p>
                <img src="banner3.jpg" alt="" />
                <button style={{backgroundColor:"white",left:"5%",color:"black"}}>Show Now</button>
            </div>
        </div>
    
  )
}
