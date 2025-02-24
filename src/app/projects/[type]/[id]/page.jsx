import Slider from "@/app/components/Slider";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import Link from "next/link";
import { allData } from "../../../data";
import Image from "next/image";

const Project = ({ params }) => {
  const { id } = params;
  const ourData = allData.find((item) => item.id === id);

  const { type, header, info, description, images } = ourData;

  return (
    <div className="w-full min-h-screen">
      <div className=" hidden  flex-col max-w-7xl mx-auto h-[500px]  md:flex mb-40 ">
        <Slider itemId={id} />
      </div>
      <div className="flex flex-col max-w-7xl mx-auto gap-8 px-5 ">
        <div className="flex justify-between items-center py-4 ">
          <div className="flex gap-2 items-center">
            <Link href={"/"}>
              <p>Home</p>
            </Link>
            <span className="text-slate-500">/</span>
            <Link href={"/projects"}>
              <p>Projeler</p>
            </Link>
            <span className="text-slate-500">/</span>
            <Link href={`/projects/${type}`}>
              <p>
                {type.toString().slice(0, 1).toUpperCase() +
                  type.toString().slice(1)}
              </p>
            </Link>
            <span className="text-slate-500">/</span>
            <Link href={`/projects/${type}/${id}`}>
              <p>{header}</p>
            </Link>
          </div>
          <Link
            className="flex gap-2 justify-center items-center hover:opacity-50 duration-300 ease-in-out"
            href="/projects"
          >
            <BsArrowLeft className="text-xl" />
            <p>Listelere Geri Don</p>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-center text-2xl">
            {header.toString().toUpperCase()}
          </p>
          {/* <div className="w-full h-[0.5px] bg-black"></div> */}
          <hr />
        </div>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 ">
          <div className="flex flex-col gap-4">
            <p className="text-lg text-justify">{info}</p>
            <div>
              <p className="text-xl">
                Description yada projenin butun detaylari teknik vs
              </p>
              {/* <div className="w-full h-[0.5px] bg-black"></div> */}
              <hr />
            </div>

            <p className="text-lg text-justify">{description}</p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-end">
            {images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={600}
                height={400}
                objectFit="cover"
                alt={header}
                className="pointer-events-none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
