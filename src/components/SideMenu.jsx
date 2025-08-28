import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Profile", href: "#profile" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1 right-1 lg:right-6 z-50 p-3 rounded-full shadow-md 
                   bg-gradient-to-r bg-black border-2 border-gray-500
                   text-white hover:scale-110 transition-transform"
      >
        <Menu size={14} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Side Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 right-0 h-full w-72 
                   bg-gradient-to-b from-indigo-900 via-indigo-800 to-purple-900
                   text-white shadow-2xl z-50 p-6 flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10"
        >
          <X size={24} />
        </button>

        {/* Menu Header */}
        <h2 className="text-2xl font-bold font-serif mb-10 tracking-wide">
          Menu
        </h2>

        {/* Menu Items */}
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium tracking-wide 
                           hover:text-pink-400 hover:translate-x-2 transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto text-sm text-gray-400 border-t border-white/10 pt-4">
          © {new Date().getFullYear()} Ajay — All Rights Reserved
        </div>
      </motion.div>
    </div>
  );
}
