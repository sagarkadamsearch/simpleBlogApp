'use client'

import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    const router = useRouter();

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <p>Sagar's Website</p>
            </div>
            <div className='navbar-links'>
                <p onClick={()=>router.push('/')}>Home</p>
                <p onClick={()=>router.push('/blog/blog-list')}>Blog-List</p>
                <p onClick={()=>router.push('/blog/blog-list')}>Self-Blogs</p>
                <p onClick={()=>router.push('/blog/add-blog')}>Create Blog</p>
            </div>
            <div className='navbar-buttons'>
              <Link href={'/user/login'}><button>Login</button></Link> 
               <Link href={'/user/signup'}><button>SignUp</button></Link>
            </div>
        </div>
    );
};

export default Navbar;