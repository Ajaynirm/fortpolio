import React from "react";

const achievements = [
  {
    title: "LeetCode 50 Days",
    img: "https://res.cloudinary.com/dhkobpqhw/image/upload/v1756558296/AjayLeetcode2025_z936io.png",
    description: "Completed 50 days of problem-solving streak on LeetCode",
    link: "https://leetcode.com/u/ajaysam397/"
  },
  {
    title: "LeetCode 100 Days",
    img: "https://res.cloudinary.com/dhkobpqhw/image/upload/v1756558296/AjayLeet100_wlmdlz.png",
    description: "Achieved 100 days coding streak on LeetCode",
    link: "https://leetcode.com/u/ajaysam397/"
  },
  {
    title: "GitHub Pull Shark",
    img: "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    description: "Awarded Pull Shark badge for open-source contributions",
    link: "https://github.com/Ajaynirm?tab=achievements&achievement=pull-shark"
  },
];

const Achievements = () => {
  return (
    <>
      <section id="achievements" className="py-10 bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-6">Achievement 🏆 </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
          {achievements.map((achieve, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-xl bg-base-100"
              onClick={()=>{window.open(achieve.link)}}
            >
              {/* Image */}
              <img
                src={achieve.img}
                alt={achieve.title}
                className="w-full h-56 object-contain p-6 transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay (hidden until hover) */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-2">{achieve.title}</h3>
                <p className="text-sm px-4">{achieve.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Achievements;
