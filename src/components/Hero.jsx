import React from "react";
import toast,{Toaster} from "react-hot-toast";


const Hero = () => {
  const handleStart = () => {
    toast.error("We are working on that!...");
  };
  const openLeet = ()=>{
    toast.loading("Opening LeetCode...");
    window.open("https://leetcode.com/u/ajaysam397/","_self");
  }
  const openGitHub = ()=>{
    toast.loading("Opening GitHub...");
    window.open("https://github.com/Ajaynirm","_self");
  }
  const openLinkedin = ()=>{
    toast.loading("Opening LinkedIn...");
    window.open("https://www.linkedin.com/in/ajay-c-06465821a/","_self");
  }

  return (
    <>
    <Toaster/>
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
                    <button className="btn btn-outline btn-primary" onClick={openLeet}>Leetcode</button>
                    <button className="btn btn-outline btn-secondary" onClick={openGitHub}>Github</button>
                    <button className="btn btn-outline btn-accent" onClick={openLinkedin}>Linkedin</button>
                </div>
          </div>
                
        </div>
      </div>
      
    </>
  );
};

export default Hero;
