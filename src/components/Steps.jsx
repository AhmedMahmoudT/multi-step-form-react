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
        className="absolute left-[145px] xl:left-[120px] border border-violet-700 z-10"
      ></motion.div>
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate={step == 3 ? "visible" : "hidden"}
        className="absolute left-[250px] xl:left-[275px] border border-violet-700 z-10"
      ></motion.div>
      <div className="xl:w-[500px] w-[400px] flex justify-evenly items-center">
      <StepMark step={1} currentStep={step} />
      <StepMark step={2} currentStep={step} />
      <StepMark step={3} currentStep={step} />
      </div>
    </div>
  );
};

const lineVariants = {
  hidden: { width: "0%" },
  visible: { width: "150px" },
};

export default Steps;
