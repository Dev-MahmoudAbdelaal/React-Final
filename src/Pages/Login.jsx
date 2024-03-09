import React, { useState } from 'react'
import '../Elements/ElementsCss/LoginCss.css'
export default function Login() {
    const [email,setEmail]=useState("");
    const [emailErr,setEmailErr]=useState("");
    const [password,setPassword]=useState("");
    const [passwordErr,setPasswordErr]=useState("");

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
    const getSubmit=(e)=>{
        e.preventDefault();
        if(email&&password){
            if(!emailErr&&!passwordErr){
                console.log({email,password})
            }
        }
       
    }
  return (
    <div className="container mx-auto myLogin py-5" >
        <div className="row  mx-auto col-12 col-md-6 ">
        <form onSubmit={(e)=>{getSubmit(e)}} noValidate>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
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
            <div className="form-group my-4">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                value={password}
                onChange={(e)=>{
                    getPassword(e);
                }} placeholder="Password"/>
                <div className="hintPassword" style={{color:"white"}}>
                    {passwordErr}
                </div>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1" style={{color:"white"}}>Check me out</label>
            </div>
            <br />
            <button type="submit" className="btn btn-primary " style={{color:"white",backgroundColor:"black",padding:"2% 10% ",marginLeft:"30%"}}>Login</button>
        </form>
        </div>
    </div>
  )
}
