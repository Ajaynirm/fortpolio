import React from "react";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap  justify-center items-center gap-16 p-10 pb-72">
        <div className="text-5xl font-bold font-serif text-center " id="stack">
          Explore my experience
        </div>

        {/* frontend */}
        <div className="card bg-base-100 h-24 w-64 shadow-xl animate-pulse pb-20">
          <div className="card-body items-center text-center">
            <h2 className=" text-3xl font-bold font-serif">
              Frontend
            </h2>
          </div>
        </div>
        {/* fr end */}

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-20">

          {/* react */}
          <figure className="px-5 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png"
              className="rounded-xl h-10 lg:h-28"
            />
          </figure>
          {/* react end */}

          {/* javascript */}

          <figure className="px-5 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="Js"
              className="rounded-xl h-10 lg:h-24"
            />
          </figure>

          {/* js end */}

          {/* HTML */}

          <figure className="px-5 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/340px-HTML5_logo_and_wordmark.svg.png"
              alt="html"
              className="rounded-xl h-10 lg:h-32"
            />
          </figure>

          {/* html end */}

          {/* css */}

          <figure className="px-5 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"
              alt="Shoes"
              className="rounded-xl h-10 lg:h-28 "
            />
          </figure>

          {/* css end */}
          {/*  */}
          <figure className="px-5 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/240px-Tailwind_CSS_Logo.svg.png"
              alt="Shoes"
              className="rounded-xl h-6 lg:h-24"
            />
          </figure>
        </div>
        {/* backend */}
        <div className="card bg-base-100 w-64 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold font-serif animate-pulse">
              Backend
            </h2>
          </div>
        </div>
        {/* bc end */}

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
          {/* node */}
          <figure className="px-5 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/440px-Node.js_logo.svg.png"
              alt="Shoes"
              className="rounded-xl h-6 lg:h-24"
            />
          </figure>

          {/* node end */}

          {/* express */}

          <figure className="px-5 pt-10">
            <img
              // src="https://externlabs.com/blogs/wp-content/uploads/2021/11/ExpressJS-Library.jpg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/440px-Expressjs.png"
              alt="Shoes"
              className="rounded-xl h-6 lg:h-16"
            />
          </figure>

          {/* express end */}

          {/* Mongodb */}

          <figure className="px-5 pt-10">
            <img
              // src="https://media.licdn.com/dms/image/D4D12AQETgv5fMiYEXA/article-cover_image-shrink_720_1280/0/1677609185621?e=2147483647&v=beta&t=4Hu56lmQmUTtVSMFDKfipqVq9U1jo41sIJpib0lQoCo"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/500px-MongoDB_Fores-Green.svg.png"
              alt="Shoes"
              className="rounded-xl h-6 lg:h-16"
            />
          </figure>

          {/* mongodb end */}

          {/* api */}

          <figure className="px-5 pt-10">
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
