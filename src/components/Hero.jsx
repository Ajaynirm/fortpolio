import React from "react";
import toast, { Toaster } from "react-hot-toast";
import "./animations.css";
import Frames from "./Frames";

const Hero = () => {
  const handleVibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  };

  const openLeet = () => {
    toast.success("LeetCode Opening");
    window.open("https://leetcode.com/u/ajaysam397/", "_self");
  };
  const openGeeks = () => {
    toast.success("Geeks for Geeks Opening");
    window.open("https://www.geeksforgeeks.org/user/ajaysam397/", "_self");
  };
  const openGitHub = () => {
    toast.success("GitHub Opening");
    window.open("https://github.com/Ajaynirm", "_self");
  };
  const openLinkedin = () => {
    toast.success("LinkedIn Opening");
    window.open("https://www.linkedin.com/in/ajay-c-06465821a/", "_self");
  };

  return (
    <>
      <Toaster />

      <div className=" select-none" id="about">
        <div className=" text-center">
          <div className="flex  flex-col px-10 lg:pt-64 lg:px-16 gap-10">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif fade-in">
              Hello there
              <h1 className="text-4xl lg:text-5xl sm:text-5xl font-bold font-serif  animate-pulse ">
                I am Ajay
              </h1>
            </h1>

            <h2 className="text-4xl font-serif animate-bounce">
              Junior Software Developer
            </h2>
            <p className="text-sm md:text-xl lg:text-base py-2 lg:py-6 font-mono animate-pulse">
              a passionate and enthusiastic software developer eager to make an
              impact in the tech industry. With a strong foundation in both
              front-end and back-end development, I thrive in dynamic
              environments where I can contribute innovative solutions to
              complex problems.
            </p>

            <button
              className="btn  bg-indigo-700  font-serif lg:text-lg lg:mt-10"
              onClick={() => {
                toast.success("Scroll down 👇🏻");
              }}
            >
              Get Started
            </button>
            <div className="flex flex-col justify-center items-center py-32 space-y-28 space-x-2" id="profile">
              <div className="card bg-base-100  lg:w-[700px] shadow-xl border-indigo-700 border-2 border-solid">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl lg:text-4xl font-bold font-serif animate-pulse">
              Checkout my profile
            </h2>
          </div>
        </div>
              <div className="flex flex-row  justify-center items-center  gap-8 lg:gap-60 ">
                <button
                  className="  lg:h-20 lg:text-2xl font-serif animate-spin "
                  style={{ animationDuration: "3s" }}
                  onClick={openLeet}
                >
                  <img
                    className="h-12 w-15"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png"
                    alt=""
                  />
                </button>
                <button
                  className=" lg:h-20  lg:text-2xl font-serif animate-spin"
                  style={{ animationDuration: "3s" }}
                  onClick={openGeeks}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                    alt=""
                  />
                </button>
                <button
                  className="  lg:h-20 lg:text-2xl font-serif animate-spin"
                  style={{ animationDuration: "3s" }}
                  onClick={openGitHub}
                >
                  <img
                    className="h-12 w-15"
                    src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                    alt=""
                  />
                </button>
                <button
                  className=" h-15 lg:h-20 lg:text-2xl font-serif animate-spin"
                  style={{ animationDuration: "3s" }}
                  onClick={openLinkedin}
                >
                  <img
                    className="h-12 w-15"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/120px-LinkedIn_icon.svg.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
