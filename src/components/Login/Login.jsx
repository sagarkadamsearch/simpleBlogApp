'use client'



import React, { useRef, useState } from 'react';
import './Login.css';
import Link from 'next/link';
import { PiEyeClosedBold } from "react-icons/pi";
import { TfiEye } from "react-icons/tfi";


const init = {
    email:"",
    password:"",
}

const Login = () => {
    const [eyeOpen,setEyeOpen] = useState(false);
    const loginForm = useRef(init)


    const handleSubmit = (e)=>{
        e.preventDefault(); 

        fetch('/api/user/login',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(loginForm.current)
        })
        .then((res)=>{
              return res.json();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>console.log(error));
    }

    return (
        <div className='login-logout-Component'>
            <form action="">
                <label htmlFor="email">Email:</label>
                <input onChange={(e)=>loginForm.current.email=e.target.value} type="text" placeholder='Enter your email here!' />
                <label htmlFor="password">Password:</label>
                <div className='login-logout-Component-password'>
                 <input onChange={(e)=>loginForm.current.password=e.target.value} type={eyeOpen?"text":"password"} placeholder='Enter you password here!' />
                 {eyeOpen ? <TfiEye className='eye' size={20} onClick={()=>setEyeOpen(false)}/>: <PiEyeClosedBold className='eye' size={20} onClick={()=>setEyeOpen(true)}/>}
                </div>
                <div className='login-logout-Component-loginBtn'>
                   <button onClick={handleSubmit}>Login</button>
                </div>
            </form>
            <div className='login-logout-Component-text'>
                <p>You don't have an account! <span><Link href={'/user/signup'}>Signup</Link></span></p>
            </div>
        </div>
    );
};

export default Login;