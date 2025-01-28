import React from 'react'
import { useState } from 'react';
const Navbar = () => {
    const [loading,setLoading]=useState(true); 
    const img1="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
    const img2="./"
  return (
    <>



<div className="  top-0 left-0 w-full bg-violet-700 text-white shadow-md z-50 navbar bg-base-300 ">
<div className="avatar">
  {/* <div className="w-16  rounded-full">
    <img src="./" alt='profile' />
  </div> */}
</div>
  <div className="flex-1 px-2 lg:flex-none">
 
  <span className="loading loading-ring loading-lg "></span>
    <a className="text-lg font-bold font-mono cursor-progress">Ajay C</a>
    
  </div>

  

  
  <div className="flex flex-1 justify-end px-2">
  <label className="grid cursor-pointer place-items-center">
  <input
    type="checkbox"
    value="light"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
    <div className="flex items-stretch">

    <ul className="menu menu-horizontal px-2">
    
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a href='#about'>About</a></li>
            <li><a href='#stack'>stack</a></li>
            <li><a href='#project'>project</a></li>
            <li><a href='#contact'>contact</a></li>
          </ul>
        </details>
      </li>
    </ul>
      
     
  </div>
</div>
   </div>
    
    </>
  )
}

export default Navbar