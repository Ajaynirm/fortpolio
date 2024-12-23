import React from "react";

const Project = () => {
  return (
    <>
    <div className='flex justify-around flex-wrap gap-20' id='project'>



    <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
            src="./cric.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Score Streamer
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p>
            A score streaming platform where match owners can stream their match score and users anywhere from the world can receive
            realtime update with low latency.
          </p>
          <div className="card-actions justify-around">
            <div
              className="lg:tooltip"
              data-tip="click to see the documentation"
            >
              <button className="btn btn-outline btn-accent" onClick={()=>window.open('https://github.com/Ajaynirm/cricketScore', '_self')}>Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary" onClick={()=>window.open('https://cricket-score-counter-alpha.vercel.app/', '_self')}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>


      <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
            src="./securechat.jpg"
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
            real-time communication with group messaging.
          </p>
          <div className="card-actions justify-around">
            <div
              className="lg:tooltip"
              data-tip="click to see the documentation"
            >
              <button className="btn btn-outline btn-accent" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_self')}>Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary" onClick={()=>window.open('https://securechat-ubs1.onrender.com/login', '_self')}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
            src="./instaclone.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Instagram clone
            <div className="badge badge-secondary">OLD</div>
          </h2>
          <p>
            An Instagram social media clone.
          </p>
          <div className="card-actions justify-around">
            <div
              className="lg:tooltip"
              data-tip="click to see the documentation"
            >
              <button className="btn btn-outline btn-accent" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_self')}>Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary" onClick={()=>window.open('https://insta-clone-indol-five.vercel.app/', '_self')}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
            src="page"
            alt="Page Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Employee Enroller
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p>
            A platform to manage employees and admin can add,update, delete and assign work to employees and employee can see that.
          </p>
          <div className="card-actions justify-around">
            <div
              className="lg:tooltip"
              data-tip="click to see the documentation"
            >
              <button className="btn btn-outline btn-accent" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_self')}>Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_self')}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
            src=""
            alt="image not available"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            working on that
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p>
            ...
          </p>
          <div className="card-actions justify-around">
            <div
              className="lg:tooltip"
              data-tip="click to see the documentation"
            >
              <button className="btn btn-outline btn-accent" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_self')}>Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_self')}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>








      </div>
    </>
  );
};

export default Project;
