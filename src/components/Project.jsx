import React from "react";
import "./project.css";

const Project = () => {
  const project=[{
    title: "Real-Time Movie Booking App",
    status: "Completed",
    statusColor: "badge-success",
    img: "https://cdn.dribbble.com/users/926537/screenshots/14360516/media/1b21f8b5d4e7e8f4f0e41f0e2a637fc6.png?resize=1200x900&vertical=center",
    desc: "A full-stack movie booking platform with real-time seat updates using WebSockets. Built with Next.js frontend and Spring Boot backend, ensuring a seamless, responsive, and scalable booking experience.",
    github: "https://github.com/Ajaynirm/Movie-Booking-App",
    live: "https://movie-booking-frontend-b114.vercel.app/",
  },
  {
    title: "AI Powered Learning Platform",
    status: "Completed",
    statusColor: "badge-success",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQF7gapPpu0Xaw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703644310885?e=1742428800&v=beta&t=K2RmYxotsQxHbn1HQlPqByIKn5TZjoZtXjHNZjSGFA8",
    desc: "An innovative self-learning platform enhanced by AI, designed to help learners discover, organize, and understand free learning resources efficiently. Features intelligent resource recommendations, progress tracking, and interactive AI assistance for personalized learning experiences.",
    github: "https://github.com/Ajaynirm/AI-Powered-Learning-Platform",
    live: "https://ai-powered-learning-platform.vercel.app/",
  },
  {
    title: "Artistly",
    status: "New",
    statusColor: "badge-success",
    img: "./securechat.jpg",
    desc: "A secure chat app using modern network security techniques with group messaging.",
    github: "https://github.com/Ajaynirm/Artistly",
    live: "https://artistly-omega.vercel.app/",
  },
  {
    title: "SecureChat",
    status: "New",
    statusColor: "badge-success",
    img: "./securechat.jpg",
    desc: "A secure chat app using modern network security techniques with group messaging.",
    github: "https://github.com/Ajaynirm/SecureChat",
    live: "https://securechat-ubs1.onrender.com/login",
  },
  {
    title: "Inventory Management",
    status: "old",
    statusColor: "badge-success",
    img: "https://www.softwaretestinghelp.com/wp-content/qa/uploads/2023/10/Computer-Inventory-Management.png",
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
  {
    title: "Employee Enroller",
    status: "Stable",
    statusColor: "badge-info",
    img: "https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp",
    desc: "Manage employees — add, update, delete and assign work with ease.",
    github: "https://github.com/Ajaynirm/SecureChat",
    live: "https://github.com/Ajaynirm/SecureChat",
  },
];

  return (
    <>
      <div id="project" className="flex justify-center items-center gap-10 px-10 pb-10">
        
        <div className="card bg-base-100  lg:w-[500px]  bg-gradient-to-r  text-white shadow-lg  mb-10 hover:scale-105 transition-transform">
          <div className="card-body items-center text-center ">
            <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
               Projects
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-10 lg:gap-16 p-10">
  {project.map((project, idx) => (
    <div
      key={idx}
      className="card w-80 lg:w-96 bg-white/10 backdrop-blur-md border border-indigo-700 shadow-xl rounded-xl transition transform hover:-translate-y-2 hover:shadow-2xl"
    >
      <figure className="px-2 pt-6">
        <img
          className="rounded-xl w-40 h-40 object-cover mx-auto"
          src={project.img}
          alt={project.title}
        />
      </figure>
      <div className="card-body text-center space-y-3">
        <h2 className="card-title justify-center font-serif text-lg lg:text-xl font-bold">
          {project.title}
          <div className={`badge ${project.statusColor} ml-2`}>
            {project.status}
          </div>
        </h2>
        <p className="text-sm font-mono text-gray-200">{project.desc}</p>
        <div className="card-actions justify-center gap-4 pt-3">
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
