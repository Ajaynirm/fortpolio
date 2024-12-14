import React from 'react'
import { useState } from 'react';
const Navbar = () => {
    const [loading,setLoading]=useState(true); 
  return (
    <>



<div className="navbar bg-base-300 rounded-box">
<div className="avatar">
  <div className="w-20 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
  <div className="flex-1 px-2 lg:flex-none">
  <span className="loading loading-infinity loading-lg text-blue-400"></span>
    <a className="text-lg font-bold">Ajay C</a>
    
  </div>

  
  <div className="flex flex-1 justify-end px-2">
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
    <div className="flex items-stretch">

    <ul className="menu menu-horizontal px-2">
    
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>About</a></li>
            <li><a>stack</a></li>
            <li><a>project</a></li>
            <li><a>work</a></li>
            <li><a>contact</a></li>
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