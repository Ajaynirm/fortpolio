// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

// export default function SideMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* Button to Open Menu */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-3 right-3 z-50 p-2 bg-gray-800 text-white rounded-full"
//       >
//         <Menu size={24} />
//       </button>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}

//       {/* Side Menu */}
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: isOpen ? 0 : "100%" }}
//         transition={{ type: "tween", duration: 0.3 }}
//         className="fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-50 p-5"
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-5 right-5 p-2  rounded-full"
//         >
//           <X size={24} />
//         </button>
//         <h2 className="text-xl font-bold mb-4">Menu</h2>
//         <ul className="space-y-3">
//           <li className="p-2 rounded">
//             <a href="#about">About</a>
//           </li>
//           <li className="p-2 rounded">
//             <a href="#profile">Profile</a>
//           </li>
//           <li className="p-2 rounded">
//             <a href="#stack">Stack</a>
//           </li>
//           <li className="p-2 rounded">
//             <a href="#project">Projects</a>
//           </li>
//           <li className="p-2 rounded">
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </motion.div>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AiTwotoneMail } from "react-icons/ai";
import { label } from "motion/react-client";
import { CgProfile } from "react-icons/cg";
import { SiCodingninjas } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";

export default function CircularMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: <CgProfile />,  href: "#about" },
    { label: <SiCodingninjas />,  href: "#profile"},
    { label: <GrTechnology />, href: "#stack" },
    { label: <FaProjectDiagram />, href: "#project" },
    { label:<AiTwotoneMail />,  href: "#contact"},
  ];

  return (
    <div className="fixed top-5 right-5 z-50">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 right-5 z-50 p-3 bg-gray-800 text-white rounded-full shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={20} />}
      </button>

      {/* Quarter Circle Menu Items */}
      {menuItems.map((item, index) => {
        const totalItems = menuItems.length;
        const startAngle = -Math.PI /2.2; // Start at top
        const endAngle = 0; // End at right
        const angle = startAngle + (index * ((endAngle - startAngle) / (totalItems - 1)));
        const radius = 120;
        const x = isOpen ? -radius * Math.cos(angle) : 0;
        const y = isOpen ? -radius * Math.sin(angle) : 0;

        return (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x, y, opacity: isOpen ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute p-2 bg-indigo-700 text-white rounded-full shadow-md"
          >
            {item.label}
          </motion.a>
        );
      })}
    </div>
  );
}
