import React from "react";

const Project = () => {
  const project=[  {
    title: "AI Powered Learning Platform",
    status: "Completed",
    statusColor: "badge-success",
    img: "https://res.cloudinary.com/dhkobpqhw/image/upload/v1756550702/Ai_learn_img_1_lqol9d.jpg",
    desc: "An innovative self-learning platform enhanced by AI, designed to help learners discover, organize, and understand free learning resources efficiently. Features intelligent resource recommendations, progress tracking, and interactive AI assistance for personalized learning experiences.",
    github: "https://github.com/Ajaynirm/AI-Powered-Learning-Platform",
    live: "https://ai-powered-learning-platform.vercel.app/",
  },{
    title: "Real-Time Movie Booking App",
    status: "Completed",
    statusColor: "badge-success",
    img: "https://res.cloudinary.com/dhkobpqhw/image/upload/v1756552501/Movie_book_img_pmniax.jpg",
    desc: "A full-stack movie booking platform with real-time seat updates using WebSockets. Built with Next.js frontend and Spring Boot backend, ensuring a seamless, responsive, and scalable booking experience.",
    github: "https://github.com/Ajaynirm/Movie-Booking-App",
    live: "https://movie-booking-frontend-b114.vercel.app/",
  },
  {
    title: "SecureChat",
    status: "New",
    statusColor: "badge-success",
    img: "https://res.cloudinary.com/dhkobpqhw/image/upload/v1756552488/chatty_img_d9xlp6.jpg",
    desc: "A secure chat app using modern network security techniques with group messaging.",
    github: "https://github.com/Ajaynirm/SecureChat",
    live: "https://securechat-ubs1.onrender.com/login",
  },
  {
    title: "Artistly",
    status: "New",
    statusColor: "badge-success",
    img: "https://res.cloudinary.com/dhkobpqhw/image/upload/v1756552466/Artistly_img_1_tnm9us.jpg",
    desc: "A Functional app to filter out Artist among various categories on various cities.",
    github: "https://github.com/Ajaynirm/Artistly",
    live: "https://artistly-omega.vercel.app/",
  },
 
  {
    title: "Inventory Management",
    status: "old",
    statusColor: "badge-success",
    img: "./lap_manage.jpg",
    desc: "Maintain laptop inventory with robust functionality and user-friendly UI.",
    github: "https://github.com/Ajaynirm/Laptop-Management",
    live: "https://laptop-management-4.onrender.com/",
  },
  
  {
    title: "Instagram Clone",
    status: "Clone",
    statusColor: "badge-neutral",
    img: "./instaclone.jpg",
    desc: "A fully functional Instagram clone built with MERN stack.",
    github: "https://github.com/Ajaynirm/SecureChat",
    live: "https://insta-clone-indol-five.vercel.app/",
  },
  {
    title: "Score Streamer",
    status: "Developing",
    statusColor: "badge-warning",
    img: "./cric.jpg",
    desc: "Stream live cricket scores with low latency, accessible globally.",
    github: "https://github.com/Ajaynirm/cricketScore",
    live: "https://cricket-score-counter-alpha.vercel.app/",
  },
];

  return (
    <>
      <div id="project" className="flex justify-center items-center gap-10 px-10 pb-30">
  <div className="card bg-base-100 lg:w-[500px] bg-gradient-to-r shadow-lg mb-10 hover:scale-105 transition-transform">
    <div className="card-body items-center text-center ">
      <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
        Projects
      </h2>
    </div>
  </div>
</div>

<div className="flex justify-center flex-wrap gap-10 lg:gap-16 p-10 mb-32">
  {project.map((project, idx) => (
    <div
      key={idx}
      className="group relative card w-80 lg:w-96 bg-white/10 backdrop-blur-md border border-indigo-700 shadow-xl rounded-xl overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <figure className="px-2 pt-6">
        <img
          className="rounded-xl w-40 h-40 object-cover mx-auto"
          src={project.img}
          alt={project.title}
        />
      </figure>

      {/* Title & Status */}
      <div className="card-body text-center space-y-3">
        <h2 className="card-title justify-center font-serif text-lg lg:text-xl font-bold">
          {project.title}
          <div className={`badge ${project.statusColor} ml-2`}>
            {project.status}
          </div>
        </h2>
      </div>

      {/* Hidden content - show on hover */}
      <div className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center gap-4 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm font-mono">{project.desc}</p>
        <div className="flex gap-4">
          {project.github && (
            <button
              className="btn btn-outline btn-accent"
              onClick={() => window.open(project.github, "_blank")}
            >
              GitHub
            </button>
          )}
          {project.live && (
            <button
              className="btn btn-outline btn-primary"
              onClick={() => window.open(project.live, "_blank")}
            >
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  ))}
</div>


    </>
  );
};

export default Project;
