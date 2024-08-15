import React from "react";
import { motion } from "framer-motion";

const SampleCode: React.FC = () => {
  return (
    <motion.p
      initial={{ translateX: "150vw", scale: 2 }}
      animate={{ translateX: 0, scale: 1 }}
      transition={{ duration: 3 }}
    >
      The Caterpillar and{" "}
      <motion.span
        animate={{
          transform: ["scale(1)", "scale(2)", "scale(1)"],
          color: ["#000", "#FF00FF", "#000"],
        }}
        transition={{ duration: 3, times: [0, 0.5, 0.75] }}
        style={{ display: "inline-block" }}
      >
        Alice
      </motion.span>{" "}
      looked at each other for some time in silence: at last the Caterpillar
      took the hookah out of its mouth, and addressed her in a languid, sleepy
      voice.
    </motion.p>
  );
};

export default SampleCode;
