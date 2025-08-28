import { useState } from "react";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [loading, setLoading] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-indigo-700 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          {/* Avatar (optional) */}
          {/* <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="/your-profile.png" alt="profile" />
            </div>
          </div> */}
          <span className="text-xl font-bold font-mono tracking-wide cursor-pointer">
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              "Ajay C"
            )}
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              value="light"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>

          {/* Side Menu */}
          <SideMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
