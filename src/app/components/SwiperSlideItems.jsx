"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const SwiperSlideItems = ({ data }) => {
  const { mainImage, header, info, type, id } = data;
  return (
    <div className="relative ">
      <Image
        src={mainImage}
        height={750}
        width={1260}
        alt={header}
        className="swiper pointer-events-none"
      />
      <div className="absolute left-20 bottom-20 p-10 opacity-85 bg-white flex flex-col max-w-[500px] min-w-[400px] gap-4 z-20 ">
        <p className="p-4 text-white bg-black font-Poppins font-semibold">
          {header}
        </p>
        <p className="line-clamp-3 font-Poppins">{info}</p>
        <Link
          href={`/projects/${type}/${id}`}
          className=" flex items-center gap-2 max-w-36 underline"
        >
          <p className="font-Poppins">Projeye Git</p>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SwiperSlideItems;
