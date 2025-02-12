"use client";
import { useState } from "react";
import { allData } from "../data";
import SingleItem from "./SingleItem";
import { motion } from "framer-motion";

const Projects = () => {
  const [datas, setDatas] = useState(allData);

  const listVariants = {
    hidden: { opacity: 1 }, // Başlangıç durumu
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Çocuk bileşenlerin sırayla görünmesi için gecikme
      },
    },
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-10 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center gap-6 p-4"
        >
          <p>08023 Architects</p>
          <p>
            You are the centre of every project. We create unique spaces in
            which your way of living, working and dreaming are the protagonists.
          </p>
        </motion.div>
        <hr />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={listVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        >
          {datas.map((data) => (
            <SingleItem key={data.header} data={data} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
