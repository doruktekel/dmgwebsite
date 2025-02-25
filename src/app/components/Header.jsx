"use client";

import Link from "next/link";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { useRef } from "react";

const Header = () => {
  const miniMenuRef = useRef();

  const openMiniMenu = () => {
    miniMenuRef.current.style.transform = "translateX(-20rem)";
  };

  const closeMiniMenu = () => {
    miniMenuRef.current.style.transform = "translateX(20rem)";
  };

  return (
    <div className="sticky top-0 w-full bg-white shadow-lg text-slate-900 p-10 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href={"/"} className="hover:opacity-50 duration-300 ease-in-out ">
          LOGO
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              href={"/projects"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <p className="font-semibold text-xl font-Raleway">PROJELER</p>
            </Link>
          </li>
          <li>
            <Link
              href={"/info"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <p className=" font-semibold  text-xl font-Raleway">HAKKIMIZDA</p>
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <p className="font-semibold text-xl font-Raleway">İLETİŞİM</p>
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
                <p className="font-semibold text-lg font-Raleway text-gray-50">
                  ANA SAYFA
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="hover:opacity-50 duration-300 ease-in-out "
                onClick={closeMiniMenu}
              >
                <p className="font-semibold text-lg font-Raleway text-gray-50">
                  PROJELER
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"/info"}
                className="hover:opacity-50 duration-300 ease-in-out "
                onClick={closeMiniMenu}
              >
                <p className=" font-semibold  text-lg font-Raleway text-gray-50">
                  HAKKIMIZDA
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:opacity-50 duration-300 ease-in-out "
                onClick={closeMiniMenu}
              >
                <p className="font-semibold text-lg font-Raleway text-gray-50">
                  İLETİŞİM
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
