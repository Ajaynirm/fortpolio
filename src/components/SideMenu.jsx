import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to Open Menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-3 right-3 z-50 p-2 bg-gray-800 text-white rounded-full"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Side Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-50 p-5"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2  rounded-full"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-3">
          <li className="p-2 rounded">
            <a href="#about">About</a>
          </li>
          <li className="p-2 rounded">
            <a href="#profile">Profile</a>
          </li>
          <li className="p-2 rounded">
            <a href="#stack">Stack</a>
          </li>
          <li className="p-2 rounded">
            <a href="#project">Projects</a>
          </li>
          <li className="p-2 rounded">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
