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
          <p className="font-Raleway font-semibold text-xl">DMG Projeler</p>
          <p className="font-Abel font-semibold text-xl ">
            Firmamız alt yapı , üst yapı ve ince işler konusunda deneyimli
            yönetici ve tecrübeli şantiye kadrosu ile inşaat sektöründe söz
            sahibi olmayı benimsemiştir. Firmamız alt yapı ve üst yapı alanında
            Türkiye Odalar ve Borsalar Birliği , Ankara Büyükşehir Belediyesi,
            özel inşaatlar ve çeşitli kamu kurum ve kuruluşlara hizmet vermeye
            devam etmektedir.
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
