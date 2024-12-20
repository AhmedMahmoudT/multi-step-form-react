/* eslint-disable react/prop-types */
import Input from "./Input";
import { AnimatePresence, motion } from "motion/react";

const Inputs = ({step, currentStep, inputList}) => {
  return (
    <AnimatePresence>
      {step==currentStep&&<motion.div variants={inputsVariants} initial="default" animate="animate" exit="hidden" className="w-[440px] grid grid-cols-2 gap-x-4 items-center justify-center h-full absolute">
      {inputList.map((input) => (
        <Input key={input.name} {...input} />
      ))}
    </motion.div>}
    </AnimatePresence>
  );
};

const inputsVariants = {
  hidden: { x: -500, opacity: 0 },
  default: { x: 500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export default Inputs;
