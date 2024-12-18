"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function BasicsOfMotions() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid justify-center items-center h-[100vh] gap-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
      >
        Show/Hide
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            exit={{ rotate: "0deg" }}
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "180deg" }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            className="w-36 h-36 bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
