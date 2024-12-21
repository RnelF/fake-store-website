"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function BasicsOfMotions() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid justify-center items-center h-[100vh] gap-4">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="w-36 h-36 bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
