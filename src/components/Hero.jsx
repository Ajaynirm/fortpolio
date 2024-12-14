import React from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const handleStart=()=> {
    toast.error("Something went wrong!", {
      position: "top-center", // You can choose: top-right, top-center, etc.
      autoClose: 2000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark", // Options: light, dark, colored
    });
  }
  return (
    <>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there <br />I am Ajay</h1>
      <p className="py-6">
      a passionate and enthusiastic full-stack software developer eager to make an impact in the tech industry. 
      With a strong foundation in both front-end and back-end development, 
      I thrive in dynamic environments where I can contribute innovative solutions to complex problems.
      </p>
      <button className="btn btn-primary" onClick={handleStart}>Get Started</button>
    </div>
  </div>
</div>
<ToastContainer />
    </>
  )
}

export default Hero