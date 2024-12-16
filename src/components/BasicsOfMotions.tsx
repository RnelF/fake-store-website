import React from "react";
import { motion } from "framer-motion";
export default function BasicsOfMotions() {
  return (
    <div className="grid justify-center items-center h-[100vh] gap-4">
      <motion.div className="w-36 h-36 bg-black"></motion.div>
    </div>
  );
}
