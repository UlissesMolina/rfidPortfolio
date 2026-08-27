 "use client";
  import { motion } from "framer-motion";
  import { Mail } from "lucide-react";

  export default function NavBar() {
    return (
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white dark:bg-black shadow-md px-78 py-5 flex items-center justify-between"
      >
        <span className="text-lg font-semibold">umolina</span>
        <div className="flex items-center gap-4">
          <a href="#top" className="hover:opacity-70 transition-opacity duration-200">
            Home
          </a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">
            Projects
          </a>
          <a href="mailto:umolina2005@gmail.com">
            <Mail className="w-5 h-5 hover:opacity-70 transition hover:scale-125 transition-transform duration-200" />
          </a>
        </div>
      </motion.nav>
    );
  }