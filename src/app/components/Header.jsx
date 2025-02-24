import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 w-full bg-white shadow-lg text-slate-900 p-10 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href={"/"} className="hover:opacity-50 duration-300 ease-in-out ">
          LOGO
        </Link>
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              href={"/projects"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <p className="font-bold text-lg font-Raleway">PROJELER</p>
            </Link>
          </li>
          <li>
            <Link
              href={"/info"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <p className=" font-bold  text-lg font-Raleway">HAKKIMIZDA</p>
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="hover:opacity-50 duration-300 ease-in-out "
            >
              <p className="font-bold text-lg font-Raleway">İLETİŞİM</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
