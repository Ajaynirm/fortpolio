import React from "react";
import toast,{Toaster} from "react-hot-toast";
import './animations.css';

const Hero = () => {

  
  const handleVibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate(1000); 
    }
  }

  const handleStart = () => {
    toast.success("Scroll Down !!!");
  };
  const openLeet = ()=>{
    toast.success("LeetCode Opened...");
    window.open("https://leetcode.com/u/ajaysam397/","_self");
  }
  const openGitHub = ()=>{
    toast.success("GitHub Opened...");
    window.open("https://github.com/Ajaynirm","_self");
  }
  const openLinkedin = ()=>{
    toast.success("LinkedIn Opened ...");
    window.open("https://www.linkedin.com/in/ajay-c-06465821a/","_self");
  }

  return (
    <>
    <Toaster/>

    
    
      <div className="sm:pt-28 lg:pt-48" id="about">
        <div className=" text-center">
          <div className="flex  flex-col p-16 min-w-sm gap-10">
            <h1 className="text-5xl font-bold font-serif fade-in">
              Hello there <br />I am Ajay
            </h1>
            <h2 className="text-4xl font-serif animate-bounce">Junior Software Developer</h2>
            <p className=" py-7 font-mono animate-pulse">
              a passionate and enthusiastic software developer eager
              to make an impact in the tech industry. With a strong foundation
              in both front-end and back-end development, I thrive in dynamic
              environments where I can contribute innovative solutions to
              complex problems.
            </p>
            <button className="btn btn-primary font-serif " onClick={handleVibrate}>
              Get Started
            </button>
          </div>
          <div className="flex flex-row md:flex-row justify-center items-center space-y-0 space-x-4">
                    <button className="btn btn-outline btn-primary px-2 py-1 text-sm font-serif " onClick={openLeet}>Leetcode</button>
                    <button className="btn btn-outline btn-secondary px-2 py-1 text-sm font-serif" onClick={openGitHub}>Github</button>
                    <button className="btn btn-outline btn-accent px-2 py-1 text-sm font-serif" onClick={openLinkedin}>Linkedin</button>
                </div>
                
        </div>
      </div>
      
    </>
  );
};

export default Hero;
