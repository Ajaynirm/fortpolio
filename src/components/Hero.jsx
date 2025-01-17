import React from "react";
import toast,{Toaster} from "react-hot-toast";
import './animations.css';

const Hero = () => {

  
  const handleVibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate(100); 
    }
  }

  
  const openLeet = ()=>{
    toast.success("LeetCode Opening");
    window.open("https://leetcode.com/u/ajaysam397/","_self");
  }
  const openGeeks = ()=>{
    toast.success("Geeks for Geeks Opening");
    window.open("https://www.geeksforgeeks.org/user/ajaysam397/","_self");
  }
  const openGitHub = ()=>{
    toast.success("GitHub Opening");
    window.open("https://github.com/Ajaynirm","_self");
  }
  const openLinkedin = ()=>{
    toast.success("LinkedIn Opening");
    window.open("https://www.linkedin.com/in/ajay-c-06465821a/","_self");
  }

  return (
    <>
    <Toaster />

    
    
      <div className=" select-none" id="about">
        <div className=" text-center">
          <div className="flex  flex-col px-10 py-32 lg:py-32 lg:pt-64 lg:px-16 gap-10">
            
            <h1 className="text-5xl font-bold font-serif fade-in">
              Hello there
              <h1 className="text-5xl sm:text-5xl font-bold font-serif  animate-pulse ">
             I am Ajay
            </h1>
            </h1>
            
            <h2 className="text-4xl font-serif animate-bounce">Junior Software Developer</h2>
            <p className="text-base md:text-xl lg:text-base py-2 lg:py-6 font-mono animate-pulse">
              a passionate and enthusiastic software developer eager
              to make an impact in the tech industry. With a strong foundation
              in both front-end and back-end development, I thrive in dynamic
              environments where I can contribute innovative solutions to
              complex problems.
            </p>

            <button className="btn btn-primary font-serif lg:text-lg lg:mt-10" onClick={()=>{toast.success("Scroll down 👇🏻")}}>
              Get Started
            </button>
            <div className="flex flex-col justify-center items-center py-32 space-y-28 space-x-2">
                <h2 className="text-5xl font-bold font-serif text-center animate-pulse">Checkout my profile</h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-2 space-x-2 gap-5">
                    <button className="btn btn-outline btn-primary   lg:text-2xl font-serif " onClick={openLeet}>Leetcode</button>
                    <button className="btn btn-outline btn-primary  lg:text-2xl font-serif" onClick={openGeeks}>Geeks</button>
                    <button className="btn btn-outline btn-primary lg:text-2xl font-serif" onClick={openGitHub}>Github</button>
                    <button className="btn btn-outline btn-primary  lg:text-2xl font-serif" onClick={openLinkedin}>Linkedin</button>

                    
                </div>
           </div>
          </div>
          
         
                
        </div>
      </div>
      
    </>
  );
};

export default Hero;
