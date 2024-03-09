import React, { useState } from 'react'
import '../Elements/ElementsCss/CreateUserCss.css'

export default function CreateUser() {
    const [fname,setFname]=useState("")
    const [fnameErr,setFnameErr]=useState("")
    const [email,setEmail]=useState("");
    const [emailErr,setEmailErr]=useState("");
    const [password,setPassword]=useState("");
    const [passwordErr,setPasswordErr ]=useState("");
    const [passwordConfirm,setPasswordConfirm]=useState("");
    const [phone,setPhone]=useState("")
    const [phoneErr,setPhoneErr]=useState("")
    

    const getFname=(e)=>{
        setFname(e.target.value)
        if (e.target.value.length<3){
            setFnameErr("Error Name at least 3 char")
        }else{
            setFnameErr("")
        }
    }
    const getEmail=(e)=>{
        setEmail(e.target.value)
        if (e.target.value.length<3){
            setEmailErr("Error Email at least 3 char")
        }else{
            setEmailErr("")
        }
    }
    const getPassword=(e)=>{
        setPassword(e.target.value)
        if (e.target.value.length<3){
            setPasswordErr("Error Password at least 3 char")
        }else{
            setPasswordErr("")
        }
    }
    const getPhone=(e)=>{
        setPhone(e.target.value)
        if (e.target.value.length!=11){
            setPhoneErr("Error,Phone Need 11 numbers")
        }else{
            setPhoneErr("")
        }

    }
    const getSubmit=(e)=>{
        e.preventDefault();
        if(email&&password){
            if(!emailErr&&!passwordErr){
                console.log({fname,email,password,phone})
            }
        }
       
    }
  return (
    <div className="main-contain mx-auto myLogin py-5" >
        <div className="row  mx-auto col-12 col-md-6 ">
        <form onSubmit={(e)=>{getSubmit(e)}} noValidate>
            <div className="form-group">
                <label htmlFor='fnameInput' style={{color:"white"}}>First Name</label>
                <input type="text" className='form-control' id='fnameInput'  value={fname}
                    onChange={(e)=>{
                        getFname(e);
                    }}
                    placeholder='Enter First Name'/>
                <div className='hintName' style={{color:"white"}}>
                    {fnameErr}
                </div>
            </div>
            <div className="form-group my-2">
                <label htmlFor="exampleInputEmail1" style={{color:"white"}}>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={email}
                onChange={(e)=>{
                    getEmail(e);
                }}
                placeholder="Enter email"/>
                <div className="hintEmail" style={{color:"white"}}>
                    {emailErr}
                </div>
                
            </div>
            <div className="form-group my-2">
                <label htmlFor="exampleInputPassword1" style={{color:"white"}}>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                value={password}
                onChange={(e)=>{
                    getPassword(e);
                }} placeholder="Password"/>
                <div className="hintPassword" style={{color:"white"}}>
                    {passwordErr}
                </div>
            </div>
            <div className='form-group my-2'>
                <label htmlFor='phoneInput' style={{color:"white"}} >Phone</label>
                <input type="text" className='form-control' id="phoneInput"
                value={phone}
                onChange={(e)=>{
                    getPhone(e)
                }}
                placeholder='Phone Number'/>
                <div className='hintPhone' style={{color:"white"}}>
                    {phoneErr}
                </div>

            </div>
            
            <br />
            <button type="submit" className="btn btn-primary " style={{color:"white",backgroundColor:"black",padding:"2% 10% ",marginLeft:"30%"}}>Login</button>
        </form>
        </div>
    </div>
  )
}
