"use client";

import Link from "next/link";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { useRef } from "react";
import Image from "next/image";

const Header = () => {
  const miniMenuRef = useRef();

  const openMiniMenu = () => {
    miniMenuRef.current.style.transform = "translateX(-20rem)";
  };

  const closeMiniMenu = () => {
    miniMenuRef.current.style.transform = "translateX(20rem)";
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-lg text-slate-900 p-4 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href={"/"} className="hover:opacity-50 duration-300 ease-in-out ">
          <Image
            src={"/Real_Logo_01.png"}
            width={220}
            height={100}
            alt="Dmg_logo"
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              href={"/projects"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <h1 className="font-semibold text-xl font-Raleway">PROJELER</h1>
            </Link>
          </li>
          <li>
            <Link
              href={"/info"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <h1 className=" font-semibold  text-xl font-Raleway">
                HAKKIMIZDA
              </h1>
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <h1 className="font-semibold text-xl font-Raleway">İLETİŞİM</h1>
            </Link>
          </li>
        </ul>

        <MdMenu
          className="md:hidden text-3xl cursor-pointer"
          onClick={openMiniMenu}
        />

        <div
          className="md:hidden fixed  justify-center p-8 bg-gray-700 w-[180px]  top-0 -right-80  transition-transform duration-300 ease-in-out"
          ref={miniMenuRef}
        >
          <MdClose
            className="absolute right-4 top-4 text-gray-50 text-3xl cursor-pointer"
            onClick={closeMiniMenu}
          />
          <ul className="pt-8 flex-col space-y-4">
            <li>
              <Link
                href={"/"}
                className="hover:opacity-50 duration-300 ease-in-out "
                onClick={closeMiniMenu}
              >
                <h1 className="font-semibold text-lg font-Raleway text-gray-50">
                  ANA SAYFA
                </h1>
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="hover:opacity-50 duration-300 ease-in-out "
                onClick={closeMiniMenu}
              >
                <h1 className="font-semibold text-lg font-Raleway text-gray-50">
                  PROJELER
                </h1>
              </Link>
            </li>
            <li>
              <Link
                href={"/info"}
                className="hover:opacity-50 duration-300 ease-in-out "
                onClick={closeMiniMenu}
              >
                <h1 className=" font-semibold  text-lg font-Raleway text-gray-50">
                  HAKKIMIZDA
                </h1>
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:opacity-50 duration-300 ease-in-out "
                onClick={closeMiniMenu}
              >
                <h1 className="font-semibold text-lg font-Raleway text-gray-50">
                  İLETİŞİM
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
