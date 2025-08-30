import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-12 pt-32 pb-32 bg-gradient-to-b  "
    >
      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wide drop-shadow-lg">
        Get in Touch
      </h2>

      {/* Contact card */}
      <div className="bg-white/10 backdrop-blur-lg p-5 lg:p-10 m-8 rounded-2xl shadow-lg border border-indigo-500 max-w-lg text-center">
        <p className="mb-6 text-base lg:text-lg font-mono ">
          Have a project idea, collaboration, or just want to say hello?  
          Let’s connect 👇
        </p>

        {/* Email Button */}
        <a
          href="mailto:ajaypratik888@gmail.com"
          className="btn btn-primary btn-wide font-serif tracking-wide shadow-md hover:scale-105 transition-transform"
        >
          📩 Send me an Email
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-xl">
          <a
            href="https://github.com/Ajaynirm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/ajaypratik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;




