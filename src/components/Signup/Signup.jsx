'use client'



import React, { useRef, useState } from 'react';
import './Signup.css';
import { PiEyeClosedBold } from "react-icons/pi";
import { TfiEye } from "react-icons/tfi";
import Link from 'next/link';


const init = {
    name:"",
    surname:"",
    email:"",
    password:""
}

const Logout = () => {
  
    const [eyeOpen,setEyeOpen] = useState(false);
    const signupForm = useRef(init);


    const handleFormSubmit = (e)=>{

        e.preventDefault(); 

        fetch('/api/user/create',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(signupForm.current)
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
                <div className='login-logout-Component-grid'>
                    <div>
                       <label htmlFor="">Name</label>
                       <input onChange={(e)=>signupForm.current.name=e.target.value} type="text" placeholder='Enter your name here!' />
                    </div>
                    <div>
                       <label htmlFor="">Surname</label>
                       <input onChange={(e)=>signupForm.current.surname=e.target.value} type="text" placeholder='Enter your surname here!' />
                    </div>
                </div>
                <label htmlFor="email">Email:</label>
                <input onChange={(e)=>signupForm.current.email=e.target.value} type="email" placeholder='Enter your email here!' />
                <label htmlFor="password">Password:</label>
                <div className='login-logout-Component-password'>
                 <input onChange={(e)=>signupForm.current.password=e.target.value} type={eyeOpen?"text":"password"} placeholder='Enter you password here!' />
                 {eyeOpen ? <TfiEye className='eye' size={20} onClick={()=>setEyeOpen(false)}/>: <PiEyeClosedBold className='eye' size={20} onClick={()=>setEyeOpen(true)}/>}
                </div>
                
                <div className='login-logout-Component-loginBtn'>
                   <button onClick={handleFormSubmit}>
                      Create account
                   </button>
                </div>
            </form>
            <div className='login-logout-Component-text'>
                <p>Already you have an account! <span><Link href={'/user/login'}>Login</Link></span></p>
            </div>
        </div>
    );
};

export default Logout;