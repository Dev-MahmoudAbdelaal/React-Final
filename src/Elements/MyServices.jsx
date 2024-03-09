import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { Ri24HoursFill } from "react-icons/ri";
import styles from './styles.module.css'
export default function () {
  return (
    <div className='d-flex  mx-auto   ' style={{width:"fit-content",marginBottom:"20px"}}>
        <div className='mx-5 my-2 px-5'>
            <FaShippingFast className={styles.iconeStyle} color='primary'>  </FaShippingFast><span style={{color:"white" ,marginLeft:"10px"}}>FREE SHIPPING & RETURN</span>
            
        </div>
        <hr className='mt-1' style={{color:"white", height:"50px",width:"2px",border:"1px solid white"}} />
        <div className='mx-5 my-2 px-5'>
            <AiFillDollarCircle className={styles.iconeStyle} color='primary'>  </AiFillDollarCircle><span style={{color:"white",marginLeft:"10px"}}>MONEY BACK GUARANTEE</span>
            
        </div>
        <hr className='mt-1' style={{color:"white", height:"50px",width:"2px",border:"1px solid white"}} />
        <div className='mx-5 my-2 px-5'>
            <Ri24HoursFill className={styles.iconeStyle} ></Ri24HoursFill><span style={{color:"white",marginLeft:"10px"}}>ONLINE SUPPORT 24H</span>
            
        </div>
    </div>
  )
}
