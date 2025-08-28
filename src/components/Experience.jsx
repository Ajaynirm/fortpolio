import React from "react";

const Experience = () => {
  const programmingImages = [
    "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/230px-Python-logo-notext.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg/120px-The_C_Programming_Language_logo.svg.png",
  ];
  const frontendImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/340px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/240px-Tailwind_CSS_Logo.svg.png",
  ];
  const backendImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/440px-Node.js_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/440px-Expressjs.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/500px-MongoDB_Fores-Green.svg.png",
    "https://miro.medium.com/v2/resize:fit:1400/1*GPQ7MDPCOdpdJSXP2f3Jjw.png",
  ];
  return (
    <>
      <div
        className="flex flex-col flex-wrap  justify-center items-center gap-16 p-10 py-32 "
        id="stack"
      >
        <div
          className="relative  p-[2px] rounded-2xl 
  bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 shadow-xl text-white hover:scale-105 transition-transform "
        >
          <div className="card-body items-center text-center rounded-2xl bg-white/10 backdrop-blur-lg">
            <h2
              className="text-3xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg"
            >
              Explore my experience
            </h2>
          </div>
        </div>

        {/* Programming */}
        <div
          className="relative  p-[2px] rounded-xl 
  bg-gradient-to-r text-white shadow-lg hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center rounded-xl ">
            <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
              Programming 
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
          {/* Java */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img
              src={programmingImages[0]}
              className="h-10 lg:h-20"
              alt="Java"
            />
          </figure>

          {/* javascript */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img
              src={programmingImages[1]}
              className="h-10 lg:h-20"
              alt="Java"
            />
          </figure>

          {/* python */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img
              src={programmingImages[2]}
              className="h-10 lg:h-20"
              alt="Java"
            />
          </figure>

          {/* c */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img
              src={programmingImages[3]}
              className="h-10 lg:h-20"
              alt="Java"
            />
          </figure>
        </div>

        <div
          className="relative  p-[2px] rounded-xl 
  bg-gradient-to-r text-white shadow-lg hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center rounded-xl">
            <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
              FrontEnd
            </h2>
          </div>
        </div>
        {/* fr end */}

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
          {/* react */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={frontendImages[0]} className="h-10 lg:h-20" alt="Java" />
          </figure>

          {/* HTML */}

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={frontendImages[1]} className="h-10 lg:h-20" alt="Java" />
          </figure>

          {/* css */}

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={frontendImages[2]} className="h-10 lg:h-20" alt="Java" />
          </figure>

          {/*  */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={frontendImages[3]} className="h-10 lg:h-20" alt="Java" />
          </figure>
        </div>
        {/* backend */}
        <div
          className="relative  p-[2px] rounded-xl 
  bg-gradient-to-r text-white shadow-lg hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center rounded-xl ">
            <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
              BackEnd
            </h2>
          </div>
        </div>
        {/* bc end */}

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
          {/* node */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[0]} className="h-10 lg:h-20" alt="Java" />
          </figure>

          {/* node end */}

          {/* express */}

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[1]} className="h-10 lg:h-20" alt="Java" />
          </figure>

          {/* Mongodb */}

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[2]} className="h-10 lg:h-20" alt="Java" />
          </figure>

          {/* mongodb end */}

          {/* api */}

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[3]} className="h-10 lg:h-20" alt="Java" />
          </figure>

          {/* api end */}
        </div>
      </div>
    </>
  );
};

export default Experience;
