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
        <p className="text-2xl font-semibold font-Raleway self-center">
          Biz Kimiz ?
        </p>
        <hr />
        {/* <p className="text-justify abel-font">
            DMG İNŞAAT PROJE MÜŞAVİRLİK TAAHÜT SANAYİ VE TİC.LTD.ŞTİ.
          </p> */}

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
        {/* <div className="flex flex-col gap-10 items-center md:flex-row md:justify-between  py-20">
          <Image
            src={"/biz1.jpg"}
            layout="responsive"
            width={800}
            height={400}
            objectFit="cover"
            alt="CRISTINA MORA VE DAVID JIMENEZ"
            className="rounded-lg shadow-lg"
          />

          <div className="flex flex-col gap-2 ">
            <p className="uppercase text-xl ">CRISTINA MORA VE DAVID JIMENEZ</p>
            <p className="text-justify">
              Küçük çocuklar, mimariye adadıkları yeni hayatlarının
              sertifikasını paylaşıyorlar. Carlos Ferrater, Trias de Bes , Joan
              Gibernau, Elena Mateu, Gallardo -Bravo ve Pep Zazurca gibi büyük
              referanslarla birlikte hem formasyon oluştu . Bu deneyim çok
              etkileyici, yeni kimliği yansıtan bir mimari oluşturmak için bir
              metodolojinin geliştirilmesine ilham veriyor.
            </p>
          </div>
        </div> */}
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-50 w-full px-10"
      >
        <div className=" max-w-7xl mx-auto flex flex-col gap-10 items-center md:flex-row-reverse md:justify-between py-20 px-10">
          <Image
            src={"/biz2.jpg"}
            layout="responsive"
            width={600}
            height={300}
            objectFit="cover"
            alt="CRISTINA MORA VE DAVID JIMENEZ"
          />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-2 "
          >
            <p className="uppercase text-xl ">CRISTINA MORA VE DAVID JIMENEZ</p>
            <p className="text-justify">
              Küçük çocuklar, mimariye adadıkları yeni hayatlarının
              sertifikasını paylaşıyorlar. Carlos Ferrater, Trias de Bes , Joan
              Gibernau, Elena Mateu, Gallardo -Bravo ve Pep Zazurca gibi büyük
              referanslarla birlikte hem formasyon oluştu . Bu deneyim çok
              etkileyici, yeni kimliği yansıtan bir mimari oluşturmak için bir
              metodolojinin geliştirilmesine ilham veriyor.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto mt-10 px-10"
      >
        <div className="flex flex-col gap-10 items-center md:flex-row md:justify-between  py-20">
          <Image
            src={"/biz3.jpg"}
            layout="responsive"
            width={800}
            height={400}
            objectFit="cover"
            alt="CRISTINA MORA VE DAVID JIMENEZ"
            className="rounded-lg shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-2 "
          >
            <p className="uppercase text-xl ">CRISTINA MORA VE DAVID JIMENEZ</p>
            <p className="text-justify">
              Küçük çocuklar, mimariye adadıkları yeni hayatlarının
              sertifikasını paylaşıyorlar. Carlos Ferrater, Trias de Bes , Joan
              Gibernau, Elena Mateu, Gallardo -Bravo ve Pep Zazurca gibi büyük
              referanslarla birlikte hem formasyon oluştu . Bu deneyim çok
              etkileyici, yeni kimliği yansıtan bir mimari oluşturmak için bir
              metodolojinin geliştirilmesine ilham veriyor.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-50 w-full px-10"
      >
        <div className=" max-w-7xl mx-auto flex flex-col gap-10 items-center md:flex-row-reverse md:justify-between py-20 px-10">
          <Image
            src={"/biz4.jpg"}
            layout="responsive"
            width={600}
            height={300}
            objectFit="cover"
            alt="CRISTINA MORA VE DAVID JIMENEZ"
          />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-2 "
          >
            <p className="uppercase text-xl ">CRISTINA MORA VE DAVID JIMENEZ</p>
            <p className="text-justify">
              Küçük çocuklar, mimariye adadıkları yeni hayatlarının
              sertifikasını paylaşıyorlar. Carlos Ferrater, Trias de Bes , Joan
              Gibernau, Elena Mateu, Gallardo -Bravo ve Pep Zazurca gibi büyük
              referanslarla birlikte hem formasyon oluştu . Bu deneyim çok
              etkileyici, yeni kimliği yansıtan bir mimari oluşturmak için bir
              metodolojinin geliştirilmesine ilham veriyor.
            </p>
          </motion.div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Information;
