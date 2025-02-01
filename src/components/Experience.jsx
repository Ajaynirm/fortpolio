import React from "react";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap  justify-center items-center gap-16 p-10 py-32 " id="stack" >

       

        <div className="card bg-base-100  lg:w-[700px] shadow-xl border-indigo-700 border-2 border-solid">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl lg:text-4xl font-bold font-serif animate-pulse">
            Explore my experience
            </h2>
          </div>
        </div>
        {/* Programming */}
        <div className="card bg-base-100 h-32 w-64 shadow-xl animate-pulse  border-indigo-700 border-2 border-solid">
          <div className="card-body items-center text-center">
            <h2 className=" text-xl lg:text-3xl font-bold font-serif">
              Programming Languages
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
        {/* Java */}
        <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/242px-Java_programming_language_logo.svg.png"
              className="rounded-xl h-10 lg:h-28"
            />
          </figure>
          {/* Java end */}
          {/* javascript */}
          <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              className="rounded-xl h-10 lg:h-28"
            />
          </figure>
          {/* javascript end */}
{/* python */}
<figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/230px-Python-logo-notext.svg.png"
              className="rounded-xl h-10 lg:h-28"
            />
          </figure>
          {/* python end */}
          {/* c */}
          <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg/120px-The_C_Programming_Language_logo.svg.png"
              className="rounded-xl h-10 lg:h-28"
            />
          </figure>
          {/* c end */}
      </div>   
      
        <div className="card bg-base-100 h-24 w-64 shadow-xl animate-pulse pb-20 border-indigo-700 border-2 border-solid">
          <div className="card-body items-center text-center">
            <h2 className=" text-xl lg:text-3xl font-bold font-serif">
              Frontend
            </h2>
          </div>
        </div>
        {/* fr end */}

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-20">

          {/* react */}
          <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png"
              className="rounded-xl h-10 lg:h-28"
            />
          </figure>
          {/* react end */}

         

          {/* HTML */}

          <figure className="px-5 pt-10 animate-bounce "  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/340px-HTML5_logo_and_wordmark.svg.png"
              alt="html"
              className="rounded-xl h-10 lg:h-32"
            />
          </figure>

          {/* html end */}

          {/* css */}

          <figure className="px-5 pt-10  animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"
              alt="Shoes"
              className="rounded-xl h-10 lg:h-28 "
            />
          </figure>

          {/* css end */}
          {/*  */}
          <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/240px-Tailwind_CSS_Logo.svg.png"
              alt="Shoes"
              className="rounded-xl h-6 lg:h-24"
            />
          </figure>
        </div>
        {/* backend */}
        <div className="card bg-base-100 w-64 shadow-xl border-indigo-700 border-2 border-solid">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl lg:text-3xl font-bold font-serif animate-pulse">
              Backend
            </h2>
          </div>
        </div>
        {/* bc end */}

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
          {/* node */}
          <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/440px-Node.js_logo.svg.png"
              alt="Shoes"
              className="rounded-xl h-6 lg:h-24"
            />
          </figure>

          {/* node end */}

          {/* express */}

          <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              // src="https://externlabs.com/blogs/wp-content/uploads/2021/11/ExpressJS-Library.jpg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/440px-Expressjs.png"
              alt="Shoes"
              className="rounded-xl h-6 lg:h-16"
            />
          </figure>

          {/* express end */}

          {/* Mongodb */}

          <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              // src="https://media.licdn.com/dms/image/D4D12AQETgv5fMiYEXA/article-cover_image-shrink_720_1280/0/1677609185621?e=2147483647&v=beta&t=4Hu56lmQmUTtVSMFDKfipqVq9U1jo41sIJpib0lQoCo"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/500px-MongoDB_Fores-Green.svg.png"
              alt="Shoes"
              className="rounded-xl h-6 lg:h-16"
            />
          </figure>

          {/* mongodb end */}

          {/* api */}

          <figure className="px-5 pt-10 animate-bounce"  style={{ animationDuration: "3s" }}>
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*GPQ7MDPCOdpdJSXP2f3Jjw.png"
              alt="Shoes"
              className="rounded-xl h-10 lg:h-20 "
            />
          </figure>

          {/* api end */}
        </div>
        
      </div>
    
    </>
  );
};

export default Experience;

