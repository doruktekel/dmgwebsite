"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { allData } from "../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ itemId }) => {
  const [datas, setDatas] = useState(allData);
  const [data, setData] = useState(null);

  const ourData = allData.find((item) => item.id === itemId);

  useEffect(() => {
    if (ourData) {
      setData(ourData);
    }
  }, [ourData]);

  return (
    <div className="relative w-full h-[500px]">
      {" "}
      {/* Yüksekliği burada ayarladık */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {data &&
          data.images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <Image
                src={image}
                alt={ourData.header}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="pointer-events-none"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
