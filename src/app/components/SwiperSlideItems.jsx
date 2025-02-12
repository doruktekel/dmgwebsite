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
      <div className="absolute left-20 bottom-20 p-10 opacity-85 bg-white flex flex-col max-w-[500px] gap-4 z-20 ">
        <p className="  uppercase p-2 text-white bg-black">{header}</p>
        <p className="line-clamp-3">{info}</p>
        <Link
          href={`/projects/${type}/${id}`}
          className="uppercase flex items-center gap-2 max-w-36"
        >
          <p>projeye git</p>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SwiperSlideItems;
