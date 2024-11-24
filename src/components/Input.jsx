/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useState } from "react";

const Input = ({ type, name, placeHolder, cols, options }) => {
  const [focusOn, setFocusOn] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center ${
        cols === 2 ? "col-span-2" : "col-span-1"
      }`}
    >
      {type !== "select" ? (
        <motion.input
          initial={{ border: "2px solid #e5e7eb" }}
          animate={
            focusOn
              ? { border: "2px solid #6d28d9" }
              : { border: "2px solid #e5e7eb" }
          }
          onBlur={() => setFocusOn(false)}
          onFocus={() => setFocusOn(true)}
          onChange={handleChange}
          type={type}
          name={name}
          className="w-full rounded-lg font-semibold px-3 py-3 text-xl outline-none z-10 bg-transparent text-violet-900"
        />
      ) : (
        <motion.select
          initial={{ border: "2px solid #e5e7eb" }}
          animate={
            focusOn
              ? { border: "2px solid #6d28d9" }
              : { border: "2px solid #e5e7eb" }
          }
          onBlur={() => setFocusOn(false)}
          onFocus={() => setFocusOn(true)}
          onChange={handleChange}
          name={name}
          className="w-full rounded-lg font-semibold px-3 py-3 text-xl outline-none z-10 bg-transparent text-violet-900"
        >
          <option value=""></option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </motion.select>
      )}
      <motion.p
        variants={placeHolderVariants}
        initial={type == "date" ? "hidden" : "visible"}
        animate={
          focusOn | (value !== "") | (type == "date") | (type == "month") ? "hidden" : "visible"
        }
        className="absolute left-2 text-xl font-semibold px-1 text-gray-400 bg-white"
      >
        {placeHolder}
      </motion.p>
    </motion.div>
  );
};

const placeHolderVariants = {
  hidden: { y: -32, zIndex: 20, color: "#6d28d9" },
  visible: { y: 0, zIndex: 0 },
};

export default Input;
