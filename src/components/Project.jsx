import React from "react";
import "./project.css"

const Project = () => {
  return (
    <>
    <div className="flex justify-center items-center gap-10 p-10">
      <span className="text-5xl font-bold font-serif">projects</span>
    </div>
    <div className='flex justify-around flex-wrap gap-20' id='project'>

 
{/* laptop start */}
<div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img className="w-64 h-64"
            src="./lap_manage.jpg"
            alt="laptop-img"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-serif">
            smart Laptop manager
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p className="font-serif">
           a new way of maintaining laptop inventory for maintenance purposes with robust functionality and user friendly ui
          </p>
          <div className="card-actions justify-around">
            <div
              className="lg:tooltip"
              data-tip="click to see the documentation"
            >
              <button className="btn btn-outline btn-accent" onClick={()=>window.open('https://github.com/Ajaynirm/Laptop-Management', '_self')}>Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary" onClick={()=>window.open('https://laptop-management-4.onrender.com/', '_self')}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
      {/*  laptop end */}
{/* secure chat start */}
      <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
          className="w-64 h-64"
            src="./securechat.jpg"
            alt="Shoes"
          />
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
              <button className="btn btn-outline btn-accent" onClick={()=>window.open('https://github.com/Ajaynirm/SecureChat', '_self')}>Git Hub</button>
            </div>
            <div className="lg:tooltip" data-tip="click to use this app">
              <button className="btn btn-outline btn-primary" onClick={()=>window.open('https://securechat-ubs1.onrender.com/login', '_self')}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
      {/* secure chat end */}
      {/* insta clone start */}
      <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
          className="w-64 h-64"
            src="./instaclone.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-serif">
            Instagram clone
            <div className="badge badge-secondary">OLD</div>
          </h2>
          <p className="font-serif">
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
{/* insta clone end */}
{/* cricket project start */}
<div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
          className="w-64 h-64"
            src="./cric.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-serif">
            Score Streamer
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p className="font-serif">
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

{/* cricket project end */}
{/* employee enroller start*/}
      <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
          className="w-64 h-64"
            src="page"
            alt="Page Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-serif">
            Employee Enroller
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p className="font-serif">
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
      {/* employee enroller end*/}

      <div className="card bg-base-100 w-96 shadow-x pt-20 pb-5">
        <figure>
          <img
          className="w-64 h-64"
            src=""
            alt="image not available"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-serif">
            working on that
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p className="font-serif">
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
