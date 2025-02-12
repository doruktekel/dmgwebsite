"use client";

import { useEffect, useState } from "react"; // useState importu eksikti
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { allData } from "../data"; // allData'nın doğru import edildiğinden emin olun

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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      // pagination
      autoplay={{ delay: 3000 }} // 3 saniye arayla otomatik geçiş
      loop={true} // Slaytları döngüsel yap
    >
      {data &&
        data.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image} // Görselin yolu
              alt={ourData.header} // Alternatif metin
              layout="responsive" // Responsive düzen
              width={600} // Resim genişliği
              height={1200} // Resim yüksekliği
              objectFit="cover" // Resmin kesilmeden sığması için
              className="pointer-events-none"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
