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
    "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*o5FmjKTPdJTbhGE2MIjo6w.jpeg",
    "https://jordankasper.com/images/nodejs.png",
    "https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_oXXcM_0u5VT-Xe2pfv-rs8bFzHcXtLbdg&s",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/500px-MongoDB_Fores-Green.svg.png",
    "https://dfdmyvckxgqn5.cloudfront.net/_app/immutable/assets/building-elegant-rest-apis.d8f4cbc6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNPtcQZ5blY_8dZM4vjHNlcMhn1oyd7dG3g&s",
    "https://sdemian.com/images/working-with-kafka-consumers.jpg",
    "https://cdn.worldvectorlogo.com/logos/docker.svg"

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
              className="text-2xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg"
            >
              Explore my experience
            </h2>
          </div>
        </div>

        {/* Programming */}
        <div
          className="relative  p-[2px] rounded-xl 
  bg-gradient-to-r  shadow-lg hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center rounded-xl ">
            <h2 className="text-xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
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
  bg-gradient-to-r  shadow-lg hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center rounded-xl">
            <h2 className="text-xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
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
  bg-gradient-to-r  shadow-lg hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center rounded-xl ">
            <h2 className="text-xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
              BackEnd
            </h2>
          </div>
        </div>
        


        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">


          {/* Spring boot */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[0]} className="h-10 lg:h-20" alt="Java" />
          </figure>

       

          {/* Node */}

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[1]} className="h-10 lg:h-20" alt="Java" />
          </figure>

       
          {/* express */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[2]} className="h-10 lg:h-20" alt="Java" />
          </figure>

          {/* MySql */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[3]} className="h-10 lg:h-20" alt="Java" />
          </figure>

             {/* Mongodb */}

         

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[4]} className="h-10 lg:h-20" alt="Java" />
          </figure>

           {/* api */}
          

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[5]} className="h-10 lg:h-20" alt="Java" />
          </figure>

         {/* redis */}
          

          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[6]} className="h-10 lg:h-20" alt="Java" />
          </figure>

         
          {/* kafka */}
          <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[7]} className="h-10 lg:h-20" alt="Java" />
          </figure>

           {/* Docker */}
           <figure
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md 
  hover:scale-110 hover:shadow-indigo-500/40 transition-transform"
          >
            <img src={backendImages[8]} className="h-10 lg:h-20" alt="Java" />
          </figure>
        
        </div>
      </div>
    </>
  );
};

export default Experience;
