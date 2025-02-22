import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row gap-2 p-4 items-center justify-center">
          <div className="flex gap-1 items-center">
            <Link
              href={
                "https://www.google.com/maps/place/DMG+%C4%B0n%C5%9Faat/@39.891988,32.8220451,17z/data=!4m14!1m7!3m6!1s0x14d34598af89034b:0xadd730900d1a1812!2zRE1HIMSwbsWfYWF0!8m2!3d39.891988!4d32.82462!16s%2Fg%2F11v41f0g0p!3m5!1s0x14d34598af89034b:0xadd730900d1a1812!8m2!3d39.891988!4d32.82462!16s%2Fg%2F11v41f0g0p?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLocationArrow />
            </Link>
            <p>AŞAĞIÖVEÇLER MAHALLESİ 1333. CADDE NO : 15/2 – ÇANKAYA/ANKARA</p>
          </div>
          <div className="h-5 w-[1px] bg-slate-900  hidden md:block"></div>

          <div className="flex gap-1 items-center">
            <FaPhoneAlt />
            <p>05324556291</p>
          </div>
          <div className="h-5 w-[1px] bg-slate-900  hidden md:block"></div>

          <div className="flex gap-1 items-center">
            <MdEmail />
            <p>info@dmginsaat.com</p>
          </div>
        </div>
        <div className="flex gap-2 py-4 items-center justify-center">
          <Link
            href={"https://www.linkedin.com/in/doruktekel/"}
            className="text-blue-500 hover:text-blue-800 "
            target="_blank"
          >
            <FaLinkedin size={25} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/doruktekel/"}
            className="text-blue-500 hover:text-blue-800 "
            target="_blank"
          >
            <FaLinkedin size={25} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/doruktekel/"}
            className="text-blue-500 hover:text-blue-800 "
            target="_blank"
          >
            <FaLinkedin size={25} />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between mb-4">
        <div className="w-full h-[0.5px] bg-black"></div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center items-center mb-4">
        <p>MİMARLIK + TASARIM + FİKİRLER</p>
        <div className="w-[0.5px] h-10 bg-black m-2"></div>
        <p>MİMARLIK + TASARIM + FİKİRLER</p>
      </div>
    </div>
  );
};

export default Footer;
