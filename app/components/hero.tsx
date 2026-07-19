"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h1 variants={item} className="text-5xl font-bold">
        Yash Kumar
      </motion.h1>
      <motion.p variants={item} className="text-lg text-gray-500 mt-4">
        Building things for the web.
      </motion.p>
    </motion.div>
  );
}