"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { allData } from "../data";
import SingleItem from "../components/SingleItem";
import { motion } from "framer-motion";

const Projects = () => {
  const [datas, setDatas] = useState(allData);
  const [activeType, setActiveType] = useState("");

  const router = useRouter();

  const handleFilter = (type) => {
    router.push(`/projects/${type}`);
    setActiveType(type);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 md:gap-4 mt-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 p-4"
        >
          <p className="uppercase text-2xl font-semibold self-center">
            Mimari projeler
          </p>
          <p>
            Binalarımızın her biri kişisel ve benzersiz bir mimariye sahiptir.
            Mekanlarının keyfini çıkaracak insanların iş birliğiyle ortaya çıkan
            ekolojik ve sağlıklı el yapımı parçalar.
          </p>
        </motion.div>
        <hr />
        <div className="p-4 flex gap-4">
          <button
            className={` ${
              activeType === "taahhut"
                ? "text-white bg-slate-700"
                : "bg-gray-100 text-black"
            }  px-2 py-1 text-sm hover:text-white hover:bg-slate-700 `}
            onClick={() => handleFilter("taahhut")}
          >
            Taahhütler
          </button>
          <button
            className={` ${
              activeType === "konut"
                ? "text-white bg-slate-700"
                : "bg-gray-100 text-black"
            }  px-2 py-1 text-sm hover:text-white hover:bg-slate-700 `}
            onClick={() => handleFilter("konut")}
          >
            Konutlar
          </button>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {datas.map((data) => (
            <SingleItem key={data.header} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
