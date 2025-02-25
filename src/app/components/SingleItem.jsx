import Image from "next/image";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleItem = ({ data }) => {
  const { header, info, description, type, mainImage, images, id } = data;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 }, // Kart başlangıçta aşağıda ve şeffaf
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Kart yukarı kayarak görünür olacak
  };
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center sm:items-start"
    >
      <Link
        href={"/projects/" + type + "/" + id}
        className="hover:opacity-80 ease-in-out duration-300"
      >
        <Image
          src={mainImage}
          alt={header}
          width={400}
          height={300}
          objectFit="cover"
          className="aspect-square w-[400px] h-[300px] object-cover"
        />
      </Link>
      <div className="flex flex-col gap-4 mt-2 items-center sm:items-start">
        <div className="flex items-center gap-4">
          <p className="font-Raleway">
            {type === "taahhut" ? "Taahhüt" : "Konut"}
          </p>
          <div className="w-2 h-2 bg-slate-800"></div>
        </div>

        <Link href={"/projects/" + type + "/" + header}>
          <p className="font-Raleway ">{header}</p>
        </Link>

        <p className="line-clamp-2 font-Raleway ">{info}</p>
        <div className="w-28 h-[1px] bg-slate-800"></div>

        <Link
          href={"/projects/" + type + "/" + id}
          className="flex items-center gap-2"
        >
          <p className="font-Poppins">Detaylı Bilgi</p>
          <FaArrowRight color="black" />
        </Link>
      </div>
    </motion.div>
  );
};

export default SingleItem;
