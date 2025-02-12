"use client";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { allData } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import SwiperSlideItems from "./SwiperSlideItems";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      autoplay={{
        delay: 3000, // 3 saniye aralıklarla geçiş yapacak
        disableOnInteraction: false, // Kullanıcı etkileşimine rağmen autoplay'in durmamasını sağlar
      }}
    >
      {allData.map((data) => (
        <SwiperSlide key={data.id}>
          <SwiperSlideItems data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
