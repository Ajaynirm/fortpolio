import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Hero = () => {
  const profileLinks = [
    "https://leetcode.com/u/ajaysam397/",
    "https://www.geeksforgeeks.org/user/ajaysam397/",
    "https://github.com/Ajaynirm",
    "https://www.linkedin.com/in/ajay-c-06465821a/",
  ];
  

  const openLeet = () => {
    toast.success("LeetCode Opening");
    window.open(profileLinks[0], "_self");
  };
  const openGeeks = () => {
    toast.success("Geeks for Geeks Opening");
    window.open(profileLinks[1], "_self");
  };
  const openGitHub = () => {
    toast.success("GitHub Opening");
    window.open(profileLinks[2], "_self");
  };
  const openLinkedin = () => {
    toast.success("LinkedIn Opening");
    window.open(profileLinks[3], "_self");
  };

  return (
    <>
      <Toaster />

      <div className=" select-none" id="about">
        <div className=" text-center">
          <div className="flex  flex-col px-10 pt-20 lg:pt-32 lg:px-16 gap-10">
            <h1 className="text-5xl font-bold font-serif fade-in">
              Hello there
            </h1>
            <h2 className="text-4xl font-extrabold bg-gradient-to-r font-serif  from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent  tracking-wide animate-bounce">
              I am Ajay
            </h2>

            <motion.h2
              className="text-4xl font-serif"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Junior Software Developer
            </motion.h2>

            <p className="text-sm md:text-xl lg:text-base py-2 lg:py-6 font-mono">
              I’m a software developer with hands-on experience building
              scalable web applications and backend systems. Skilled in both{" "}
              <strong
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    bg-clip-text text-transparent font-bold  "
              >
                Java Spring Boot, MYSQL, AWS
              </strong>{" "}
              and the{" "}
              <strong className="text-emerald-400 font-bold  drop-shadow-md">
                MERN stack
              </strong>
              , I enjoy designing solutions that are clean, efficient, and
              user-focused. I’ve worked on projects ranging from{" "}
              <strong className="text-orange-400 font-bold  drop-shadow-md">
                real-time seat booking with WebSockets
              </strong>{" "}
              to full-stack applications, and I’m constantly sharpening my
              problem-solving skills on{" "}
              <strong className="text-yellow-400 font-bold animate-pulse">
                LeetCode
              </strong>{" "}
              and{" "}
              <strong className="text-green-400 font-bold animate-pulse">
                GeeksforGeeks
              </strong>
              . My goal is to craft software that not only works but also makes
              an impact.
            </p>

            <button
              className=" bg-indigo-700 text-white font-serif lg:text-lg lg:mt-10 animate-bounce p-2"
              onClick={() => {
                toast.success("Scrolling down 👇🏻");
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
            >
              Get Started
            </button>


            <div
              className="flex flex-col justify-center items-center py-32 space-y-28 space-x-2"
              id="profile"
            >
              <div
                className="relative lg:w-[700px] p-[2px] rounded-2xl 
  bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 shadow-xl hover:scale-105 transition-transform"
              >
                <div className="card-body items-center text-center rounded-2xl bg-white/10 backdrop-blur-lg">
                  <h2
                    className="text-2xl lg:text-4xl font-bold font-serif 
      text-white 
      bg-clip-text text-transparent "
                  >
                    Check out my Profile
                  </h2>
                </div>
              </div>

              <div className="flex flex-row  justify-center items-center  gap-20 lg:gap-40 ">
                <button
                  className="  lg:h-20 lg:text-2xl font-serif hover:animate-spin "
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
                  className=" lg:h-20  lg:text-2xl font-serif hover:animate-spin"
                  style={{ animationDuration: "3s" }}
                  onClick={openGeeks}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                    alt=""
                  />
                </button>
                <button
                  className="  lg:h-20 lg:text-2xl font-serif hover:animate-spin"
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
                  className=" h-15 lg:h-20 lg:text-2xl font-serif hover:animate-spin"
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
