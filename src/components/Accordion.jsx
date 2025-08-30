import React from "react";
import Team from "./Team";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Accordion = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-base-200 rounded-xl shadow-md p-2">
       <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-center items-center gap-2 text-xl font-semibold text-red-400 cursor-pointer"
      >
        {/* Animated Text */}
        <motion.span
          animate={{ rotate: [0, 5, -5, 0] }} // little wiggle
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {isOpen ? "Hide Team Mates" : "Click to see my Team Mates"}
        </motion.span>

        {/* Rotating Arrow */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-red-400" />
        </motion.div>
      </button>
      {/* Animated Header */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-center items-center gap-2 py-4 text-xl font-semibold text-red-400 cursor-pointer rounded-lg"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        {isOpen ? "Only me" : "Why are u waiting!"}

        {/* Rotating Arrow */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-red-400" />
        </motion.div>
      </motion.button>

      {/* Animated Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden flex justify-center items-center"
          >
            <div className="w-full md:w-3/4">
              <Team />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
