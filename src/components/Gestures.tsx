import { motion } from "framer-motion";

export default function Gestures() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        className="example-button"
      >
        Click me!
      </motion.button>
    </div>
  );
}
