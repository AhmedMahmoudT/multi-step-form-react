/* eslint-disable react/prop-types */
import StepMark from "./StepMark";
import { motion } from "motion/react";

const Steps = ({ step }) => {
  return (
    <div className="flex justify-evenly items-center w-full h-[20%] relative">
      <div className="absolute w-[250px] border"></div>
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate={step >= 2 ? "visible" : "hidden"}
        className="absolute left-[145px] border border-violet-700 z-10"
      ></motion.div>
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate={step == 3 ? "visible" : "hidden"}
        className="absolute left-[290px] border border-violet-700 z-10"
      ></motion.div>
      <StepMark step={1} currentStep={step} />
      <StepMark step={2} currentStep={step} />
      <StepMark step={3} currentStep={step} />
    </div>
  );
};

const lineVariants = {
  hidden: { width: "0%" },
  visible: { width: "6vw" },
};

export default Steps;
