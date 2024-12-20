import { motion } from "motion/react";
import Steps from "./Steps";
import { useState } from "react";
import Inputs from "./Inputs";

const Form = () => {
  const [step, setStep] = useState(1);
  const [disableNext, setDisableNext] = useState(false);

  const step1Inputs = [
    {
      type: "text",
      name: "fullName",
      placeHolder: "Full name",
      cols: 2,
    },
    {
      type: "text",
      name: "username",
      placeHolder: "Username",
      cols: 2,
    },
    {
      type: "email",
      name: "email",
      placeHolder: "Email",
      cols: 2,
    },
  ];

  const step2Inputs = [
    {
      type: "number",
      name: "number",
      placeHolder: "Input a number",
      cols: 1,
    },
    {
      type: "number",
      name: "number2",
      placeHolder: "Another one",
      cols: 1,
    },
    {
      type: "date",
      name: "dateOfBirth",
      placeHolder: "Date of birth",
      cols: 2,
    },
    {
      type: "text",
      name: "text",
      placeHolder: "Input a text",
      cols: 2,
    },
  ];

  const step3Inputs = [
    {
      type: "month",
      name: "month",
      placeHolder: "Month",
      cols: 2,
    },
    {
      type: "select",
      name: "options",
      placeHolder: "Options",
      options: ["Option 1", "Option 2", "Option 3"],
      cols: 1,
    },
    {
      type: "number",
      name: "number2",
      placeHolder: "Another number",
      cols: 1,
    },
    {
      type: "password",
      name: "password",
      placeHolder: "Password",
      cols: 2,
    },
  ];

  const inputsList = [
    {
      step: 1,
      inputList: step1Inputs,
    },
    {
      step: 2,
      inputList: step2Inputs,
    },
    {
      step: 3,
      inputList: step3Inputs,
    },
  ]

  const handleNext = () => {
    if (step === 3) {
      setStep(2);
      setDisableNext(true);
      setTimeout(() => {
        setStep(1);
        setDisableNext(false);
      }, 500);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <motion.div
      initial={{ y: "-60vh" }}
      animate={{ y: 0, transition: { type: "spring", duration: 4 } }}
      className="h-[500px] bg-white w-[550px] flex flex-col items-center justify-center border-2 border-violet-700 rounded-lg overflow-hidden"
    >
      <Steps step={step} />
      <div className="h-[60%] relative flex items-center justify-center">
        {inputsList.map((input) => (
          <Inputs key={input.step} {...input} currentStep={step} />
        ))}
      </div>
      <div className="h-[20%] flex items-center justify-between px-[50px] w-full">
        <motion.button
          initial={{ opacity: 1 }}
          animate={step === 1 ? { opacity: 0 } : { opacity: 1 }}
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className="border border-violet-700 text-violet-700 rounded-lg w-[125px] py-2 font-semibold hover:bg-violet-600 hover:text-white focus:outline-none focus:bg-violet-600 focus:text-white transition-all"
        >
          Previous
        </motion.button>
        <button
          onClick={handleNext}
          className="bg-violet-600 text-white rounded-lg w-[125px] py-2 font-semibold hover:bg-violet-800 focus:outline-none focus:bg-violet-800 border-2 focus:border-violet-900 transition-all"
          disabled={disableNext}
        >
          {step === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </motion.div>
  );
};

export default Form;
