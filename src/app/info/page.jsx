"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Information = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col gap-2 md:gap-4 mt-10 px-10"
      >
        <h1 className="text-2xl font-semibold font-Raleway self-center">
          Biz Kimiz ?
        </h1>
        <hr />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10 items-center md:flex-row md:justify-between  py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-Poppins text-justify max-w-2xl border-l-2 border-slate-300 px-4">
              DMG İnşaat, 2015 yılında kurulmuş dinamik ve yenilikçi bir inşaat
              firmasıdır. Kuruluşumuzdan bu yana, inşaat sektöründe sağlam ve
              estetik yapıların hayata geçirilmesi için çalışmaktayız.
              Misyonumuz ve vizyonumuz; inşaat işinde uzmanlaşarak kaliteli,
              güvenilir ve modern projeler gerçekleştirmek, müşteri
              memnuniyetini en üst düzeye çıkarmaktır.
            </p>
          </motion.div>
          <Image
            src={"/info_02.webp"}
            width={400}
            height={800}
            alt="info_image_01"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10 items-center md:flex-row md:justify-between  py-20"
        >
          <Image
            src={"/info_01.webp"}
            width={400}
            height={800}
            alt="info_image_01"
          />
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-Poppins text-justify max-w-2xl border-r-2 border-slate-300 px-4  ">
              Firmamız, inşaat ve dekorasyon alanlarında sunduğu geniş hizmet
              yelpazesi ile sektörün farklı ihtiyaçlarına cevap vermektedir. Her
              projemizde titizlikle çalışarak, detaylara verdiğimiz önem
              sayesinde fonksiyonel ve estetik mekanlar oluşturuyoruz.
            </p>
          </motion.div>
        </motion.div>

        <hr />
      </motion.div>
    </div>
  );
};

export default Information;
