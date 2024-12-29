import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const handleStart = () => {
    toast.error("We are working on that!...", {
      position: "top-center", // You can choose: top-right, top-center, etc.
      autoClose: 2000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark", // Options: light, dark, colored
    });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen" id="about">
        <div className="hero-content text-center">
          <div className="min-w-sm">
            <h1 className="text-5xl font-bold">
              Hello there <br />I am Ajay
            </h1>
            <p className=" py-7">
              a passionate and enthusiastic full-stack software developer eager
              to make an impact in the tech industry. With a strong foundation
              in both front-end and back-end development, I thrive in dynamic
              environments where I can contribute innovative solutions to
              complex problems.
            </p>
            <button className="btn btn-primary" onClick={handleStart}>
              Get Started
            </button>

            <div className="flex justify-center flex-wrap  p-14 gap-10">
                    <button className="btn btn-outline btn-primary" onClick={()=>{window.open("https://leetcode.com/u/ajaysam397/","_self")}}>Leetcode</button>
                    <button className="btn btn-outline btn-secondary" onClick={()=> {window.open("https://github.com/Ajaynirm","_self")}}>Github</button>
                    <button className="btn btn-outline btn-accent" onClick={()=> {window.open("https://www.linkedin.com/in/ajay-c-06465821a/","_self")}}>Linkedin</button>
                </div>
          </div>
                
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Hero;
