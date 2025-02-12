"use client";

import { motion } from "framer-motion";

const BasindaBiz = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[250px] bg-slate-100 mt-8"
    >
      <p className="text-center">basinda biz</p>
    </motion.div>
  );
};

export default BasindaBiz;
