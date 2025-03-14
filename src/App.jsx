import { motion } from "motion/react";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="h-screen flex justify-center bg-white">
      <div className="scale-[.60] md:scale-75 lg:scale-100 flex flex-col items-center m-auto">
        <motion.div
          initial={{ borderBottom: "2px solid #6d28d9" }}
          animate={{
            borderBottom: "2px solid #f8fafc",
            transition: { delay: 2 },
          }}
          className="z-10 -mt-[70vh] md:-mt-[60vh] lg:-mt-[400px] w-[600px] h-[70vh] md: lg:h-[250px] bg-white flex place-items-end justify-center overflow-hidden pb-4 mb-6"
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
    </div>
  );
};

export default App;
