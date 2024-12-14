import React from "react";

const Project = () => {
  return (
    <>
       
       <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            SecureChat
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p>
            A secure chat app with network security technique and reliable
            real-time communication
          </p>
          <div className="card-actions justify-around">
            <div
              className="lg:tooltip"
              data-tip="click to see the documentation"
            >
              <button className="btn btn-outline btn-accent">Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary">Live Demo</button>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Project;
