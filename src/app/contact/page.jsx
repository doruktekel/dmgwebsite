import Map from "../components/Map";

import ContactForm from "../components/ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-4 mt-10 px-10">
        <p className="text-2xl font-semibold font-Raleway self-center">
          İletişim
        </p>
        <hr />

        <div className="flex flex-col gap-6 md:flex-row  md:gap-12 mt-5">
          {/* <div className="flex flex-col gap-2 max-w-xl ">
            <div className=" w-full flex flex-col gap-2">
              <p className="text-black">Adres</p>
              <p className="text-justify">
                Aşağı Öveçler, 1333. Sk. No:15 D:2, 06460 Çankaya/Ankara
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="font-semibold">Telefon</p>
              <p className="text-justify"> 0312 472 06 03</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="font-semibold ">Mail</p>
              <p className="text-justify ">zzz@zzz.gmail.com</p>
            </div>
          </div> */}
          <div className="flex items-center justify-center">
            <Image
              src={"/Contact_01.webp"}
              width={1400}
              height={500}
              alt="Contact_image"
            />
          </div>
          <div className="w-0.5 bg-gray-500 h-[400px] hidden md:block"></div>
          <ContactForm />
        </div>
        <hr />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
