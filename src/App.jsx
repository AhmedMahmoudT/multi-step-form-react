import { motion } from "motion/react";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-slate-50">
      <motion.div
        initial={{ borderBottom: "2px solid #6d28d9" }}
        animate={{
          borderBottom: "2px solid #f8fafc",
          transition: { delay: 2 },
        }}
        className="z-10 w-[600px] h-[250px] bg-slate-50 flex place-items-end justify-center overflow-hidden pb-4 mb-6"
      >
        <motion.p
          initial={{ y: 65 }}
          animate={{ y: 0, transition: { type: "spring", duration: 4 } }}
          className="text-4xl font-semibold text-violet-700"
        >
          Multi-Step Form
        </motion.p>
      </motion.div>
      <Form />
    </div>
  );
};

export default App;