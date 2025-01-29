import React from "react";
import "./project.css";

const Project = () => {
  return (
    <>
      <div id="project" className="flex justify-center items-center gap-10 p-10">
        
        <div className="card bg-base-100 w-64 lg:w-[500px] shadow-xl border-purple-500 border-2 border-solid mb-10">
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-2xl lg:text-4xl font-bold font-serif animate-pulse">
               Projects
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-wrap gap-20 " >
        {/* Ai powered learning platform start */}
        <div className="card bg-base-100 w-96 shadow-xl pt-20 pb-5 border-purple-700 border-2 border-solid">
          <figure>
            <img
              className="w-64 h-64"
              src="https://media.licdn.com/dms/image/v2/D4D12AQF7gapPpu0Xaw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703644310885?e=1742428800&v=beta&t=K2RmYxotsQxHbn1HQlPqByIKn5TZjoZtXjHNZjSGFA8"
              alt="laptop-img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif">
              AI Powered Learning Platform
              <div className="badge badge-primary">Developing</div>
            </h2>
            <p className="font-serif">
              a new way of learning for self learner who is eager to learn from
              free resources with help of Artificial Intelligence
            </p>
            <div className="card-actions justify-around">
              <div className="lg:tooltip" data-tip="Under Development">
                {/* <button
                  className="btn btn-outline btn-accent"
                  onClick={() =>
                    window.open("https://github.com/Ajaynirm/", "_blank")
                  }
                >
                  Git Hub
                </button> */}
              </div>
              <div className="lg:tooltip" data-tip="Under development">
                {/* <button
                  className="btn btn-outline btn-primary"
                  onClick={() => window.open("", "_blank")}
                >
                  Live Demo
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/*  AI learning platform end */}

        {/* laptop start */}
        <div className="card bg-base-100 w-96 shadow-xl pt-20 pb-5 border-purple-700 border-2 border-solid">
          <figure>
            <img
              className="w-64 h-64"
              src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2023/10/Computer-Inventory-Management.png"
              alt="laptop-img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif">
              smart Laptop manager
              <div className="badge badge-primary">NEW</div>
            </h2>
            <p className="font-serif">
              a new way of maintaining laptop inventory for maintenance purposes
              with robust functionality and user friendly ui
            </p>
            <div className="card-actions justify-around">
              <div
                className="lg:tooltip"
                data-tip="click to see the documentation"
              >
                <button
                  className="btn btn-outline btn-accent"
                  onClick={() =>
                    window.open(
                      "https://github.com/Ajaynirm/Laptop-Management",
                      "_blank"
                    )
                  }
                >
                  Git Hub
                </button>
              </div>
              <div className="lg:tooltip" data-tip="click to use this app">
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    window.open(
                      "https://laptop-management-4.onrender.com/",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  laptop end */}
        {/* secure chat start */}
        <div className="card bg-base-100 w-96 shadow-xl pt-20 pb-5 border-purple-700 border-2 border-solid ">
          <figure>
            <img className="w-64 h-64" src="./securechat.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif">
              SecureChat
              <div className="badge badge-primary">NEW</div>
            </h2>
            <p className="font-serif">
              A secure chat app with network security technique and reliable
              real-time communication with group messaging.
            </p>
            <div className="card-actions justify-around">
              <div
                className="lg:tooltip"
                data-tip="click to see the documentation"
              >
                <button
                  className="btn btn-outline btn-accent"
                  onClick={() =>
                    window.open(
                      "https://github.com/Ajaynirm/SecureChat",
                      "_blank"
                    )
                  }
                >
                  Git Hub
                </button>
              </div>
              <div className="lg:tooltip" data-tip="click to use this app">
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    window.open(
                      "https://securechat-ubs1.onrender.com/login",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* secure chat end */}
        {/* insta clone start */}
        <div className="card bg-base-100 w-96 shadow-xl pt-20 pb-5 border-purple-700 border-2 border-solid ">
          <figure>
            <img className="w-64 h-64" src="./instaclone.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif">
              Instagram clone
              <div className="badge badge-secondary"></div>
            </h2>
            <p className="font-serif">An Instagram social media clone.</p>
            <div className="card-actions justify-around">
              <div
                className="lg:tooltip"
                data-tip="click to see the documentation"
              >
                <button
                  className="btn btn-outline btn-accent"
                  onClick={() =>
                    window.open(
                      "https://github.com/Ajaynirm/SecureChat",
                      "_blank"
                    )
                  }
                >
                  Git Hub
                </button>
              </div>
              <div className="lg:tooltip" data-tip="click to use this app">
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    window.open(
                      "https://insta-clone-indol-five.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* insta clone end */}
        {/* cricket project start */}
        <div className="card bg-base-100 w-96 shadow-xl pt-20 pb-5 border-purple-700 border-2 border-solid ">
          <figure>
            <img className="w-64 h-64" src="./cric.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif">
              Score Streamer
              <div className="badge badge-primary">Developing</div>
            </h2>
            <p className="font-serif">
              A score streaming platform where match owners can stream their
              match score and users anywhere from the world can receive realtime
              update with low latency.
            </p>
            <div className="card-actions justify-around">
              <div
                className="lg:tooltip"
                data-tip="click to see the documentation"
              >
                <button
                  className="btn btn-outline btn-accent"
                  onClick={() =>
                    window.open(
                      "https://github.com/Ajaynirm/cricketScore",
                      "_blank"
                    )
                  }
                >
                  Git Hub
                </button>
              </div>
              <div className="lg:tooltip" data-tip="click to use this app">
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    window.open(
                      "https://cricket-score-counter-alpha.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* cricket project end */}
        {/* employee enroller start*/}
        <div className="card bg-base-100 w-96 shadow-xl pt-20 pb-5 border-purple-700 border-2 border-solid ">
          <figure>
            <img
              className="w-64 h-64"
              src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp"
              alt="Page Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif">
              Employee Enroller
              <div className="badge badge-primary"></div>
            </h2>
            <p className="font-serif">
              A platform to manage employees and admin can add,update, delete
              and assign work to employees and employee can see that.
            </p>
            <div className="card-actions justify-around">
              <div
                className="lg:tooltip"
                data-tip="click to see the documentation"
              >
                <button
                  className="btn btn-outline btn-accent"
                  onClick={() =>
                    window.open(
                      "https://github.com/Ajaynirm/SecureChat",
                      "_blank"
                    )
                  }
                >
                  Git Hub
                </button>
              </div>
              <div className="lg:tooltip" data-tip="click to use this app">
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    window.open(
                      "https://github.com/Ajaynirm/SecureChat",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* employee enroller end*/}

        <div className="card bg-base-100 w-96 shadow-xl pt-20 pb-5 border-purple-700 border-2 border-solid ">
          <figure>
            <img
              className="w-64 h-64"
              src="https://rvtechnologies.com/assets/images/ca.webp"
              alt="image not available"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif">
              Fast Food Delivery App
              <div className="badge badge-primary">Developing</div>
            </h2>
            <p className="font-serif"></p>
            {/* <div className="card-actions justify-around">
            <div
              className="lg:tooltip"
              data-tip="click to see the documentation"
            >
              <button className="btn btn-outline btn-accent" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_blank')}>Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_blank')}>Live Demo</button>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
