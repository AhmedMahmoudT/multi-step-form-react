/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const StepMark = ({ step, currentStep }) => {
  return (
    <motion.div
      variants={stepMarkVariants}
      initial="hidden"
      animate={step <= currentStep ? "visible" : "hidden"}
      className="w-12 h-12 rounded-full flex items-center justify-center font-bold z-20 bg-white"
    >
      {step}
    </motion.div>
  );
};

const stepMarkVariants = {
  hidden: { border: "2px solid #e5e7eb", color: "#9ca3af" },
  visible: {
    border: "2px solid #6d28d9",
    backgroundColor: "#f5f3ff",
    color: "#6d28d9",
  },
};

export default StepMark;
